import { test, expect } from '@playwright/test';
import { AccountPage } from '../pages/account.page';

test.use({ storageState: 'playwright/.auth/user.json' });

test('login', async ({ page }) => {
    const accountPage = new AccountPage(page);
  
    // Expect an URL "to contain" a substring.
    await page.goto('/account');
    await expect(accountPage.page).toHaveURL('/account');
    await expect(accountPage.pageTitle).toHaveText('My account');
    await expect(accountPage.header.navMenu).toHaveText('Bob Smith');
  });