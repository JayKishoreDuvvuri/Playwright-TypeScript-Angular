//### 1. User opens the app and navigates to landing page
//### 2. User fills in the "from" origin, "to" destination places and fills in the departure date
//### 3. User clicks on the search flights button to see the search results
//### 4. User verifies the search page and clicks on search page jetblue logo
//### 5. User navigates back to the landing page

import { expect } from "@playwright/test";
import { baseUrl, searchResultsUrl } from "../config";
import {
  iframe,
  cookies,
  logo,
  navBar,
  bookTab,
  manageTripsTab,
  checkInTab,
  travelInfoTab,
  trueBlueProfileIcon,
  shoppingCart,
  isItSummerYetTitle,
  flightsTab,
  flightsAndHotelTab,
  flightsAndCruiseTab,
  carsTab,
  staysTab,
  useTrueBluePointsCheckBox,
  trueBluePointsLabel,
  firstTabBox,
  secondTabBox,
  searchBox,
  tripType,
  fromTab,
  tripTypeOneWay,
  tripTypeOneWaySelected,
  toTab,
  departDateTab,
  departDate,
  doneButton,
  continueToFlightResultsButton,
} from "../pageObjects/landingPage";
import {
  searchPageLogo,
  searchPageHeader,
  jetBlueImg,
} from "../pageObjects/searchPage";
import test from "../fixtures/fixture";
import fs from "fs";

const testData = JSON.parse(fs.readFileSync(`./data/testData.json`, `utf-8`));

test.describe("Search Test", () => {
  test("User Verifies the Search Results", async ({
    landingPage,
    searchPage,
  }) => {
    await test.step(
      `Open Jetblue App and verify landing page cookie Iframe is visible`,
      async () => {
        await landingPage.openApp();
        await landingPage.clickIframeElement(iframe, cookies);
      }
    );

    await test.step("Verify whether user is on the landing page", async () => {
      await landingPage.verifyIsVisible(logo);
      expect(await landingPage.getUrl()).toBe(baseUrl);
      expect(await landingPage.getTitle()).toBe(testData.title);
    });

    await test.step(`Verify Nav bar visible`, async () => {
      await landingPage.verifyIsVisible(navBar);
    });

    await test.step(`Verify main tabs visible on landing page`, async () => {
      await landingPage.verifyIsVisible(bookTab);
      await landingPage.verifyIsVisible(manageTripsTab);
      await landingPage.verifyIsVisible(checkInTab);
      await landingPage.verifyIsVisible(travelInfoTab);
      await landingPage.verifyIsVisible(travelInfoTab);
      await landingPage.verifyIsVisible(trueBlueProfileIcon);
      await landingPage.verifyIsVisible(shoppingCart);
    });

    await test.step(
      `Verify Is it Summer yet? title and sub tabs visible`,
      async () => {
        await landingPage.verifyIsVisible(isItSummerYetTitle);
        await landingPage.verifyIsVisible(flightsTab);
        await landingPage.verifyIsVisible(flightsAndHotelTab);
        await landingPage.verifyIsVisible(flightsAndCruiseTab);
        await landingPage.verifyIsVisible(carsTab);
        await landingPage.verifyIsVisible(staysTab);
      }
    );

    await test.step(
      `Verify true blue point check box and label visible `,
      async () => {
        await landingPage.verifyIsVisible(useTrueBluePointsCheckBox);
        await landingPage.verifyIsVisible(trueBluePointsLabel);
      }
    );

    await test.step(`Verify first tab box visible `, async () => {
      await landingPage.verifyIsVisible(firstTabBox);
    });

    await test.step(`Verify search box is enabled `, async () => {
      await landingPage.verifyIsVisible(searchBox);
      await landingPage.verifyIsEnabled(searchBox);
    });

    await test.step(
      `Verify tripType tab is visible and click to select one way trip`,
      async () => {
        await landingPage.verifyIsVisible(tripType);
        await landingPage.clickElement(tripType);
        await landingPage.verifyIsVisible(tripTypeOneWay);
        await landingPage.clickElement(tripTypeOneWay);
        await landingPage.verifyIsVisible(tripTypeOneWaySelected);
      }
    );

    await test.step(`Verify the from and to fields are enabled`, async () => {
      await landingPage.verifyIsEnabled(fromTab);
      await landingPage.verifyIsEnabled(toTab);
    });

    await test.step(`Type in the text in from and to fields`, async () => {
      await landingPage.type(fromTab, testData.fromText);
      await landingPage.pressEnter(testData.enterKey);
      await landingPage.type(toTab, testData.toText);
      await landingPage.pressEnter(testData.enterKey);
    });

    await test.step(`Select a date from the date picker`, async () => {
      await landingPage.verifyIsVisible(departDateTab);
      await landingPage.verifyIsEnabled(departDateTab);
      await landingPage.clickElement(departDateTab);
      await landingPage.verifyIsVisible(departDate);
      await landingPage.clickElement(departDate);
    });

    await test.step(
      `Click on the Search flights and Continue to flight results button`,
      async () => {
        await landingPage.verifyIsVisible(doneButton);
        await landingPage.verifyIsEnabled(doneButton);
        await landingPage.clickElement(doneButton);
        await landingPage.verifyIsVisible(continueToFlightResultsButton);
        await landingPage.verifyIsEnabled(continueToFlightResultsButton);
        await landingPage.clickElement(continueToFlightResultsButton);
      }
    );

    await test.step(`User navigates to the Search results page`, async () => {
      await searchPage.verifyIsVisible(searchPageLogo);
      await searchPage.verifyIsEnabled(searchPageHeader);
      expect(await landingPage.getTitle()).toBe(testData.searchPageTitle);
      expect(await searchPage.getUrl()).toContain(searchResultsUrl);
    });

    await test.step(
      `Verify Search result jetblue image are visible`,
      async () => {
        await searchPage.verifyIsVisible(jetBlueImg);
      }
    );

    await test.step(
      `Click on the search page logo and check whether user is navigated to landing page`,
      async () => {
        await searchPage.clickElement(searchPageLogo);
        await landingPage.verifyIsVisible(logo);
        expect(await landingPage.getUrl()).toBe(baseUrl);
        expect(await landingPage.getTitle()).toBe(testData.title);
      }
    );
  });
});
