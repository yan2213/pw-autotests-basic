import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';


enum Category {
    HandTools = 'Hand Tools',
    PowerTools = 'Power Tools',
    Other = 'Other'
  }


  test('filter-by-category', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateHome();

    await page.getByLabel('Sander').click();
    await page.waitForTimeout(1000);
    const titles = await page.getByTestId('product-name').allTextContents();
    const allContainSander = titles.every(title => title.includes('Sander'));
    expect(allContainSander).toBe(true);

  });
