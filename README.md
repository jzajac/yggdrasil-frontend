# yggdrasil-frontend

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