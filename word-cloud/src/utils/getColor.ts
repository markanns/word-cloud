export const getColor = (score: number): string => {
  if (score > 60) return "green";
  if (score < 40) return "red";
  return "grey";
};
