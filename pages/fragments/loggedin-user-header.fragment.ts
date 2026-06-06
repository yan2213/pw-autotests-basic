import { Page, Locator } from '@playwright/test';

export class AuthenticatedHeaderFragment {
    navMenu: Locator;

    constructor(page: Page) {
        this.navMenu = page.locator('[data-test="nav-menu"]');
    }
}