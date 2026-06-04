import { DEVELOPER, NAV_LINKS } from '@/features/home-page/constants/home.constant'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/10 backdrop-blur-xl border-b border-white/10 shadow-sm">
      <div className="flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto">

        {/* Wordmark */}
        <Link
          href="#home"
          className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface"
        >
          {DEVELOPER.name}
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                link.active
                  ? [
                      'font-body-md text-body-md text-primary-fixed-dim',
                      'border-b-2 border-primary-fixed-dim pb-1',
                      'transition-transform active:scale-95',
                    ].join(' ')
                  : [
                      'font-body-md text-body-md text-on-surface-variant',
                      'hover:text-on-surface hover:bg-white/5',
                      'rounded px-2 py-1 transition-all duration-300 active:scale-95',
                    ].join(' ')
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={DEVELOPER.cvUrl}
          className={[
            'bg-primary-container text-on-primary-container',
            'font-body-md text-body-md font-bold',
            'px-6 py-2 rounded-full',
            'hover:bg-primary-fixed transition-colors active:scale-95',
          ].join(' ')}
        >
          Download CV
        </Link>

      </div>
    </nav>
  )
}
