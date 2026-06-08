import { Page, Locator } from '@playwright/test';

export class HeaderFragment{
    signInButton: Locator;
    constructor(page: Page) {
        this.signInButton = page.getByTestId("nav-sign-in");
      }
    }
