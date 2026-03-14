import type { SelectableItem } from '../../models/types';
import { VisualCard } from '../common/VisualCard';

interface MultiSelectGridProps {
  title: string;
  helperText: string;
  items: SelectableItem[];
  selectedIds: string[];
  onToggle: (item: SelectableItem) => void;
}

export function MultiSelectGrid(props: MultiSelectGridProps) {
  const { title, helperText, items, selectedIds, onToggle } = props;

  return (
    <section className="page-card">
      <header className="page-card__header">
        <h2>{title}</h2>
        <p>{helperText}</p>
      </header>

      <div className="symptom-grid">
        {items.map((item) => (
          <VisualCard
            key={item.id}
            label={item.label}
            asset={item.asset}
            selected={selectedIds.includes(item.id)}
            onClick={() => onToggle(item)}
          />
        ))}
      </div>
    </section>
  );
}
