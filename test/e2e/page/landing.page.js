var LandingPage = function () {

    this.pageTitle = element(by.css('h1'));
    this.zipInput = element(by.model('form.zip'));
    this.formSubmitButton = element.all(by.css('[type=submit]'));

    this.get = function () {
        browser.get('http://localhost:8000/');
    };

    this.getPageTitle = function () {
        return this.pageTitle.getText();
    };

    this.setZipInput = function (input) {
        this.zipInput.sendKeys(input);
    };

    this.getFormSubmitButton = function (url) {
        return this.formSubmitButton;
    }
};

module.exports = new LandingPage();