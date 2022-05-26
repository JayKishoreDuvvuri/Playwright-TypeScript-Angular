import { BasePage } from "./basePage";
import { expect } from "@playwright/test";
import { baseUrl } from "../config";

export class LandingPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async openApp(): Promise<void> {
    await super.open(baseUrl);
    await super.waitForPageLoad();
  }

  async clickIframeElement(
    iframeLocator: string,
    selector: any
  ): Promise<LandingPage> {
    return await this.waitAndClickIframeElement(iframeLocator, selector);
  }

  async type(selector: string, text: string): Promise<LandingPage> {
    return await this.waitAndFill(selector, text);
  }

  async pressEnter(key: string): Promise<LandingPage> {
    return await this.keyPress(key);
  }

  async clickElement(selector: any): Promise<LandingPage> {
    return await this.waitAndClick(selector);
  }

  async verifyIsVisible(selector: any): Promise<LandingPage> {
    const isVisible = await this.isElementVisible(selector);
    expect(isVisible).toBeTruthy();
    return isVisible;
  }

  async verifyIsEnabled(selector: any): Promise<LandingPage> {
    const isEnabled = await this.isElementEnabled(selector);
    expect(isEnabled).toBe(true);
    return isEnabled;
  }

  async verifyText(selector: string, text: string): Promise<string> {
    const textValue = await this.getElementText(selector, text);
    return expect(textValue.trim()).toBe(text);
  }

  async verifyElementContainsText(
    selector: string,
    text: string
  ): Promise<string> {
    const value = await this.getElementContainsText(selector, text);
    return expect(value).toContainText(text);
  }

  async verifyElementValue(selector: string, text: string): Promise<string> {
    const textValue = await this.getElementValue(selector, text);
    return expect(textValue.trim()).toBe(text);
  }

  async verifyElementAttribute(
    selector: string,
    attribute: string,
    value: string
  ): Promise<string> {
    const textValue = await this.getElementAttribute(selector, attribute);
    return expect(textValue.trim()).toBe(value);
  }

  async takeScreenShot(): Promise<LandingPage> {
    const screenshot = await this.getScreenShot();
    return expect(screenshot).toMatchSnapshot("MyScreenShot.png");
  }
}
