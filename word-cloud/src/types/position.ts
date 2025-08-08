import type { Topic } from "./topic";

export type Position = {
  topic: Topic;
  x: number;
  y: number;
  size: number;
  rotate?: number;
};
