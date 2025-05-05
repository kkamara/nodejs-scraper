# nodejs-scraper

(2022) Use JavaScript technologies to crawl and click buttons on websites with GUI.

* [Important note:](#note)

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [License](#license)

## Important note: <a name="note"></a>

Before you try to scrape any website, go through its robots.txt file. You can access it via `domainname/robots.txt`. There, you will see a list of pages allowed and disallowed for scraping. You should not violate any terms of service of any website you scrape.

## Installation

* [NodeJS](https://nodejs.org/en).

```bash
  cp .env.example .env
  npm install --global yarn
  yarn install
```

#### Download Selenium Server jar file

[Download Selenium Server jar file](https://www.selenium.dev/documentation/grid/getting_started/).

Run the following in a new terminal.

```bash
  java -jar selenium-server-4.29.0.jar standalone --override-max-sessions true --max-sessions 10
```

[CLI options in the Selenium Grid](https://www.selenium.dev/documentation/grid/configuration/cli_options/).

## Usage

```bash
  yarn start
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[BSD](https://opensource.org/licenses/BSD-3-Clause)

