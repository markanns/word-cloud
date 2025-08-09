/**
 * Determines text color based on sentiment score
 *
 * @param score - Sentiment score (0-100)
 * @returns CSS color name for the sentiment
 *
 * Color mapping:
 * - score > 60: "green" (positive sentiment)
 * - score < 40: "red" (negative sentiment)
 * - 40-60: "grey" (neutral sentiment)
 */
export const getColor = (score: number): string => {
  if (score > 60) return "green";
  if (score < 40) return "red";
  return "grey";
};
