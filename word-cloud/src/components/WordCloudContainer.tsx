import type { WordCloudContainerProps } from "../types/wordCloudContainer";
import { WordCloudButton } from "./WordCloudButton";

export const WordCloudContainer = ({
  positions,
  selected,
  onSelectTopic,
}: WordCloudContainerProps) => {
  return (
    <div className="word-cloud__container">
      {positions.map((pos) => (
        <WordCloudButton
          key={pos.topic.label}
          position={pos}
          isSelected={selected?.label === pos.topic.label}
          onSelect={onSelectTopic}
        />
      ))}
    </div>
  );
};
