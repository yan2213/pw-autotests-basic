import { Page, Locator } from '@playwright/test';

export class ProductPage{
    productName: Locator;
    unitPrice: Locator;
    addToCart: Locator;
    addToFavorites: Locator;

    constructor(public page: Page){
        this.productName = page.getByTestId('product-name');
        this.unitPrice = page.getByTestId('unit-price');
        this.addToCart = page.getByTestId('add-to-cart');
        this.addToFavorites = page.getByTestId('add-to-favorites');
    };
}