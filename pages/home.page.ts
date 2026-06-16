import { Page } from '@playwright/test';
import { HeaderFragment } from './fragments/header.fragment';

export class HomePage {
    header: HeaderFragment;
  
    constructor(public page: Page) {
      this.header = new HeaderFragment(page);
    }
  
    async navigateHome(): Promise<void> {
      await this.page.goto('/');
    }
  }