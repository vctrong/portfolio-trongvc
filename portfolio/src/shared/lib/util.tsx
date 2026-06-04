/**
 * cn — Merge class names, filtering out falsy values.
 *
 * For full Tailwind class deduplication install:
 *   npm install clsx tailwind-merge
 * and replace the body with:
 *   import { clsx } from 'clsx'
 *   import { twMerge } from 'tailwind-merge'
 *   return twMerge(clsx(inputs))
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
