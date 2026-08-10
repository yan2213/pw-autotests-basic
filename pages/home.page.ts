import { Page, Locator } from '@playwright/test';
import { HeaderFragment } from './fragments/header.fragment';

export class HomePage {
    header: HeaderFragment;
    productTitles: Locator;
    productPrices: Locator;
  
    constructor(public page: Page) {
      this.header = new HeaderFragment(page);
      this.productTitles = page.getByTestId('product-name');
      this.productPrices = page.getByTestId('product-price');
      
    }
  
    async navigateHome(): Promise<void> {
      await this.page.goto('/');
    }

     async chooseProduct(itemName: string): Promise<void> {
     await this.page.getByText(itemName).click();
     };

     async clickOnCategory(category: string): Promise<void>{
      await this.page.getByLabel(category).click();
     };

     async sortProducts(sortValue: string): Promise<void>{
      await this.page.getByTestId('sort').selectOption(sortValue);
     }
  }