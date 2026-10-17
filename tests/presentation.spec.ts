import { expect, test, type Page } from '@playwright/test';

async function open(page: Page, path: string) {
  await page.goto(path);
  await expect(page.locator('.deck')).toHaveAttribute('aria-busy', 'false');
}

test('navigation, boundaries, direct links and browser history', async ({
  page,
}) => {
  await open(page, '/');
  const count = page.locator('.counter');
  await expect(count).toContainText('01');
  await expect(
    page.getByRole('button', { name: 'Previous', exact: true }),
  ).toBeDisabled();
  await expect(page.getByRole('combobox', { name: 'Language' })).toHaveCount(0);
  await page.keyboard.press('ArrowRight');
  const secondUrl = page.url();
  await expect(count).toContainText('02');
  await page.reload();
  await expect(count).toContainText('02');
  await page.locator('body').click({ position: { x: 3, y: 3 } });
  await page.keyboard.press('PageDown');
  await page.goBack();
  await expect(page).toHaveURL(secondUrl);
  await page.goForward();
  await expect(count).toContainText('03');
  await page.locator('body').click({ position: { x: 3, y: 3 } });
  await page.keyboard.press('End');
  await expect(
    page.getByRole('button', { name: 'Next', exact: true }),
  ).toBeDisabled();
  await page.keyboard.press('Home');
  await expect(count).toContainText('01');
  await page.keyboard.press('Space');
  await expect(count).toContainText('02');
  await page.keyboard.press('Shift+Space');
  await expect(count).toContainText('01');
  await open(page, '/#%E0%A4%A');
  await expect(count).toContainText('01');
  await open(page, '/#does-not-exist');
  await expect(count).toContainText('01');
});

test('interactive controls keep keyboard behavior; themes preserve state and persist', async ({
  page,
}) => {
  await open(page, '/');
  await page.keyboard.press('ArrowRight');
  const action = page.locator('.slide button[aria-pressed]').first();
  await action.focus();
  await page.keyboard.press('Space');
  await expect(action).toHaveAttribute('aria-pressed', 'true');
  const url = page.url();
  await page.keyboard.press('ArrowRight');
  await expect(page).toHaveURL(url);
  for (const theme of ['midnight', 'blueprint', 'sand', 'paper']) {
    await page
      .getByRole('combobox', { name: 'Theme', exact: true })
      .selectOption(theme);
    await expect(page.locator('.deck')).toHaveAttribute('data-theme', theme);
    await expect(action).toHaveAttribute('aria-pressed', 'true');
    await expect(page).toHaveURL(url);
  }
  await page
    .getByRole('combobox', { name: 'Theme', exact: true })
    .selectOption('midnight');
  await page.reload();
  await expect(page.locator('.deck')).toHaveAttribute('data-theme', 'midnight');
});

test('overview contains focus, marks active, restores focus and selects slides', async ({
  page,
}) => {
  await open(page, '/');
  await page.keyboard.press('g');
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  await expect(dialog.locator('[aria-current="step"]')).toBeFocused();
  const total = await dialog.locator('.overview-card').count();
  for (let i = 0; i < total + 4; i++) {
    await page.keyboard.press('Tab');
    expect(
      await dialog.evaluate((node) => node.contains(document.activeElement)),
    ).toBe(true);
  }
  await page.keyboard.press('Escape');
  await expect(dialog).not.toBeVisible();
  await expect(page.getByRole('button', { name: 'Overview' })).toBeFocused();
  await page.getByRole('button', { name: 'Overview' }).click();
  await dialog.locator('.overview-card').nth(1).click();
  await expect(dialog).not.toBeVisible();
  await expect(page.locator('.counter')).toContainText('02');
  expect(new URL(page.url()).hash).not.toBe('');
});

test('fast keys, reduced motion, fullscreen and no third-party requests', async ({
  page,
}) => {
  const errors: string[] = [];
  const external: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('request', (request) => {
    if (!request.url().startsWith('http://localhost:3000'))
      external.push(request.url());
  });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await open(page, '/');
  for (let i = 0; i < 20; i++) await page.keyboard.press('ArrowRight');
  await expect(
    page.getByRole('button', { name: 'Next', exact: true }),
  ).toBeDisabled();
  await expect(page.locator('.slide')).toHaveCount(1);
  expect(
    await page
      .locator('.slide')
      .evaluate((node) => getComputedStyle(node).animationName),
  ).toBe('none');
  await page.getByRole('button', { name: 'Fullscreen', exact: true }).click();
  await expect
    .poll(() =>
      page.evaluate(
        () =>
          !!document.fullscreenElement ||
          !!document.querySelector('[role="status"]'),
      ),
    )
    .toBe(true);
  await page.evaluate(async () => {
    if (document.fullscreenElement) await document.exitFullscreen();
  });
  expect(errors).toEqual([]);
  expect(external).toEqual([]);
});

test('custom widgets, editable fields and modifier keys retain ownership of input', async ({
  page,
}) => {
  await open(page, '/');
  await page.evaluate(() => {
    const widget = document.createElement('div');
    widget.role = 'checkbox';
    widget.tabIndex = 0;
    widget.setAttribute('aria-checked', 'false');
    widget.id = 'author-widget';
    widget.textContent = 'Author-controlled widget';
    document.querySelector('.slide')?.append(widget);
  });
  await page.locator('#author-widget').focus();
  await page.keyboard.press('ArrowRight');
  await expect(page.locator('.counter')).toContainText('01');
  await page.evaluate(() => {
    const input = document.createElement('input');
    input.id = 'author-input';
    document.querySelector('.slide')?.append(input);
  });
  await page.locator('#author-input').fill('slide author text');
  await page.keyboard.press('End');
  await expect(page.locator('.counter')).toContainText('01');
  await page.locator('body').click({ position: { x: 3, y: 3 } });
  await page.keyboard.press('Control+ArrowRight');
  await expect(page.locator('.counter')).toContainText('01');
});
