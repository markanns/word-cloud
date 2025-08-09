import { useState, useEffect, useMemo } from "react";
import cloud from "d3-cloud";
import type { Topic } from "../types/topic";
import type { Position } from "../types/position";
import type { Layout } from "../types/layout";
import type { Word } from "../types/word";
import { getFontSizePercentile } from "../utils/getFontSize";

export const useWordCloud = (topics: Topic[]) => {
  const [positions, setPositions] = useState<Position[]>([]);

  const volumes = useMemo(() => topics.map((t) => t.volume), [topics]);

  useEffect(() => {
    const containerWidth = 1000;
    const containerHeight = 600;

    const words = topics.map((topic) => ({
      text: topic.label,
      size: getFontSizePercentile(topic.volume, volumes),
      topic: topic,
    }));

    const layout = cloud()
      .size([containerWidth, containerHeight])
      .words(words)
      .padding(12)
      .rotate(() => 0)
      .fontSize((d: Layout) => d.size)
      .on("end", (words: Word[]) => {
        const positions: Position[] = words.map((word) => ({
          topic: word.topic,
          x: (word.x || 0) + containerWidth / 2,
          y: (word.y || 0) + containerHeight / 2,
          size: word.size || 15,
          rotate: word.rotate,
        }));
        setPositions(positions);
      });

    layout.start();
  }, [topics, volumes]);

  return positions;
};
