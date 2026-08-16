import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

function getSortedPrices(priceNumbers: number[], sortValue: string) : number[]{ 
return sortValue === 'price,asc'
  ? [...priceNumbers].sort((a, b) => a - b)
  : [...priceNumbers].sort((a, b) => b - a);
};
[
    { sortValue: 'price,desc'},
    { sortValue: 'price,asc'},
].forEach(({ sortValue }) => {
  test(`sorting by ${sortValue}`, async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateHome();

    await homePage.sortProducts(sortValue);
    const priceNumbers = await homePage.getProductPrices();
    const sorted = getSortedPrices(priceNumbers, sortValue);
  expect(priceNumbers).toEqual(sorted);
  });
});