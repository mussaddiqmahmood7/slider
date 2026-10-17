export function validateSlides(slides: readonly { id: string }[]) {
  const ids = new Set<string>();
  for (const { id } of slides) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id) || ids.has(id)) {
      throw new Error(
        `Invalid or duplicate slide ID: "${id}". Use unique lowercase URL slugs.`,
      );
    }
    ids.add(id);
  }
}
export function indexFromHash(hash: string, slides: readonly { id: string }[]) {
  let id = '';
  try {
    id = decodeURIComponent(hash.replace(/^#/, ''));
  } catch {
    /* Invalid URL encoding falls back. */
  }
  return Math.max(
    0,
    slides.findIndex((slide) => slide.id === id),
  );
}
export function boundedIndex(index: number, count: number) {
  return Math.max(0, Math.min(index, Math.max(0, count - 1)));
}
