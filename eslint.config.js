const js = require('@eslint/js');
const pluginNode = require('eslint-plugin-node');
const pluginReact = require('eslint-plugin-react');

module.exports = [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: {
                jest: 'readonly',
                require: 'readonly',
                module: 'readonly',
                process: 'readonly',
                console: 'readonly',
                beforeEach: 'readonly',
                afterEach: 'readonly',
                describe: 'readonly',
                it: 'readonly',
                expect: 'readonly',
                document: 'readonly', // Añadido
            },
            parser: require.resolve('@babel/eslint-parser'), // Cambiado a @babel/eslint-parser
            parserOptions: {
                requireConfigFile: false,
                babelOptions: {
                    presets: ['@babel/preset-react'],
                },
            },
        },
        plugins: {
            node: pluginNode,
            react: pluginReact, // Añadido
        },
        settings: {
            react: {
                version: 'detect', // Añadido para detectar automáticamente la versión de React
            },
        },
        rules: {
            indent: ['error', 2],
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
            'no-trailing-spaces': 'error',
            eqeqeq: 'error',
            'no-unused-vars': 'warn',
            'no-console': 'warn',
            'consistent-return': 'error',
            'no-undef': 'error',
            'no-redeclare': 'error',
            'no-dupe-keys': 'error',
        },
        ignores: ['node_modules/**', 'build/**'],
    },
];
