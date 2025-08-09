import type { InfoPanelProps } from "../types/infoPanel";

export const InfoPanel = ({ selected }: InfoPanelProps) => {
  return (
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
};
