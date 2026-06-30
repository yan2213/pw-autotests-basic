import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { ProductPage } from '../pages/product.page';

test('adding-product-to-cart', async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);

    await homePage.navigateHome();

    //Click on the product "Slip Joint Pliers".
    await page.getByText('Slip Joint Pliers').click();
    await expect(page).toHaveURL(/product/);
    await expect(productPage.productName).toHaveText('Slip Joint Pliers');
    await expect(productPage.unitPrice).toHaveText('9.17');

    //Click "Add to Cart" button.
    await productPage.addToCart.click();
    await expect(page.getByRole('alert')).toHaveText(' Product added to shopping cart.');
    await expect(page.getByRole('alert')).toBeHidden({ timeout: 8000 });
    await expect(page.getByTestId('cart-quantity')).toHaveText('1');

    //Click on the cart icon in the navigation.
    await page.getByTestId('nav-cart').click();
    await expect(page).toHaveURL(/checkout/);
    await expect(page.getByTestId('product-quantity')).toHaveValue('1');
    await expect(page.getByTestId('product-title')).toHaveText('Slip Joint Pliers');
    await expect(page.getByTestId('proceed-1')).toBeVisible();


});