# yggdrasil-frontend

**Table of Contents**
 * [About](#about)
 * [Installation](#installation)
 * [Running Locally](#running-locally)
 * [Tests](#tests)
 * [Architecture](#architecture)

## About 
Yggdrasil is an application which allows consumers to quote out healthcare plans, along the same lines as HealthSherpa. 

It is not intended to be launched publicly - it's essentially just some code I threw together. 

### The name 

In Norse mythology, the Yggdrasil is a tree which holds the Nine worlds. Whether one dwells in Midgard or Asgard (or any of the other worlds) the Yggdrasil is a shared concept. Healthcare is like the Yggdrasil in that no matter who you are you need access to it. 

(OK, so maybe this name is a bit contrived.)

## Installation

 * Ensure you have node.js installed and available in your PATH
 * `cd` to the project root (where package.json is located)
 * run `npm install` to install node.js dependencies which are read from package.json
 
 
## Running locally

 * run `gulp dev` to compile application, which:
    * compiles HTML templates into an Angular module 
    * compiles typescript into javascript
 
## Tests

There are two types of tests in this application: end to end and unit. 

End to end tests are written using Protractor and Jasmine. Unit tests are written with Karma and Jasmine.

### End to End tests - setup

 * run `npm install -g protractor` to install Protractor globally
 * run `webdriver-manager update` to pull down selenium binaries
 
### End to End tests - running

 * run `webdriver-manager start` to start selenium
 * `cd` to test/e2e/
 * run `protractor conf.js` to run e2e tests
 
### Unit tests - setup

 * Most dependencies will get installed when you first run `npm install`.
 * Recommended: run `npm install -g karma-cli` to use Karma globally
 
### Unit tests - running

 * `cd` to test/unit/
 * run `karma start karma.conf.js`

## Architecture

### Directories and their purposes

 * `src` - contains all source files for app
   * `css` - compiled SCSS files
   * `i18n` - internationalization resources. currently just contains localized strings for English language
   * `js` - compiled JS files from Typescript
   * `mockdata` - JSON file representing same output as backend - useful for testing
   * `scss` - SCSS files used to author styles. These compile down to CSS
   * `templates` - HTML templates for application
   * `ts` - Typescript files. These compile down to JS
 * `test` - contains unit and end-to-end tests for app

### Restful API 

Below is the API the frontend will be communicating with. Note that not all of this is implemented, and the *how* these endpoints are implemented (i.e., a certain endpoint is hitting an upstream ElasticSearch server and another endpoint is hitting a Postgres server) is outside the scope of this document.

All endpoints below should be prefixed with the URL of the API. For example, `https://api.myCompany.com/`. For each endpoint below, the supported HTTP verbs are listed below it.

 * `/search` - Health plan search endpoint
   * `POST` - Returns a non-paginated list of health plans meeting certain criteria (see note 1 below)
     * `zipCode` [string] - Customer's zip code
     * `age` [string] - Customer's age
     * `isSmoker` [boolean] - Whether or not Customer is a smoker
 * `/plan` - Health plan endpoint
   * `GET` - Returns a health plan by Id
     * `id` [integer] - Health plan Id
   * `GET` - Returns all health plans
 * `/insurer`
   * `GET` - Returns an insurer by Id
     * `id` [integer] - Insurer Id
   * `GET` - Returns all insurers 
 * `/subscribe` - Health plan subscription endpoint
   * `POST` - Subscribes Customer to health plan
     * `healthPlanId` [integer] - Health plan id
     * `customerFirstName` [string] - Customer's first name
     * `customerLastName` [string] - Customer's last name
     * `dateOfBirth` [string, format: DD/MM/YYYY] - Customer's date of birth


**Notes**
(1) GET could have been used instead of POST. One downside to this is Internet Explorer may cache the GET request and the user may get back stale data. Using POST circumvents this. 
