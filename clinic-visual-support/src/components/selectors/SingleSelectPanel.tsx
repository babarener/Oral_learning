import type { SelectableItem } from '../../models/types';

interface SingleSelectPanelProps {
  title: string;
  helperText: string;
  bodyAsset: string;
  items: SelectableItem[];
  selectedId: string | null;
  onSelect: (item: SelectableItem) => void;
}

export function SingleSelectPanel(props: SingleSelectPanelProps) {
  const { title, helperText, bodyAsset, items, selectedId, onSelect } = props;

  return (
    <section className="page-card">
      <header className="page-card__header">
        <h2>{title}</h2>
        <p>{helperText}</p>
      </header>

      <div className="body-selector-layout">
        <div className="body-canvas" role="img" aria-label="Full body placeholder image">
          <div className="body-canvas__figure">{bodyAsset}</div>
          {items.map((item) => {
            if (!item.hotspot) {
              return null;
            }

            const isSelected = item.id === selectedId;
            const hotspotStyle = {
              left: `${item.hotspot.x}%`,
              top: `${item.hotspot.y}%`,
              width: `${item.hotspot.w}%`,
              height: `${item.hotspot.h}%`,
            };

            return (
              <button
                type="button"
                key={item.id}
                style={hotspotStyle}
                className={`hotspot ${isSelected ? 'is-selected' : ''}`}
                aria-label={item.label}
                onClick={() => onSelect(item)}
              />
            );
          })}
        </div>

        <ul className="body-part-list" aria-label="Body part labels">
          {items.map((item) => {
            const isSelected = selectedId === item.id;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  className={`label-chip ${isSelected ? 'is-selected' : ''}`}
                  onClick={() => onSelect(item)}
                  aria-pressed={isSelected}
                >
                  <span className="label-chip__icon" aria-hidden="true">
                    {item.asset.image ?? '🧩'}
                  </span>
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
