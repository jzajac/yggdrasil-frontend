describe('yggdrasil landing page', function() {
    var searchPage = require('../page/search.page.js');

    beforeEach(function() {
        searchPage.get();
    });

    it('should render the search view', function() {

        expect(searchPage.getPageTitle()).toMatch('Find Your Health Plan Now');

    });

    it('should have search results', function() {

        searchPage.getSearchResults().then(function(results) {
           expect(results.length).toBeTruthy();
        });

    });


});