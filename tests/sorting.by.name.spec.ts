import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import{ SortOptions } from '../interfaces/interfaces.home.page';


function getSortedNames(names: string[], sortValue: SortOptions) : string[]{ 
return sortValue === SortOptions.NameAsc
 ? [...names].sort() 
: [...names].sort().reverse();
};
[
    { sortValue: SortOptions.NameAsc},
    { sortValue: SortOptions.NameDesc},
].forEach(({ sortValue }) => {
  test(`sorting by ${sortValue}`, async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateHome();


    await homePage.sortProducts(sortValue);
    // eslint-disable-next-line playwright/prefer-web-first-assertions
    const names = await homePage.productTitles.allTextContents();
    const sorted = getSortedNames(names, sortValue);
    expect(names).toEqual(sorted);
    });
});