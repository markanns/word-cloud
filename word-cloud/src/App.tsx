import { useState } from "react";
import topicsData from "./topics.json";
import type { Topic } from "./types/topic";
import { Header } from "./components/Header";
import { InfoPanel } from "./components/InfoPanel";
import { WordCloudContainer } from "./components/WordCloudContainer";
import { useWordCloud } from "./hooks/useWordCloud";

function App() {
  const [selected, setSelected] = useState<Topic | null>(null);
  const topics: Topic[] = topicsData.topics;
  const positions = useWordCloud(topics);

  return (
    <>
      <Header />
      <div className="word-cloud">
        <WordCloudContainer
          positions={positions}
          selected={selected}
          onSelectTopic={setSelected}
        />
        <InfoPanel selected={selected} />
      </div>
    </>
  );
}

export default App;
