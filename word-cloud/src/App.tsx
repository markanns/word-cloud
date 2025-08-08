import "./App.css";
import cloud from "d3-cloud";
import { useState, useEffect } from "react";
import topicsData from "./topics.json";
import type { Word } from "./types/word";
import type { Topic } from "./types/topic";
import type { Position } from "./types/position";
import type { Layout } from "./types/layout";
import wordImage from "./assets/wordImage.jpg";
import { getFontSizePercentile } from "./utils/getFontSize";
import { getColor } from "./utils/getColor";

function App() {
  const [selected, setSelected] = useState<Topic | null>(null);
  const [positions, setPositions] = useState<Position[]>([]);
  const topics: Topic[] = topicsData.topics;
  const volumes = topics.map((t) => t.volume);

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
  }, [topics]);

  const infoPanel = (
    <div className="info-panel">
      {selected ? (
        <>
          <strong>Information on the topic "{selected.label}"</strong>
          <div className="info-panel__total">
            Total mentions: {selected.volume}
          </div>
          <div className="info-panel__group">
            <div className="info-panel__positive">
              Positive Mentions: {selected.sentiment?.positive || 0}
            </div>
            <div>Neutral Mentions: {selected.sentiment?.neutral || 0}</div>
            <div className="info-panel__negative">
              Negative Mentions: {selected.sentiment?.negative || 0}
            </div>
          </div>
        </>
      ) : (
        <div>Click on the Topic to see details</div>
      )}
    </div>
  );

  return (
    <>
      <div className="header">
        <img className="header__image" src={wordImage} alt="Word Cloud" />
        <h1>My Topics Challenge</h1>
      </div>
      <div className="word-cloud">
        <div className="word-cloud__container">
          {positions.map((pos) => (
            <button
              key={pos.topic.label}
              type="button"
              className={`word-cloud__word ${
                selected?.label === pos.topic.label ? "selected" : ""
              }`}
              style={{
                top: pos.y,
                left: pos.x,
                fontSize: `${pos.size}px`,
                color: getColor(pos.topic.sentimentScore),
                transform: `${
                  pos.rotate ? `rotate(${pos.rotate}deg)` : ""
                } translate(-50%, -50%)`,
              }}
              onClick={() => setSelected(pos.topic)}
            >
              {pos.topic.label}
            </button>
          ))}
        </div>
        {infoPanel}
      </div>
    </>
  );
}

export default App;
