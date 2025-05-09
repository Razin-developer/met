export function convertTailwindColorsToRGB(element: HTMLElement): HTMLElement {
  // Define Tailwind color classes and their respective RGB values
  const colorMap: { [key: string]: string } = {
    'bg-gray-800': 'rgb(31, 41, 55)',
    'bg-gray-600': 'rgb(75, 85, 99)',
    'bg-gray-200': 'rgb(229, 231, 235)',
    'bg-blue-100': 'rgb(219, 234, 254)',
    'text-white': 'rgb(255, 255, 255)',
    'text-gray-700': 'rgb(55, 65, 81)',
    'border-gray-600': 'rgb(75, 85, 99)',
    'border-gray-100': 'rgb(243, 244, 246)',
    // Add other Tailwind color classes and their RGB equivalents here
  };

  // Helper function to replace color classes with RGB
  function replaceColorClasses(element: HTMLElement) {
    const classList = Array.from(element.classList);
    classList.forEach((cls) => {
      if (colorMap[cls]) {
        // Replace the class with its RGB value
        if (cls.startsWith('bg-')) {
          element.style.backgroundColor = colorMap[cls] || element.style.backgroundColor;
        }
        if (cls.startsWith('text-')) {
          element.style.color = colorMap[cls] || element.style.color;
        }
        if (cls.startsWith('border-')) {
          element.style.borderColor = colorMap[cls] || element.style.borderColor;
        }
      }
    });
  }

  // Iterate over all child elements of the provided `element`
  function traverseNode(element: HTMLElement) {
    if (element.nodeType === 1) { // Only process element nodes (i.e., not text or comment nodes)
      replaceColorClasses(element);
    }
    // Recursively traverse the child nodes
    Array.from(element.childNodes).forEach((child) => {
      if (child instanceof HTMLElement) {
        traverseNode(child);
      }
    });
  }

  // Start traversal on the provided element
  traverseNode(element);

  // Return the modified element
  return element;
}
