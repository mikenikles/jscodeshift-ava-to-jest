# jscodeshift-ava-to-jest

A [jscodeshift](https://github.com/facebook/jscodeshift) codemod that transforms test files from [AVA](https://github.com/avajs/ava) to [Jest](https://facebook.github.io/jest/).

## Deprecation Warning

I no longer maintain this package. As a great, more feature complete alternative, I recommend https://github.com/skovhus/jest-codemods.

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

## Supported AVA Assertions

- [ ] [`.pass([message])`](https://github.com/avajs/ava#passmessage)
- [ ] [`.fail([message])`](https://github.com/avajs/ava#failmessage)
- [x] [`.truthy(value, [message])`](https://github.com/avajs/ava#truthyvalue-message)
- [x] [`.falsy(value, [message])`](https://github.com/avajs/ava#falsyvalue-message)
- [x] [`.true(value, [message])`](https://github.com/avajs/ava#truevalue-message)
- [x] [`.false(value, [message])`](https://github.com/avajs/ava#falsevalue-message)
- [x] [`.is(value, expected, [message])`](https://github.com/avajs/ava#isvalue-expected-message)
- [x] [`.not(value, expected, [message])`](https://github.com/avajs/ava#notvalue-expected-message)
- [x] [`.deepEqual(value, expected, [message])`](https://github.com/avajs/ava#deepequalvalue-expected-message)
- [x] [`.notDeepEqual(value, expected, [message])`](https://github.com/avajs/ava#notdeepequalvalue-expected-message)
- [ ] [`.throws(function|promise, [error, [message]])`](https://github.com/avajs/ava#throwsfunctionpromise-error-message)
- [ ] [`.notThrows(function|promise, [message])`](https://github.com/avajs/ava#notthrowsfunctionpromise-message)
- [x] [`.regex(contents, regex, [message])`](https://github.com/avajs/ava#regexcontents-regex-message)
- [x] [`.notRegex(contents, regex, [message])`](https://github.com/avajs/ava#notregexcontents-regex-message)
- [ ] [`.ifError(error, [message])`](https://github.com/avajs/ava#iferrorerror-message)

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
