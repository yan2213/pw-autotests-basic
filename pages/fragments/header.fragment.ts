import { Page, Locator } from '@playwright/test';

export class HeaderFragment{
    signInButton: Locator;
    constructor(page: Page) {
        this.signInButton = page.locator('[data-test="nav-sign-in"]');
      }
    }
