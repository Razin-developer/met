"use client";

import { items } from '@/db';
import { toSlug } from '@/lib/slugConvertion';
import Link from 'next/link';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Table from '@/lib/Table';
import { useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SectionPage = ({ params }: any) => {
  const { section, item: paramsItem } = params;
  const elementRef = useRef<HTMLDivElement>(null);

  const foundedItem = items.find(
    (item) =>
      item.category.toLowerCase() === section.toLowerCase() &&
      toSlug(item.name) === paramsItem
  );

  if (!foundedItem) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl text-red-500 font-bold">
        Couldn&apos;t find a matching result
      </div>
    );
  }

  if (!foundedItem.isPublished) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl text-red-500 font-bold">
        This result is not published yet
      </div>
    );
  }

  const sortedStudents = [...foundedItem.students].sort((a, b) => {
    const getPlacePriority = (place: number | null | undefined) => {
      if (place === 1) return 0;
      if (place === 2) return 1;
      if (place === 3) return 2;
      if (typeof place === 'number') return 3;
      return 4;
    };
    return getPlacePriority(a.place) - getPlacePriority(b.place);
  });

  const handleDownloadPDF = async () => {
    const PureElement = elementRef.current; // ✅ Correct

    if (!PureElement) {
      console.error("No table element found");
      return;
    }

    // Ensure the element is visible and has a valid size before processing
    const element = PureElement; // Ensure this function doesn't break the element structure

    // Log the element to ensure it's not null or has size issues
    console.log("Element for capture:", element);
    console.log("Element dimensions:", element.getBoundingClientRect());

    // Ensure the element has non-zero dimensions
    const { width, height } = element.getBoundingClientRect();
    if (width === 0 || height === 0) {
      console.error("Element has zero width or height, cannot capture.");
      return;
    }

    try {
      // Force layout reflow before capturing
      await new Promise((resolve) => setTimeout(resolve, 0));

      // Capture the element using html2canvas
      const canvas = await html2canvas(element, {
        scale: 2, // Increase the scale for better resolution
        backgroundColor: '#ffffff', // Ensure white background
      });

      // Check if canvas has valid dimensions
      if (!canvas.width || !canvas.height) {
        throw new Error("Canvas dimensions are invalid");
      }

      // Log canvas dimensions for debugging
      console.log("Canvas dimensions:", canvas.width, canvas.height);

      // Convert canvas to image data
      const imgData = canvas.toDataURL('image/jpeg', 1.0);

      // Create PDF with the canvas dimensions
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width, canvas.height], // Use canvas dimensions as PDF page size
      });

      // Add the image to the PDF
      pdf.addImage(imgData, 'JPEG', 0, 0, canvas.width, canvas.height);

      // Save the PDF with the desired filename
      pdf.save(`${foundedItem.name.replace(/\s+/g, '_')}_Results.pdf`);
    } catch (error) {
      console.error("Error generating PDF: ", error);
    }
  };

  return (

    <div className="pt-32 pb-16 px-8 md:px-20">
      <div ref={elementRef} style={{ position: 'absolute', top: '-9999px', left: '-9999px' }}>
        <Table sortedStudents={sortedStudents} />
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 underline">
          <Link href="/">HOME</Link> {' > '}
          <Link href={`/${section.toLowerCase()}`}>{section.toUpperCase()}</Link> {' > '}
          <Link href={`/${section.toLowerCase()}/${toSlug(foundedItem.name)}`}>
            {foundedItem.name.toUpperCase()}
          </Link>
        </h2>
      </div>

      <div className="overflow-x-auto bg-white p-4 rounded">
        <table className="w-full border-collapse border border-gray-600 text-base md:text-lg text-gray-700 shadow-md">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="border border-gray-600 p-4">CHEST NO.</th>
              <th className="border border-gray-600 p-4">NAME</th>
              <th className="border border-gray-600 p-4">CLASS</th>
              <th className="border border-gray-600 p-4">DIVISION</th>
              <th className="border border-gray-600 p-4">PLACE</th>
              <th className="border border-gray-600 p-4">GRADE</th>
            </tr>
          </thead>
          <tbody>
            {sortedStudents.map((student, index) => (
              <tr
                key={index}
                className="odd:bg-gray-100 even:bg-gray-200 transition-all hover:bg-blue-100"
              >
                <td className="border border-gray-600 p-4 font-semibold text-center">
                  {student.chestNo}
                </td>
                <td className="border border-gray-600 p-4 font-medium text-center">
                  {student.name.toUpperCase()}
                </td>
                <td className="border border-gray-600 p-4 font-semibold text-center">
                  {student.class}
                </td>
                <td className="border border-gray-600 p-4 font-medium text-center">
                  {student.division.toUpperCase()}
                </td>
                <td className="border border-gray-600 p-4 font-semibold text-center">
                  {student.place}
                </td>
                <td className="border border-gray-600 p-4 font-medium text-center">
                  A
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>



      <div className="mt-6">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleDownloadPDF}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default SectionPage;
