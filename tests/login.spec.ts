import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { HomePage } from '../pages/home.page';
import { AccountPage } from '../pages/account.page';

test('login', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const accountPage = new AccountPage(page);
    


    await homePage.navigateHome();
    await homePage.header.signInButton.click();

    await loginPage.performLogin('customer3@practicesoftwaretesting.com', 'pass123');

 
    //await page.getByTestId('email').fill('customer3@practicesoftwaretesting.com');
    //await page.getByTestId('password').fill('pass123');
    //await page.getByTestId('login-submit').click();
  
    // Expect an URL "to contain" a substring.
    await expect(accountPage.page).toHaveURL('/account');
    await expect(accountPage.pageTitle).toHaveText('My account');
    await expect(accountPage.header.navMenu).toHaveText('Bob Smith');
  });