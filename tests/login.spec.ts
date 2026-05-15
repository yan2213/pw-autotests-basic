import { test, expect } from '@playwright/test';

test.skip('login', async ({ page }) => {
    await page.goto('/auth/login');
    await page.getByTestId('email').fill('customer3@practicesoftwaretesting.com');
    await page.getByTestId('password').fill('pass123');
    await page.getByTestId('login-submit').click();
  
    // Expect an URL "to contain" a substring.
    await expect(page).toHaveURL('/account');
    await expect(page.locator('[data-test="page-title"]')).toHaveText('My account');
    await expect(page.locator('[data-test="nav-menu"]')).toHaveText('Bob Smith');
  });