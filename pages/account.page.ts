import { Page, Locator } from '@playwright/test';
import { AuthenticatedHeaderFragment } from './fragments/loggedin-user-header.fragment';

export class AccountPage{
    page: Page;
    pageTitle: Locator;
    header: AuthenticatedHeaderFragment;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = this.page.getByTestId("page-title");
    this.header = new AuthenticatedHeaderFragment(page);
  }
}


