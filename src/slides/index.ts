import IntroSlide from './IntroSlide';
import ExampleSlide from './ExampleSlide';
import ClosingSlide from './ClosingSlide';
import type { SlideDefinition } from './types';
export const slides: readonly SlideDefinition[] = [
  { id: 'intro', title: 'Give your ideas room to land', component: IntroSlide },
  {
    id: 'make-it-visible',
    title: 'Make the idea visible',
    component: ExampleSlide,
  },
  {
    id: 'make-it-yours',
    title: 'Your next story starts here',
    component: ClosingSlide,
  },
];
