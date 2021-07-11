/**
 * Returns a random number between 1 and X
 *
 * @param {number} max Max number
 * @returns {number} Return a random number
 */
export function getRandomNum(max: number): number {
  const random = Math.floor(Math.random() * max);
  if (random === 0) return 1;
  return random;
}
