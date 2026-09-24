# Javascript Interview Tests

## IDE Setup

Open **this** folder in VSCode to get correct settings and devcontainer recognition.

## (Optional) Devcontainer

If docker is installed, use command palette `Dev Container: Reopen in Container` or open from bottom-left action bar to build and run devcontainer with all dependencies installed.

## Install Project

* Requires
  * Node 24+
  * NPM 11+

Run

```shell
npm install
```

to install project dependencies

## (Optional) Extensions

Install recommended VSCode extensions (these may already be installed in devcontainer) to get easy debug and test running from editor gutter.

## Run Tests

All tests are in the `tests` folder. Start with `FirstTest.test.js` and move to sequential test files as you progress.

* With extensions: Click play button next to `it('...` tests to run the test, or right click -> debug to debug the test
* Without extensions: Run `npm run test` to run all tests from the command line