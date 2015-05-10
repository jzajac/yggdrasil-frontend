describe('yggdrasil landing page', function() {
    var landingPage = require('../page/landing.page.js');

    beforeEach(function() {
        landingPage.get();
    });

    it('should render the landing view', function() {

        expect(landingPage.getPageTitle()).toMatch('Find Your Health Plan Now');

    });

    it('should execute a search', function() {

        landingPage.setZipInput('03801');

        landingPage.getFormSubmitButton().click();

        expect(browser.getCurrentUrl()).toMatch(/\/search\?zip=/);

    });


});