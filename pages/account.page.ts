import { Page, Locator } from '@playwright/test';
import { AuthenticatedHeaderFragment } from './fragments/loggedin-user-header.fragment';

export class AccountPage{
    pageTitle: Locator;
    header: AuthenticatedHeaderFragment;

  constructor(public page: Page) {
    this.pageTitle = this.page.getByTestId("page-title");
    this.header = new AuthenticatedHeaderFragment(page);
  }
}


