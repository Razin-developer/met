/**
 * Converts a string to a URL-friendly slug
 * Example: "Story Telling" → "story-telling"
 */
export const toSlug = (str: string): string => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')  // replace non-alphanumeric characters with hyphens
    .replace(/^-+|-+$/g, '');     // remove leading/trailing hyphens
};

/**
 * Converts a slug back to a normal string
 * Example: "story-telling" → "Story Telling"
 */
export const fromSlug = (slug: string): string => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
