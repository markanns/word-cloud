import type { Topic } from "../types/topic";
import type { Position } from "../types/position";

export type WordCloudButtonProps = {
  position: Position;
  isSelected: boolean;
  onSelect: (topic: Topic) => void;
};
