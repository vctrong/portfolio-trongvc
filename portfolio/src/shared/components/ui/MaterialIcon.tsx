import type { CSSProperties } from 'react'

type FillValue   = 0 | 1
type WeightValue = 100 | 200 | 300 | 400 | 500 | 600 | 700

interface MaterialIconProps {
  /** Icon name from https://fonts.google.com/icons */
  name: string
  /** 0 = outlined (default), 1 = filled */
  fill?: FillValue
  /** Stroke weight, 100–700 */
  weight?: WeightValue
  className?: string
  'aria-label'?: string
}

/**
 * MaterialIcon — renders a Material Symbols icon using the
 * variable font's FILL / wght axes.
 *
 * Requires the Material Symbols Outlined stylesheet loaded in layout.tsx.
 *
 * @example
 * <MaterialIcon name="code"     fill={1} className="text-primary-fixed-dim text-sm" />
 * <MaterialIcon name="database" fill={1} className="text-secondary-fixed" />
 */
export function MaterialIcon({
  name,
  fill = 0,
  weight = 400,
  className = '',
  'aria-label': ariaLabel,
}: MaterialIconProps) {
  const style: CSSProperties = {
    fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}`,
  }

  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={style}
      aria-hidden={ariaLabel ? undefined : true}
      aria-label={ariaLabel}
    >
      {name}
    </span>
  )
}
