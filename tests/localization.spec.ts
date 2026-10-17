import { expect, test } from '@playwright/test';
// Run after enabling the documented English/Urdu example in deck.config.ts.
test('opt-in locale URL/history, fallback and RTL', async ({ page }) => {
  test.skip(
    !process.env.TEST_LOCALIZATION,
    'Default deck deliberately has no locale picker.',
  );
  await page.goto('/#intro');
  await page
    .getByRole('combobox', { name: 'Theme', exact: true })
    .selectOption('sand');
  await page
    .getByRole('combobox', { name: 'Language', exact: true })
    .selectOption('ur');
  await expect(page.locator('html')).toHaveAttribute('lang', 'ur');
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  await expect(page.locator('h1')).toContainText('اپنے خیالات');
  expect(new URL(page.url()).hash).toBe('#intro');
  await expect(page.locator('.deck')).toHaveAttribute('data-theme', 'sand');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('lang', 'ur');
  await page.locator('body').click({ position: { x: 3, y: 3 } });
  await page.keyboard.press('ArrowRight');
  await expect(page.locator('.counter')).toContainText('02');
  await expect(page.locator('h1')).toContainText('Make the idea');
  await page
    .getByRole('combobox', { name: 'زبان', exact: true })
    .selectOption('en');
  await page.goBack();
  await expect(page.locator('html')).toHaveAttribute('lang', 'ur');
  await page.goBack();
  await expect(page.locator('.counter')).toContainText('01');
  await page.goForward();
  await expect(page.locator('.counter')).toContainText('02');
  await page.goto('/?lang=unknown#intro');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
});
