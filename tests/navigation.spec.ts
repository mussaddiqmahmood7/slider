import { expect, test } from '@playwright/test';
import {
  boundedIndex,
  indexFromHash,
  validateSlides,
} from '../src/lib/slide-navigation';
test('empty, single and large registries have safe bounds and stable IDs', () => {
  expect(boundedIndex(4, 0)).toBe(0);
  expect(indexFromHash('#unknown', [])).toBe(0);
  expect(boundedIndex(-1, 1)).toBe(0);
  expect(boundedIndex(99, 1)).toBe(0);
  const many = Array.from({ length: 50 }, (_, i) => ({ id: `slide-${i}` }));
  validateSlides(many);
  expect(indexFromHash('#slide-49', many)).toBe(49);
  expect(boundedIndex(100, many.length)).toBe(49);
  expect(() => validateSlides([{ id: 'same' }, { id: 'same' }])).toThrow(
    'duplicate',
  );
  expect(() => validateSlides([{ id: 'Not a slug' }])).toThrow('Invalid');
});
