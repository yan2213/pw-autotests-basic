import { Page, Locator } from '@playwright/test';


export class CheckoutPage{
    productQuantity: Locator;
    productTitle: Locator;
    proceed1: Locator;

     constructor(public page: Page){
        this.productQuantity = page.getByTestId('product-quantity');
        this.productTitle = page.getByTestId('product-title');
        this.proceed1 = page.getByTestId('proceed-1');
    };
}