# jscodeshift-ava-to-jest

A [jscodeshift](https://github.com/facebook/jscodeshift) codemod that transforms test files from [AVA](https://github.com/avajs/ava) to [Jest](https://facebook.github.io/jest/).

## Install

Get `jscodeshift-ava-to-jest` from [NPM](https://www.npmjs.com/package/jscodeshift-ava-to-jest)

```
npm install --save-dev jscodeshift-ava-to-jest
```

## Usage

**TBD: Explain how this module can be used in an existing project.**

## Contributing

### Project structure

`ava-tests`: Contains tests written in AVA.

`jest-tests`: Contains **generated** Jest files.

`src`: Contains `jscodeshift` helper functions.

`transform.js`: The entry point for `jscodeshift`.

### Run tests

`npm test`: Transforms tests from AVA to Jest.