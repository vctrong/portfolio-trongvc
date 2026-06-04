import { Button } from "@/shared/components/ui/Button";
import { DEVELOPER } from "../constants/home.constant";
import { TerminalVisual } from "./TerminalVisual";


/**
 * HeroSection — the first section of the portfolio.
 *
 * Left column  → heading, tagline, CTA buttons
 * Right column → TerminalVisual (desktop only)
 */
export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-204.75 flex items-center max-w-container-max mx-auto px-gutter mb-section-gap"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

        {/* ── Left: copy ───────────────────────────────────── */}
        <div className="space-y-8 z-10">

          {/* Heading */}
          <h1 className="font-display text-display text-on-surface">
            Hi, I&apos;m {DEVELOPER.name}
            <br />
            <span className="text-primary-fixed-dim">
              — {DEVELOPER.role}
            </span>
          </h1>

          {/* Tagline */}
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            {DEVELOPER.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button href="#projects" variant="primary" size="lg">
              View Projects
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Contact Me
            </Button>
          </div>

        </div>

        {/* ── Right: terminal graphic (hidden on mobile) ───── */}
        <TerminalVisual />

      </div>
    </section>
  )
}
