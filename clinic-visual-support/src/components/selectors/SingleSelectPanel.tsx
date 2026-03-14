import type { SelectableItem } from '../../models/types';

interface SingleSelectPanelProps {
  title: string;
  helperText: string;
  bodyAsset: string;
  items: SelectableItem[];
  selectedId: string | null;
  onSelect: (item: SelectableItem) => void;
}

function isImageSrc(value?: string): value is string {
  if (!value) {
    return false;
  }

  return /\.(png|jpe?g|svg|webp|gif|avif)$/i.test(value) || value.startsWith('/images/');
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
          <div className="body-canvas__figure">
            {isImageSrc(bodyAsset) ? (
              <img src={bodyAsset} alt="Body" className="body-canvas__figure-image" />
            ) : (
              bodyAsset
            )}
          </div>
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
                    {isImageSrc(item.asset.image) ? (
                      <img
                        src={item.asset.image}
                        alt={item.asset.alt ?? item.label}
                        className="label-chip__icon-image"
                      />
                    ) : (
                      item.asset.image ?? '🧩'
                    )}
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
