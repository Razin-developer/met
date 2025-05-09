"use client";

import { items as dbItems } from '@/db'
import { toSlug } from '@/lib/slugConvertion'
import Link from 'next/link'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SectionPage = ({ params }: any) => {
  const { section } = params // params
  const items = dbItems.filter((i) => i.category.toLowerCase() === section.toLowerCase())

  console.log(items)

  if (items.length === 0) {
    return (
      <div className='flex items-center justify-center h-screen text-2xl font-bold text-red-500'>
        Couldn&apos;t find {section.toUpperCase()}
      </div>
    )
  }

  return (
    <div className="pt-32 px-8 md:px-20">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 underline">
          <Link href={`/`}>
            {'HOME'}
          </Link>{' '}
          {'>'}{' '}
          <Link href={`/${section.toLocaleLowerCase()}`}>
            {section.toUpperCase()}</Link>
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-600 text-base md:text-lg text-gray-700 shadow-md">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="border border-gray-600 p-4">NO.</th>
              <th className="border border-gray-600 p-4">ITEMS</th>
              <th className="border border-gray-600 p-4">RESULTS</th>
            </tr>
          </thead>
          <tbody>
            {items && items.map((item, index) => (
              <tr
                key={index}
                className="odd:bg-gray-100 even:bg-gray-200 transition-all hover:bg-blue-100"
              >
                <td className="border border-gray-600 p-4 font-semibold text-center">
                  {index + 1}
                </td>
                <td className="border border-gray-600 p-4 font-medium text-center">
                  {item.name.toUpperCase()}
                </td>
                <td className="border border-gray-600 p-4 text-center">
                  {item.isPublished ? (
                    <Link href={`/${section}/${toSlug(item.name)}`} className="text-blue-600 hover:underline font-semibold">
                      View
                    </Link>
                  ) : (
                    <span className="text-gray-500">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SectionPage
