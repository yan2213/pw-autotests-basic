import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { SortOptions } from '../interfaces/interfaces.home.page';

function getSortedPrices(priceNumbers: number[], sortValue: SortOptions) : number[]{ 
return sortValue === SortOptions.PriceAsc
  ? [...priceNumbers].sort((a, b) => a - b)
  : [...priceNumbers].sort((a, b) => b - a);
};
[
    { sortValue: SortOptions.PriceAsc},
    { sortValue: SortOptions.PriceDesc},
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