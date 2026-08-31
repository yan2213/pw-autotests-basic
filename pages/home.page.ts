import { Page, Locator } from '@playwright/test';
import { HeaderFragment } from './fragments/header.fragment';
import{ Category, HandTools, PowerTools, Other, SortOptions } from '../interfaces/interfaces.home.page';

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

     async clickOnCategory(category: Category | HandTools | PowerTools | Other): Promise<void>{
      await this.page.getByLabel(category).click();
     };

     async sortProducts(sortValue: SortOptions): Promise<void>{
      await Promise.all([
        this.page.waitForResponse(resp =>
          resp.url().includes('/products') &&
          !!resp.request().postData()?.includes(`"sort":"${sortValue}"`)
        ),
        this.page.getByTestId('sort').selectOption(sortValue),
      ]);
     };

     async getProductPrices(): Promise<number[]>{
      const prices = await this.productPrices.allTextContents();
      const priceNumbers = prices.map(p => parseFloat(p.replace('$', '')));
      return priceNumbers;
     }
  }