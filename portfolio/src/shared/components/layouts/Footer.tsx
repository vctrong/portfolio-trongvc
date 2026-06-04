import Link from 'next/link'
import { MaterialIcon } from '../ui/MaterialIcon'
import { DEVELOPER, SOCIAL_LINKS } from '@/features/home-page/constants/home.constant'


/**
 * Footer — full-width bottom section with social icon links.
 */
export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-section-gap border-t border-white/5 relative z-10">
      <div className="flex flex-col items-center gap-8 px-gutter max-w-container-max mx-auto text-center">

        {/* Wordmark */}
        <h2 className="font-headline-md text-headline-md font-bold text-on-surface">
          {DEVELOPER.name}
        </h2>

        {/* Tagline */}
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Building clean, useful and modern web experiences
        </p>

        {/* Social links */}
        <div className="flex gap-6">
          {SOCIAL_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-label={link.label}
              target="_blank"
              className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors opacity-80 hover:opacity-100 p-2"
            >
              <MaterialIcon name={link.icon} fill={1} />
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="font-body-md text-body-md text-on-surface-variant/50 mt-4">
          &copy; 2026 {DEVELOPER.name}. All rights reserved.
        </p>

      </div>
    </footer>
  )
}
