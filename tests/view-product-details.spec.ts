import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';


test('view-product-details', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigateHome();
    await page.getByText('Combination Pliers').click();

    await expect(page).toHaveURL(/product/);
    await expect(page.getByTestId('product-name')).toHaveText('Combination Pliers');
    await expect(page.getByTestId('unit-price')).toHaveText('14.15');
    await expect(page.getByTestId('add-to-cart')).toBeVisible();
    await expect(page.getByTestId('add-to-favorites')).toBeVisible();
  
});