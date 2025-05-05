"use strict";
module.exports = {
  "os": "Windows",
  "os_version": "11",
  "browser": "Chrome",
  "browser_version": "latest",
  "name": "Test",
  "build": "Build 1.0",
  "browserstack.debug": true,
  "browserstack.console": "info",
  "browserstack.networkLogs": true,
  "disableCorsRestrictions": true,
  "wsLocalSupport": true,
  "geoLocation": "GB",
  "goog:chromeOptions": {
    "args": [
      '--disable-popup-blocking',
      '--disable-application-cache',
      '--disable-web-security',
      '--start-maximized',
      '--ignore-certificate-errors',
      '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
      '--window-size=1920,1080',
      // '--headless',
      // '--disable-gpu',
    ],
  },
};