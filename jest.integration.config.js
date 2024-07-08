// jest.integration.config.js
module.exports = {
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'json'],
    testMatch: ['**/test/integration/**/*.test.[jt]s?(x)'],
    setupFilesAfterEnv: ['<rootDir>/src/config/setupTests.js'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/test/__mocks__/fileTransformer.js',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
};
