import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/auth/login');
    await page.locator('[data-test="email"]').fill('customer3@practicesoftwaretesting.com');
    await page.locator('[data-test="password"]').fill('pass123');
    await page.locator('[data-test="login-submit"]').click();
  
    // Expect an URL "to contain" a substring.
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');
    await expect(page.locator('[data-test="page-title"]')).toHaveText('My account');
    await expect(page.locator('[data-test="nav-menu"]')).toHaveText('Bob Smith');
  });