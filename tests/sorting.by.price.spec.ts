import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

[
    { sortValue: 'price,desc'},
    { sortValue: 'price,asc'},
].forEach(({ sortValue }) => {
  test(`sorting by ${sortValue}`, async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateHome();

    const prices = await page.getByTestId('product-price').allTextContents();
    const priceNumbers = prices.map(p => parseFloat(p.replace('$', '')));

    const sorted = sortValue === 'price,asc'
  ? [...priceNumbers].sort((a, b) => a - b)
  : [...priceNumbers].sort((a, b) => b - a);
  expect(priceNumbers).toEqual(sorted);
  });
});