import { test, expect } from '@playwright/test';

test('renders welcome message and prompt', async ({ page }) => {
  // 1. Visit the React app
  await page.goto('http://localhost:3000');

  // 2. Verify "Welcome to the Store" is visible
  await expect(page.getByRole('heading', { name: /Welcome to the Store/i })).toBeVisible();

  // 3. Verify the prompt is also visible
  await expect(page.getByText(/What are you looking for\?/i)).toBeVisible();
});
