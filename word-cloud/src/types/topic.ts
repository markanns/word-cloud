import type { Sentiment } from "./sentiment";

export type Topic = {
  label: string;
  volume: number;
  sentimentScore: number;
  sentiment?: Sentiment;
};
