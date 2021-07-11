#README

### Getting started:

- Install Google Chrome browser
- Install the latest versions of Node.js and NPM
- Install all dependencies: npm install

### Run tests:

- #### Run api tests: npx mocha e2e/api/\*_/_.ts
- #### Run browser tests: npx mocha e2e/ui/tests/\*_/_.ts
- #### Run all tests: npx mocha e2e/api/**/\*.ts e2e/ui/**/\*.test.ts

### Various:

- #### Update all dependencies: npx ncu -u && npm i
- #### Format code: npx prettier --ignore-path .gitignore \*_/_.{ts,json,md} --write
