const js = require('@eslint/js');
const pluginNode = require('eslint-plugin-node');
const pluginReact = require('eslint-plugin-react');
const babelParser = require('@babel/eslint-parser');

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
                document: 'readonly',
            },
            parser: babelParser, // Asegúrate de importar el parser correctamente
            parserOptions: {
                requireConfigFile: false,
                babelOptions: {
                    presets: ['@babel/preset-react'],
                },
            },
        },
        plugins: {
            node: pluginNode,
            react: pluginReact,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            indent: ['error', 4],
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
