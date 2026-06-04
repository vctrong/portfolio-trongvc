import type { ButtonHTMLAttributes } from 'react'
import Link from 'next/link'
import { cn } from '@/shared/lib/util'

/* ── Variant & Size maps ────────────────────────────────────── */

export type ButtonVariant = 'primary' | 'outline' | 'filled'
export type ButtonSize    = 'sm' | 'md' | 'lg'

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-fixed-dim text-on-primary-fixed hover:bg-primary-fixed',
  outline:
    'glow-border border border-outline bg-transparent text-on-surface hover:text-primary-fixed-dim',
  filled:
    'bg-primary-container text-on-primary-container hover:bg-primary-fixed',
}

const SIZES: Record<ButtonSize, string> = {
  sm: 'px-4  py-2 text-body-md font-body-md',
  md: 'px-6  py-2 text-body-md font-body-md',
  lg: 'px-8  py-3 text-body-lg font-body-lg',
}

const BASE =
  'inline-flex items-center justify-center gap-2 font-bold rounded-full transition-all active:scale-95 cursor-pointer'

/* ── Prop types ─────────────────────────────────────────────── */

interface BaseProps {
  variant?:  ButtonVariant
  size?:     ButtonSize
  className?: string
  children:  React.ReactNode
}

/** Renders as a native <button> element */
export type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never }

/** Renders as a Next.js <Link> */
export type ButtonAsLink = BaseProps & {
  href:     string
  target?:  string
  rel?:     string
}

export type ButtonProps = ButtonAsButton | ButtonAsLink

/* ── Component ──────────────────────────────────────────────── */

/**
 * Button — polymorphic button / link component.
 *
 * Renders as `<Link>` when `href` is provided, otherwise `<button>`.
 *
 * @example
 * <Button href="#projects" variant="primary" size="lg">View Projects</Button>
 * <Button onClick={handleSubmit} variant="filled">Submit</Button>
 */
export function Button({
  variant  = 'primary',
  size     = 'lg',
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(BASE, VARIANTS[variant], SIZES[size], className)

  if ('href' in props && props.href != null) {
    const { href, target, rel } = props as ButtonAsLink
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    )
  }

  const { href: _unused, ...buttonProps } = props as ButtonAsButton & { href?: never }
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
