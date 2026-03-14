import type { AssetRef } from '../../models/types';

interface VisualCardProps {
  label: string;
  asset: AssetRef;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  subLabel?: string;
}

export function VisualCard(props: VisualCardProps) {
  const { label, asset, selected = false, disabled = false, onClick, subLabel } = props;

  return (
    <button
      type="button"
      className={`visual-card ${selected ? 'is-selected' : ''}`}
      onClick={onClick}
      disabled={disabled}
      aria-pressed={selected}
    >
      <span className="visual-card__image" aria-hidden="true">
        {asset.image ?? '🧩'}
      </span>
      <span className="visual-card__label">{label}</span>
      {subLabel ? <span className="visual-card__sub-label">{subLabel}</span> : null}
    </button>
  );
}
