import { Page, Locator } from '@playwright/test';

export class HeaderFragment{
    signInButton: Locator;
    cartQuantity: Locator;
    navCart: Locator;
    constructor(public page: Page) {
        this.signInButton = page.getByTestId("nav-sign-in");
        this.cartQuantity = page.getByTestId('cart-quantity');
        this.navCart = page.getByTestId('nav-cart');
      }
    }
