import type { IconName } from './icons';

/** Icon for each service card and menu item, by service slug. Unknown slugs fall back to the spanner. */
const services: Record<string, IconName> = {
  'front-loader-repairs': 'washer',
  'top-loader-repairs': 'rotate',
  'washer-dryer-repairs': 'wind',
  'washing-machine-installation': 'tool',
  'washing-machine-servicing': 'clipboard',
  'washing-machine-parts-replacement': 'cog',
};

/** Icon for each problem guide, by problem slug. Unknown slugs fall back to the help icon. */
const problems: Record<string, IconName> = {
  'washing-machine-not-draining': 'drain',
  'washing-machine-not-spinning': 'rotate',
  'washing-machine-leaking': 'droplet',
  'washing-machine-wont-turn-on': 'power',
  'washing-machine-door-wont-open': 'lock',
  'washing-machine-noisy-when-spinning': 'volume',
  'washing-machine-showing-error-code': 'alert',
  'washing-machine-not-filling-with-water': 'water',
};

export const serviceIcon = (slug: string): IconName => services[slug] ?? 'tool';
export const problemIcon = (slug: string): IconName => problems[slug] ?? 'help';
