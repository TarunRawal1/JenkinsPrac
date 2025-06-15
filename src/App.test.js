import { test, expect } from '@playwright/test';

test('renders welcome message and prompt', async ({ page }) => {
  // Replace with your actual running app URL
  await page.goto('http://localhost:3000');

  // Check for the welcome message
  await expect(page.getByText(/Welcome to the Store/i)).toBeVisible();

  // Check for the prompt
  await expect(page.getByText(/What are you looking for\?/i)).toBeVisible();
});
