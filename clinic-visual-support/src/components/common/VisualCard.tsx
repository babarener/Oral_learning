import type { AssetRef } from '../../models/types';

interface VisualCardProps {
  label: string;
  asset: AssetRef;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  subLabel?: string;
}

function isImageSrc(value?: string): value is string {
  if (!value) {
    return false;
  }

  return /\.(png|jpe?g|svg|webp|gif|avif)$/i.test(value) || value.startsWith('/images/');
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
        {isImageSrc(asset.image) ? (
          <img src={asset.image} alt={asset.alt ?? label} className="visual-card__image-content" />
        ) : (
          asset.image ?? '🧩'
        )}
      </span>
      <span className="visual-card__label">{label}</span>
      {subLabel ? <span className="visual-card__sub-label">{subLabel}</span> : null}
    </button>
  );
}
