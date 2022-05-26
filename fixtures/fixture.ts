import { test as baseTest } from "@playwright/test";
import { LandingPage } from "../pages/landingPage";
import { SearchPage } from "../pages/searchPage";

const test = baseTest.extend<{
  landingPage: LandingPage;
}>({
  landingPage: async ({ page }, use) => {
    await use(new LandingPage(page));
  },
  searchPage: async ({ page }, use) => {
    await use(new SearchPage(page));
  },
});

export default test;
