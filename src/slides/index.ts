import Market from './event/Market';
import Income from './event/Income';
import Paths from './event/Paths';
import Tradeoffs from './event/Tradeoffs';
import Learning from './event/Learning';
import Closing from './event/Closing';
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
  {
    id: 'market-evidence',
    title: 'A trend needs comparable endpoints',
    component: Market,
  },
  {
    id: 'income-and-growth',
    title: 'Compare the role, then the number',
    component: Income,
  },
  {
    id: 'choose-a-path',
    title: 'Choose a path and its tradeoffs',
    component: Paths,
  },
  {
    id: 'the-work',
    title: 'The upside is real; so is the work',
    component: Tradeoffs,
  },
  {
    id: 'learn-with-ai',
    title: 'Use AI and make sure you learn',
    component: Learning,
  },
  {
    id: 'try-the-work',
    title: 'Try the work — project, source and Q&A',
    component: Closing,
  },
];
