import { BasePage } from "./basePage";
import { expect } from "@playwright/test";

export class SearchPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async clickElement(selector: string): Promise<SearchPage> {
    return await this.clickSvgElement(selector);
  }

  async verifyIsVisible(selector: any): Promise<SearchPage> {
    const isVisible = await this.isElementVisible(selector);
    expect(isVisible).toBeTruthy();
    return isVisible;
  }

  async verifyIsEnabled(selector: any): Promise<SearchPage> {
    const isEnabled = await this.isElementEnabled(selector);
    expect(isEnabled).toBe(true);
    return isEnabled;
  }
}
