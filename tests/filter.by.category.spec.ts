import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { PowerTools } from '../interfaces/interfaces.home.page';

  test('filter-by-category', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateHome();

    await homePage.clickOnCategory(PowerTools.Sander);
    await expect(homePage.productTitles.first()).toContainText(PowerTools.Sander);
    const titles = await homePage.productTitles.allTextContents();
    const allContainSander = titles.every(title => title.includes(PowerTools.Sander));
    expect(allContainSander).toBe(true);

  });
