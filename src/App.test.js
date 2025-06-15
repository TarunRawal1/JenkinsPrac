import { test, expect } from '@playwright/test';

test('renders welcome message and prompt', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Wait until React loads
  await expect(page.getByRole('heading', { name: /Welcome to the Store/i })).toBeVisible();

  // OR fallback:
  // await page.waitForTimeout(3000); // only if nothing else works

  await expect(page.getByText(/What are you looking for\?/i)).toBeVisible();
});