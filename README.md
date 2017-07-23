# Jasmine Unit Testing

### This repo is to learn about how to use, and setup tests in Jasmine. It's built on top of the ES6 Boilerplate repo https://github.com/tomroper/es6-babel-gulp-boilerplate

#### SpecRunner will be availble at `http://localhost:3000/__tests__/SpecRunner.html`


### Initial setup

```bash
# Clone the repo...
git clone https://github.com/tomroper/jasmine-tests.git
cd jasmine-tests

# Then, you need to install all the dependencies...
npm install

# If you wanna be able to use global commands `karma` and `gulp`...
npm install -g gulp
```

### Running in the browser
```bash
gulp build
gulp serve

# If you wanna Gulp to re-build on every change...
gulp watch
```

## Using Jasmine

### Suite

A Jasmine suite is a group of test cases that can be used to test a specific behavior of the JavaScript code (a JavaScript object or function). This begins with a call to the Jasmine global function describe with two parameters – first parameter represents the title of the test suite and second parameter represents a function that implements the test suite.

```
//This is test suite
describe("Test Suite", function() {
    //.....
});
```

### Spec

A Jasmine spec represents a test case inside the test suite. This begins with a call to the Jasmine global function it with two parameters – first parameter represents the title of the spec and second parameter represents a function that implements the test case.

In practice, spec contains one or more expectations. Each expectation represents an assertion that can be either true or false. In order to pass the spec, all of the expectations inside the spec have to be true. If one or more expectations inside a spec is false, the spec fails.

```
//This is test suite
describe("Test Suite", function() {
    it("test spec", function() {
        expect( expression ).toEqual(true);
    }); 
});
```
