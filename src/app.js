"use strict";
const path = require("node:path");
const { Builder, Browser, } = require("selenium-webdriver");
const dotenv = require("dotenv");
const capabilities = require("./capabilities");

const parseEnvFile = dotenv.config({
  path: path.join(__dirname, "..", ".env"),
});

if (parseEnvFile.error) {
  throw parseEnvFile.error;
}

(async function helloSelenium() {
  let driver = new Builder()
    .withCapabilities(capabilities)
    .forBrowser(Browser.CHROME)
    .usingServer(process.env.SELENIUM_GRID_URL)
    .build();

  await driver.get("https://www.selenium.dev/selenium/web/blank.html");

  await wait(5000); // Sleep for 5 seconds.

  await driver.quit();
})();

/**
 * @param {number} milliSeconds
 */
const wait = async (milliSeconds) => {
  await new Promise((resolve, reject) => {
    setTimeout(() => resolve(), milliSeconds);
  });
};