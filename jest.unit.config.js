// jest.unit.config.js
module.exports = {
    testEnvironment: 'node',
    moduleFileExtensions: ['js', 'json'],
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
    collectCoverage: true,
    coverageDirectory: 'coverage',
};
