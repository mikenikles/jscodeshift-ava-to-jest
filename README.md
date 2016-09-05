# jscodeshift-ava-to-jest

A [jscodeshift](https://github.com/facebook/jscodeshift) codemod that transforms test files from [AVA](https://github.com/avajs/ava) to [Jest](https://facebook.github.io/jest/).

## Install

Get `jscodeshift-ava-to-jest` from [NPM](https://www.npmjs.com/package/jscodeshift-ava-to-jest)

```
npm install --save-dev jscodeshift-ava-to-jest
```

## Usage

**TBD: Explain how this module can be used in an existing project.**

## Why?

It all started with [a tweet](https://twitter.com/mikenikles/status/772234132436885504),
followed by [a suggestion](https://twitter.com/cpojer/status/772239240683925504) by Christoph Pojer.

## Contributing

### Project structure

`ava-tests`: Contains tests written in AVA.

`jest-tests`: Contains **generated** Jest files.

`src`: Contains `jscodeshift` helper functions.

`transform.js`: The entry point for `jscodeshift`.

### Run tests

`npm test`: Transforms tests from AVA to Jest. In more detail:

1. Runs `ava` on all files in `ava-tests` to make sure the AVA tests are valid.
1. Deletes all files in `jest-tests`.
1. Copies all files from `ava-tests` to `jest-tests`.
1. Runs `jscodeshift` on all files in `jest-tests`.
1. Runs `jest` on all files in `jest-tests` to make sure the Jest tests are valid.