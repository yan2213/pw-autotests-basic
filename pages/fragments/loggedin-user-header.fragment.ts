import { Page, Locator } from '@playwright/test';

export class AuthenticatedHeaderFragment {
    navMenu: Locator;

    constructor(public page: Page) {
        this.navMenu = page.getByTestId("nav-menu");
    }
}