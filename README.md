# yggdrasil-frontend

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
