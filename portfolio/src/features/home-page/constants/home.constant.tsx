/* ============================================================
 * App-wide constants
 * Change these values to personalise the site — nothing else
 * needs to be touched for basic content updates.
 * ============================================================ */

export const DEVELOPER = {
  name:     'VO CHI TRONG',
  role:     'Fullstack Developer',
  tagline:
    'I build modern, high-performance web applications with a focus on clean architecture, scalable backends, and pixel-perfect frontends.',
  email:    'vctrong665@gmail.com',
  github:   'https://github.com/vctrong',
  linkedin: '#',
  cvUrl:    '#',
} as const

export const NAV_LINKS = [
  { href: '#home',     label: 'Home',     active: true  },
  { href: '#about',    label: 'About',    active: false },
  { href: '#skills',   label: 'Skills',   active: false },
  { href: '#projects', label: 'Projects', active: false },
  { href: '#journey',  label: 'Journey',  active: false },
  { href: '#contact',  label: 'Contact',  active: false },
] as const

export const SOCIAL_LINKS = [
  { href: DEVELOPER.github,                  icon: 'code',  label: 'GitHub'   },
  { href: DEVELOPER.linkedin,                icon: 'work',  label: 'LinkedIn' },
  { href: `mailto:${DEVELOPER.email}`,        icon: 'mail',  label: 'Email'    },
] as const

/* Tech badges shown on the Hero terminal card */
export const HERO_TECH_BADGES = [
  {
    label:             'Next.js',
    icon:              'code',
    iconColorClass:    'text-primary-fixed-dim',
    positionClass:     'absolute -top-6 -left-6',
    animationDuration: '3s',
    animationDelay:    '0s',
  },
  {
    label:             'Node.js',
    icon:              'dns',
    iconColorClass:    'text-tertiary-fixed-dim',
    positionClass:     'absolute top-1/4 -right-8',
    animationDuration: '4s',
    animationDelay:    '0.5s',
  },
  {
    label:             'MongoDB',
    icon:              'database',
    iconColorClass:    'text-secondary-fixed',
    positionClass:     'absolute -bottom-4 right-10',
    animationDuration: '3.5s',
    animationDelay:    '1s',
  },
  {
    label: 'REST API',
    icon: 'api',
    iconColorClass: 'text-primary-fixed-dim',
    positionClass: 'absolute bottom-6 left-1/3',
    animationDuration: '4.8s',
    animationDelay: '1.2s',
  },
  {
    label: 'GitHub',
    icon: 'terminal',
    iconColorClass: 'text-on-surface-variant',
    positionClass: 'absolute -top-4 right-14',
    animationDuration: '3.4s',
    animationDelay: '1.4s',
  },
  {
    label: 'Docker',
    icon: 'deployed_code',
    iconColorClass: 'text-secondary',
    positionClass: 'absolute top-1/2 right-1/4',
    animationDuration: '5s',
    animationDelay: '1.6s',
  },
  {
    label: 'Figma',
    icon: 'design_services',
    iconColorClass: 'text-tertiary',
    positionClass: 'absolute bottom-1/4 left-12',
    animationDuration: '4.6s',
    animationDelay: '1.8s',
  },
  {
    label: 'Vercel',
    icon: 'rocket_launch',
    iconColorClass: 'text-primary',
    positionClass: 'absolute top-2/3 right-4',
    animationDuration: '3.9s',
    animationDelay: '2s',
  },
  {
    label: 'TypeScript',
    icon: 'data_object',
    iconColorClass: 'text-secondary-fixed',
    positionClass: 'absolute top-1/3 -left-10',
    animationDuration: '4.2s',
    animationDelay: '0.4s',
  },
  {
    label: 'Tailwind CSS',
    icon: 'palette',
    iconColorClass: 'text-tertiary-fixed-dim',
    positionClass: 'absolute top-1/4 -right-8',
    animationDuration: '4s',
    animationDelay: '0.5s',
  },
  {
    label: 'Express.js',
    icon: 'hub',
    iconColorClass: 'text-primary-fixed',
    positionClass: 'absolute bottom-16 -left-8',
    animationDuration: '3.6s',
    animationDelay: '0.9s',
  },
] as const

/* Terminal code lines rendered inside the hero card */
export const TERMINAL_CODE_LINES = [
  { type: 'root',    content: 'const developer = {'                        },
  { type: 'string',  key: 'name',    value: "'VO CHI TRONG'"               },
  { type: 'string',  key: 'role',    value: "'Fullstack Engineer'"           },
  { type: 'array',   key: 'skills',  value: "['React', 'Node', 'TypeScript']"},
  { type: 'string',  key: 'passion', value: "'Building scalable systems'"   },
  { type: 'fn',      key: 'execute', value: 'this.buildAwesomeStuff()'      },
  { type: 'close',   content: '};'                                          },
] as const