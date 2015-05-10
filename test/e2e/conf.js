exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites: {
        landing: 'spec/landing.spec.js',
        search: 'spec/search.spec.js'

    },
    jasmineNodeOpts: {
        isVerbose: true,
        showColors: true
    }
};