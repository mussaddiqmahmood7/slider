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
  {
    id: 'intro',
    title: 'If AI can build websites, why learn web development?',
    component: Opening,
  },
  {
    id: 'one-product',
    title: 'A website is more than what you see',
    component: System,
  },
  {
    id: 'foundations',
    title: 'Learn the concepts. Syntax will change.',
    component: Foundations,
  },
  {
    id: 'abstraction',
    title: 'Tools raise the abstraction; judgment stays with you',
    component: Abstraction,
  },
  {
    id: 'ai-in-practice',
    title: 'Most surveyed developers use AI; trust has conditions',
    component: Evidence,
  },
  {
    id: 'review-the-code',
    title: 'AI can write code. Who decides what’s correct?',
    component: Security,
  },
  {
    id: 'market-evidence',
    title: 'Hiring recovered unevenly; make your ability visible',
    component: Market,
  },
  {
    id: 'income-and-growth',
    title: 'What can web developers actually earn?',
    component: Income,
  },
  {
    id: 'choose-a-path',
    title: 'No experience? Build proof.',
    component: Paths,
  },
  {
    id: 'the-work',
    title: 'Four ways to build your career',
    component: Tradeoffs,
  },
  {
    id: 'try-the-work',
    title: 'If AI can code, why should anyone hire you?',
    component: Closing,
  },
];
