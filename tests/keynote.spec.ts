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
  test.setTimeout(120_000);
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
    { width: 320, height: 568 },
    { width: 768, height: 1024 },
    { width: 820, height: 1180 },
    { width: 834, height: 1194 },
    { width: 1024, height: 1366 },
    { width: 1180, height: 820 },
    { width: 844, height: 390 },
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
      expect(count).toBe(11);
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

test('closing reveal is keyboard accessible and survives theme changes', async ({
  page,
}) => {
  await page.goto('/#try-the-work');
  await expect(page.locator('.deck')).toHaveAttribute('aria-busy', 'false');
  const reveal = page.getByRole('button', { name: 'Show what you bring' });
  await reveal.focus();
  await page.keyboard.press('Space');
  await expect(page.locator('#interview-answer')).toContainText(
    'prove it works',
  );
  await expect(page).toHaveURL(/#try-the-work$/);
  await page
    .getByRole('combobox', { name: 'Theme', exact: true })
    .selectOption('midnight');
  await expect(
    page.getByRole('button', { name: 'Ask the question again' }),
  ).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('.closing-resource')).toHaveAttribute(
    'href',
    /presentation\/comsats-sahiwal\/docs\/student-resources.md$/,
  );
});

test('sources use a constant footer and contain keyboard focus without moving the slide', async ({
  page,
}) => {
  await page.goto('/#ai-in-practice');
  await expect(page.locator('.deck')).toHaveAttribute('aria-busy', 'false');
  const trigger = page.getByRole('button', { name: 'Sources', exact: true });
  const identity = await page.locator('.footer-identity').innerText();
  await trigger.click();
  const dialog = page.getByRole('dialog', { name: 'Sources & context' });
  await expect(dialog).toBeVisible();
  const close = dialog.getByRole('button', { name: 'Close sources' });
  await expect(close).toBeFocused();
  await page.keyboard.press('ArrowRight');
  await page.keyboard.press('g');
  await expect(page).toHaveURL(/#ai-in-practice$/);
  await expect(page.getByRole('dialog', { name: 'Slides' })).toHaveCount(0);
  await close.focus();
  await page.keyboard.press('Shift+Tab');
  await expect(dialog.getByRole('link').last()).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(close).toBeFocused();
  await expect(
    dialog.getByRole('link', { name: /trust question/ }),
  ).toHaveAttribute('href', /ai-trust$/);
  await page.keyboard.press('Escape');
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await expect(page.locator('.footer-identity')).toHaveText(identity);
  await expect(
    page.getByRole('button', { name: 'Sources', exact: true }),
  ).toBeVisible();
});

test('tablet and phone reading layouts keep body text readable and every source panel inside the viewport', async ({
  page,
}) => {
  test.setTimeout(120_000);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  for (const viewport of [
    { width: 320, height: 568 },
    { width: 390, height: 844 },
    { width: 768, height: 1024 },
    { width: 820, height: 1180 },
    { width: 834, height: 1194 },
    { width: 1024, height: 768 },
    { width: 1024, height: 1366 },
  ]) {
    await page.setViewportSize(viewport);
    await page.goto('/');
    await expect(page.locator('.deck')).toHaveAttribute('aria-busy', 'false');
    const identity = await page.locator('.footer-identity').innerText();
    for (let i = 0; i < 11; i++) {
      const report = await page.locator('.slide-content').evaluate((el) => {
        const problems: string[] = [];
        for (const node of el.querySelectorAll<HTMLElement>(
          'p,li,dd,dt,small,.route-action,.source-kind,.stat-kicker,.footer-identity',
        )) {
          if (node.closest('dialog') || !node.getClientRects().length) continue;
          const size = parseFloat(getComputedStyle(node).fontSize);
          const detail =
            node.matches(
              'small,dt,.stat-kicker,.footer-identity,.speaker-badge,.diagram-caption,.employment-chart > p',
            ) ||
            node.closest('.employment-column') ||
            node.classList.contains('code-lesson') ||
            node.classList.contains('revision-takeaway') ||
            node.classList.contains('paths-reality-note') ||
            node.closest('.challenge-strip') ||
            (node.closest('.portfolio-receipt') && node.matches('p'));
          if (size < (detail ? 11 : 16))
            problems.push(
              node.tagName +
                ': ' +
                size +
                'px ' +
                node.textContent?.slice(0, 35),
            );
        }
        return {
          problems,
          horizontal: document.documentElement.scrollWidth > innerWidth + 1,
        };
      });
      expect(report, JSON.stringify({ viewport, slide: i + 1 })).toEqual({
        problems: [],
        horizontal: false,
      });
      await expect(page.locator('.footer-identity')).toHaveText(identity);
      await page.getByRole('button', { name: 'Sources', exact: true }).click();
      const dialog = page.getByRole('dialog', { name: 'Sources & context' });
      const box = await dialog.boundingBox();
      expect(box!.x).toBeGreaterThanOrEqual(0);
      expect(box!.x + box!.width).toBeLessThanOrEqual(viewport.width + 1);
      expect(box!.y + box!.height).toBeLessThanOrEqual(viewport.height + 1);
      expect(
        await dialog.evaluate((el) => el.scrollWidth <= el.clientWidth + 1),
      ).toBe(true);
      await page.keyboard.press('Escape');
      if (i < 10)
        await page.getByRole('button', { name: 'Next', exact: true }).click();
    }
  }
});
