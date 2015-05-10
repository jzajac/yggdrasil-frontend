var SearchPage = function () {

    this.pageTitle = element(by.css('h1'));
    this.searchResults = element.all(by.repeater('result in vm.scope.searchResults'));

    this.get = function () {
        browser.get('http://localhost:8000/#/search?zip=03801');
    };

    this.getPageTitle = function () {
        return this.pageTitle.getText();
    };

    this.getSearchResults = function () {
        return this.searchResults;
    };

};

module.exports = new SearchPage();