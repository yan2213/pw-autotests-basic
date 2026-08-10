import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';


function getSortedNames(names: string[], sortValue: string) : string[]{ 
return sortValue === 'name,asc'
 ? [...names].sort() 
: [...names].sort().reverse();
};
[
    { sortValue: 'name,asc'},
    { sortValue: 'name,desc'},
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