export const getFontSizePercentile = (volume: number, allVolumes: number[]) => {
  const sorted = [...allVolumes].sort((a, b) => a - b);
  const index = sorted.findIndex((v) => v === volume);

  // pozicija u skali 0 - 1
  const percentile = index / (sorted.length - 1);

  // Odredi 6 grupa po percentilima
  if (percentile <= 1 / 6) return 15;
  if (percentile <= 2 / 6) return 20;
  if (percentile <= 3 / 6) return 25;
  if (percentile <= 4 / 6) return 30;
  if (percentile <= 5 / 6) return 35;
  return 40;
};
