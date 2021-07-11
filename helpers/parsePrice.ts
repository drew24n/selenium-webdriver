/**
 * Converts string to number or float and rounds it. If string doesn't contain a
 * numbers, then function returns 0
 *
 * @param {string} price String, which contains number
 * @returns {number} Returns number
 */
export function parsePrice(price: string): number {
  const parsed = parseFloat(price.replace(/[^\d.]*/g, ''));
  if (isNaN(parsed)) return 0;
  return parsed;
}
