import { Page } from '@playwright/test';
import { HeaderFragment } from './fragments/header.fragment';

export class HomePage {
    page: Page;
    header: HeaderFragment;
  
    constructor(page: Page) {
      this.page = page;
      this.header = new HeaderFragment(page);
    }
  
    async navigateHome(): Promise<void> {
      await this.page.goto('https://practicesoftwaretesting.com/');
    }
  }