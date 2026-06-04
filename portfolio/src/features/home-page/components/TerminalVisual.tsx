
import { MaterialIcon } from "@/shared/components/ui/MaterialIcon";
import { HERO_TECH_BADGES } from "../constants/home.constant";


/**
 * TerminalVisual — right-side hero graphic:
 *   - Floating tech badges with staggered bounce animation
 *   - Mock code-syntax terminal card with gradient glow
 */
export function TerminalVisual() {
  return (
    <div className="relative hidden lg:block z-10">

      {/* ── Floating tech badges ─────────────────────────────── */}
      {HERO_TECH_BADGES.map((badge) => (
        <div
          key={badge.label}
          className={[
            badge.positionClass,
            'bg-surface-container-high border border-white/10 rounded-full',
            'px-4 py-2 flex items-center gap-2 shadow-lg animate-bounce',
          ].join(' ')}
          style={{
            animationDuration: badge.animationDuration,
            animationDelay:    badge.animationDelay,
          }}
        >
          <MaterialIcon
            name={badge.icon}
            fill={1}
            className={`${badge.iconColorClass} text-sm`}
          />
          <span className="font-label-mono text-label-mono text-on-surface">
            {badge.label}
          </span>
        </div>
      ))}

      {/* ── Terminal card ─────────────────────────────────────── */}
      <div className="bg-surface-container-lowest/80 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden glow-border h-100 flex flex-col shadow-2xl relative">

        {/* Subtle inner gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-primary-fixed-dim/5 to-transparent z-0" />

        {/* Titlebar */}
        <div className="bg-surface-container border-b border-white/10 px-4 py-3 flex items-center gap-2 z-10">
          <div className="w-3 h-3 rounded-full bg-error" />
          <div className="w-3 h-3 rounded-full bg-primary-fixed-dim" />
          <div className="w-3 h-3 rounded-full bg-tertiary-fixed-dim" />
          <span className="font-label-mono text-label-mono text-on-surface-variant ml-4 text-xs">
            TrongVC@system:~
          </span>
        </div>

        {/* Code content */}
        <div className="p-6 font-label-mono text-label-mono text-on-surface-variant leading-relaxed z-10">
          {/* const developer = { */}
          <p>
            <span className="text-secondary-fixed">const</span>
            {' developer = {'}
          </p>

          {/* name */}
          <p className="pl-4">
            {'name: '}
            <span className="text-primary-fixed-dim">&apos;VO CHI TRONG&apos;</span>
            {','}
          </p>

          {/* role */}
          <p className="pl-4">
            {'role: '}
            <span className="text-primary-fixed-dim">&apos;Fullstack Engineer&apos;</span>
            {','}
          </p>

          {/* skills */}
          <p className="pl-4">
            {'skills: ['}
            <span className="text-primary-fixed-dim">&apos;React&apos;</span>
            {', '}
            <span className="text-primary-fixed-dim">&apos;Node&apos;</span>
            {', '}
            <span className="text-primary-fixed-dim">&apos;TypeScript&apos;</span>
            {'],'}
          </p>

          {/* passion */}
          <p className="pl-4">
            {'passion: '}
            <span className="text-primary-fixed-dim">&apos;Building scalable systems&apos;</span>
            {','}
          </p>

          {/* execute function */}
          <p className="pl-4">
            {'execute: '}
            <span className="text-secondary-fixed">function</span>
            {'() {'}
          </p>
          <p className="pl-8 text-on-surface">
            {'return this.buildAwesomeStuff();'}
          </p>
          <p className="pl-4">{'}'}</p>

          {/* closing brace */}
          <p>{'};'}</p>

          {/* blinking cursor */}
          <p className="mt-4 animate-pulse">{'> \u2588'}</p>
        </div>

      </div>
    </div>
  )
}
