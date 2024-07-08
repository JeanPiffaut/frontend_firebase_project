const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        specPattern: 'test/e2e/integration/**/*.spec.js',
        fixturesFolder: 'test/e2e/fixtures',
        supportFile: 'test/e2e/support/index.js',
        videosFolder: 'test/e2e/videos',
        screenshotsFolder: 'test/e2e/screenshots',
        baseUrl: 'http://localhost:3000', // Cambia esto según el puerto de tu aplicación
    },
});
