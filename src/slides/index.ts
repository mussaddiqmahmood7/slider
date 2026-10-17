import Market from './event/Market';
import Income from './event/Income';
import Paths from './event/Paths';
import Tradeoffs from './event/Tradeoffs';
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
    title: 'One product, broader ownership',
    component: System,
  },
  {
    id: 'foundations',
    title: 'Learn concepts, look up syntax',
    component: Foundations,
  },
  {
    id: 'abstraction',
    title: 'The web: five overlapping waves',
    component: Abstraction,
  },
  {
    id: 'ai-in-practice',
    title: 'AI adoption and what developers check',
    component: Evidence,
  },
  {
    id: 'review-the-code',
    title: 'Specify the change, prove it works',
    component: Security,
  },
  {
    id: 'market-evidence',
    title: 'Jobs: six annual snapshots and the outlook',
    component: Market,
  },
  {
    id: 'income-and-growth',
    title: 'Local pay and international offers',
    component: Income,
  },
  {
    id: 'choose-a-path',
    title: 'Freshers: proof you can deliver',
    component: Paths,
  },
  {
    id: 'the-work',
    title: 'Four doors into paid work',
    component: Tradeoffs,
  },
  {
    id: 'try-the-work',
    title: 'AI could build this. Why hire you?',
    component: Closing,
  },
];
