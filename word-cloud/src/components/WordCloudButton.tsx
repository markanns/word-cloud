import type { WordCloudButtonProps } from "../types/wordCloudButton";
import { getColor } from "../utils/getColor";

export const WordCloudButton = ({
  position,
  isSelected,
  onSelect,
}: WordCloudButtonProps) => {
  return (
    <button
      type="button"
      className={`word-cloud__word ${isSelected ? "selected" : ""}`}
      style={{
        top: position.y,
        left: position.x,
        fontSize: `${position.size}px`,
        color: getColor(position.topic.sentimentScore),
        transform: `${
          position.rotate ? `rotate(${position.rotate}deg)` : ""
        } translate(-50%, -50%)`,
      }}
      onClick={() => onSelect(position.topic)}
    >
      {position.topic.label}
    </button>
  );
};
