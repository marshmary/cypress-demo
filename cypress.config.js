const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        experimentalStudio: true, // enable Cypress Studio
        baseUrl: "http://localhost:5173",
    },
});
