import { Page, Locator, expect } from '@playwright/test';

export class AlertFragment {
  alert: Locator;
   
  constructor(public page: Page) {
    this.alert = page.getByRole('alert');
  }

  async expectMessage(message: string): Promise<void> {
    await expect(this.alert).toHaveText(message);
    await expect(this.alert).toBeHidden({ timeout: 8000 });
  }
};