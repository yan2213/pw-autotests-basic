import { Locator, Page } from '@playwright/test';
import { HeaderFragment } from './fragments/header.fragment';

export class LoginPage{
    page: Page;
    emailField: Locator;
    passwordField: Locator;
    header: HeaderFragment;

    constructor(page: Page){
        this.page = page;
        this.emailField = this.page.getByTestId('email');
        this.passwordField = this.page.getByTestId('password');
        this.header = new HeaderFragment(page);
    }

    async performLogin(email: string, password: string): Promise<void> {
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.page.getByTestId('login-submit').click();
     }
}