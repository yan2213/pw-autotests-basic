import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { ProductPage } from '../pages/product.page';
import { CheckoutPage } from '../pages/checkout.page';

test('adding-product-to-cart', async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const checkoutPage = new CheckoutPage(page);
    const itemName = 'Slip Joint Pliers'

    await homePage.navigateHome();

    //Click on the product "Slip Joint Pliers".
    await homePage.chooseProduct(itemName);
    await expect(page).toHaveURL(/product/);
    await expect(productPage.productName).toHaveText(itemName);
    await expect(productPage.unitPrice).toHaveText('9.17');

    //Click "Add to Cart" button.
    await productPage.addToCart.click();
    await productPage.alert.expectMessage(' Product added to shopping cart.');
    await expect(homePage.header.cartQuantity).toHaveText('1');

    //Click on the cart icon in the navigation.
    await homePage.header.navCart.click();
    await expect(page).toHaveURL(/checkout/);
    await expect(checkoutPage.productQuantity).toHaveValue('1');
    await expect(checkoutPage.productTitle).toHaveText(itemName);
    await expect(checkoutPage.proceed1).toBeVisible();
});