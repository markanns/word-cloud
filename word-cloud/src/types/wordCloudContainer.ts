import type { Topic } from "../types/topic";
import type { Position } from "../types/position";

export type WordCloudContainerProps = {
  positions: Position[];
  selected: Topic | null;
  onSelectTopic: (topic: Topic) => void;
};
