import { expect, test } from '@playwright/test';

test('ownership review remains illustrative and preserves its state through themes', async ({
  page,
}) => {
  await page.goto('/#review-the-code');
  await expect(page.locator('.deck')).toHaveAttribute('aria-busy', 'false');
  const review = page.getByRole('button', {
    name: 'Review the ownership boundary',
  });
  await review.click();
  await expect(page.locator('.guard-present')).toContainText(
    'record.ownerId != user.id',
  );
  for (const theme of ['midnight', 'blueprint', 'sand', 'paper']) {
    await page
      .getByRole('combobox', { name: 'Theme', exact: true })
      .selectOption(theme);
    await expect(page.locator('.guard-present')).toBeVisible();
    await expect(page).toHaveURL(/#review-the-code$/);
  }
  await page.getByRole('button', { name: 'Show the missing check' }).focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('.guard-missing')).toBeVisible();
  await expect(page.locator('.code-heading')).toContainText('ILLUSTRATIVE');
});

test('projector layouts keep every slide and its source footer visible without external services', async ({
  page,
  context,
}) => {
  test.setTimeout(60_000);
  const outside: string[] = [];
  await context.route('**/*', (route) => {
    if (new URL(route.request().url()).hostname !== 'localhost') {
      outside.push(route.request().url());
      return route.abort();
    }
    return route.continue();
  });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  for (const viewport of [
    { width: 1920, height: 1080 },
    { width: 1366, height: 768 },
    { width: 1024, height: 768 },
    { width: 1280, height: 600 },
    { width: 390, height: 844 },
  ]) {
    await page.setViewportSize(viewport);
    await page.goto('/');
    await expect(page.locator('.deck')).toHaveAttribute('aria-busy', 'false');
    for (const theme of ['paper', 'midnight', 'blueprint', 'sand']) {
      await page
        .getByRole('combobox', { name: 'Theme', exact: true })
        .selectOption(theme);
      await page.locator('body').click({ position: { x: 3, y: 3 } });
      await page.keyboard.press('Home');
      await page.keyboard.press('g');
      const count = await page.locator('.overview-card').count();
      expect(count).toBeLessThanOrEqual(12);
      await page.keyboard.press('Escape');
      await page.locator('body').click({ position: { x: 3, y: 3 } });
      for (let i = 0; i < count; i++) {
        const frame = await page.locator('.stage').boundingBox();
        const footer = await page.locator('.slide-footer').boundingBox();
        expect(footer, `footer on ${theme} slide ${i + 1}`).toBeTruthy();
        expect(footer!.y + footer!.height).toBeLessThanOrEqual(
          frame!.y + frame!.height + 1,
        );
        expect(
          await page
            .locator('.slide')
            .evaluate(
              (el) =>
                el.scrollHeight <= el.clientHeight + 2 &&
                el.scrollWidth <= el.clientWidth + 2,
            ),
        ).toBe(true);
        await page.keyboard.press('ArrowRight');
      }
    }
  }
  expect(outside).toEqual([]);
});
