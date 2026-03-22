"use strict";
const path = require("node:path");
const fs = require("node:fs");
const {
  Builder,
  Browser,
  By,
  WebDriver,
} = require("selenium-webdriver");
const dotenv = require("dotenv");
const capabilities = require("./capabilities");

const parseEnvFile = dotenv.config({
  path: path.join(__dirname, "..", ".env"),
});

if (parseEnvFile.error) {
  throw parseEnvFile.error;
}

const run = async () => {
  let driver = new Builder()
    .withCapabilities(capabilities)
    .forBrowser(Browser.CHROME)
    .usingServer(process.env.SELENIUM_GRID_URL)
    .build();

  await driver.get("https://www.imdb.com/search/name/?birth_monthday=12-10");

  await wait(1000); // Sleep for 1 second.

  const titleElement = await driver
    .findElement(By.xpath(
      "//h1[contains(@class, 'ipc-title__text')]"
  ));
  
  const titleText = await titleElement.getText();
  console.log("Title text: " + titleText);

  await wait(1000);

  await takeScreenshot(
    path.join(
      __dirname,
      "..",
      "screenshot.png",
    ),
    driver,
  );

  await driver.quit();
};

/**
 * @param {number} milliSeconds
 */
const wait = async (milliSeconds) => {
  await new Promise((resolve, reject) => {
    setTimeout(() => resolve(), milliSeconds);
  });
};

/**
 * @param {string} filePath
 * @param {WebDriver} driver
 */
const takeScreenshot = async (filePath, driver) => {
  const b64Image = await driver.takeScreenshot();
  fs.writeFileSync(filePath, b64Image, "base64");
};

run();