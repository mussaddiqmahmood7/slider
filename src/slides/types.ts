import type { ComponentType } from 'react';
export type SlideDefinition = {
  id: string;
  title: string;
  component: ComponentType;
  preview?: string;
};
