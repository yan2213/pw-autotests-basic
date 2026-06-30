import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

[
    { sortValue: 'name,asc'},
    { sortValue: 'name,desc'},
].forEach(({ sortValue }) => {
  test(`sorting by ${sortValue}`, async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateHome();

    await page.getByTestId('sort').selectOption(sortValue);
    // eslint-disable-next-line playwright/prefer-web-first-assertions
    const names = await page.getByTestId('product-name').allTextContents();
    // eslint-disable-next-line playwright/no-conditional-in-test
    const sorted = sortValue === 'name,asc' 
    ? [...names].sort() 
    : [...names].sort().reverse();
  expect(names).toEqual(sorted);


  });
});