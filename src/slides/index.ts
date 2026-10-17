import Opening from './event/Opening';
import System from './event/System';
import Evidence from './event/Evidence';
import type { SlideDefinition } from './types';
// Establish the three representative compositions before filling the final registry.
export const slides: readonly SlideDefinition[] = [
  { id: 'intro', title: 'The web is still being built', component: Opening },
  {
    id: 'one-product',
    title: 'One product, different responsibilities',
    component: System,
  },
  {
    id: 'ai-in-practice',
    title: 'Use is widespread; trust is conditional',
    component: Evidence,
  },
];
