import Opening from './event/Opening';
import System from './event/System';
import Evidence from './event/Evidence';
import Foundations from './event/Foundations';
import Abstraction from './event/Abstraction';
import Security from './event/Security';
import type { SlideDefinition } from './types';
export const slides: readonly SlideDefinition[] = [
  { id: 'intro', title: 'The web is still being built', component: Opening },
  {
    id: 'one-product',
    title: 'One product, different responsibilities',
    component: System,
  },
  {
    id: 'foundations',
    title: 'Learn the foundations, then choose a stack',
    component: Foundations,
  },
  {
    id: 'abstraction',
    title: 'Abstraction changes the work',
    component: Abstraction,
  },
  {
    id: 'ai-in-practice',
    title: 'Use is widespread; trust is conditional',
    component: Evidence,
  },
  {
    id: 'review-the-code',
    title: 'Code that runs still needs review',
    component: Security,
  },
];
