import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { PowerTools } from '../interfaces/interfaces.home.page';

  test('filter-by-category', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateHome();

    await page.getByLabel(PowerTools.Sander).click();
    await expect(page.getByTestId('product-name').first()).toContainText(PowerTools.Sander);
    const titles = await page.getByTestId('product-name').allTextContents();
    const allContainSander = titles.every(title => title.includes(PowerTools.Sander));
    expect(allContainSander).toBe(true);

  });
