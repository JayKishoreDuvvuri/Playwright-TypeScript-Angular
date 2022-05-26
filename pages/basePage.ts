export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  async getUrl(): Promise<string> {
    return this.page.url();
  }

  async waitForPageLoad(): Promise<BasePage> {
    return await this.page.waitForLoadState("networkidle");
  }

  async clickSvgElement(selector: string): Promise<BasePage> {
    // await this.page.click(selector, { force: true });
    return await this.page.dispatchEvent(selector, "click");
  }

  async waitAndClick(selector: string): Promise<BasePage> {
    await this.page.waitForSelector(selector);
    return await this.page.click(selector);
  }

  async waitAndClickIframeElement(
    iframeLocator: string,
    selector: string
  ): Promise<BasePage> {
    const iframeElement = await this.page.frameLocator(iframeLocator);
    await this.isElementVisible(iframeLocator);
    return await iframeElement.locator(selector).click();
  }

  async waitAndHardClick(selector: string): Promise<BasePage> {
    await this.page.waitForSelector(selector);
    return await this.page.$eval(selector, (element: HTMLElement) =>
      element.click()
    );
  }

  async waitAndFill(selector: string, text: string): Promise<BasePage> {
    await this.page.waitForSelector(selector);
    return await this.page.fill(selector, text);
  }

  async keyPress(key: string): Promise<BasePage> {
    return await this.page.keyboard.press(key);
  }

  async getScreenShot(): Promise<BasePage> {
    const screenshot = await this.page.screenshot();
    return screenshot;
  }

  async getElementText(selector: string, text: string): Promise<string> {
    await this.page.waitForSelector(selector);
    const textValue = await this.page.textContent(selector);
    return textValue;
  }

  async getElementContainsText(
    selector: string,
    text: string
  ): Promise<string> {
    const element = await this.page.waitForSelector(selector);
    return await element.textContent();
  }

  async getElementValue(selector: string, text: string): Promise<string> {
    await this.page.waitForSelector(selector);
    const textValue = await this.page.$eval(
      selector,
      (element: HTMLInputElement) => element.value
    );
    return textValue;
  }

  async getElementAttribute(
    selector: string,
    attribute: string
  ): Promise<string> {
    await this.page.waitForSelector(selector);
    const textValue = await this.page.getAttribute(selector, attribute);
    return textValue;
  }

  async isElementVisible(
    selector: string,
    errorMessage: string
  ): Promise<string> {
    await this.page.waitForSelector(selector);
    const element = this.page.locator(selector);
    const isVisible = await element.isVisible();
    return isVisible;
  }

  async isElementNotVisible(
    selector: string,
    errorMessage: string
  ): Promise<BasePage> {
    const element = this.page.locator(selector);
    const isHidden = await element.isHidden();
    return isHidden;
  }

  async isElementEnabled(
    selector: string,
    errorMessage: string
  ): Promise<BasePage> {
    await this.page.waitForSelector(selector);
    const element = this.page.locator(selector);
    const isEnabled = await element.isEnabled();
    return isEnabled;
  }

  async isElementChecked(
    selector: string,
    errorMessage: string
  ): Promise<BasePage> {
    await this.page.waitForSelector(selector);
    const element = this.page.locator(selector);
    const isChecked = await element.isChecked();
    return isChecked;
  }
}
