# Jasmine Unit Testing

##### This repo is to learn about how to use, and setup tests in Jasmine. It's built on top of the ES6 Boilerplate repo https://github.com/tomroper/es6-babel-gulp-boilerplate . You can find example tests in `./__tests__/spec/MathUtils.js`

##### SpecRunner will be availble at `http://localhost:3000/__tests__/SpecRunner.html`


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

### Jasmine Matchers

They are matchers and use to compare the actual and expected outputs of any jasmine test. 

#### MATCHER = PURPOSE
* toBe() = passed if the actual value is of the same type and value as that of the expected value. It compares with === operator
* toEqual() = works for simple literals and variables;
should work for objects too
* toMatch() = to check whether a value matches a string or a regular expression
* toBeDefined() = to ensure that a property or a value is defined
* toBeUndefined() = to ensure that a property or a value is undefined
* toBeNull() = to ensure that a property or a value is null.
* toBeTruthy() = to ensure that a property or a value is true
* toBeFalsy() = to ensure that a property or a value is false
* toContain() = to check whether a string or array contains a substring or an item.
* toBeLessThan() = for mathematical comparisons of less than
* toBeGreaterThan() = for mathematical comparisons of greater than
* toBeCloseTo() = for precision math comparison
* toThrow() = for testing if a function throws an exception
* toThrowError() = for testing a specific thrown exception

The Jasmine not keyword can be used with every matcher’s criteria for inverting the result. e.g.
```
expect(actual).not.toBe(expected);
expect(actual).not.toBeDefined(expected);
```
### Disable Suites and Specs

You need not to remove the code – rather just add char x in start of describe to make if xdescribe.

```
xdescribe("MathUtils", function() {
    //code
});
```
```
describe("MathUtils", function() {
    //Spec for sum operation
    xit("should be able to calculate the sum of two numbers", function() {
        expect(10).toBeSumOf(7, 3);
    });
});
```

### Spies
Jasmine has test double functions called spies. A spy can stub any function and tracks calls to it and all arguments. A spy only exists in the describe or it block in which it is defined, and will be removed after each spec. To create a spy on any method, use spyOn(object, 'methodName') call.

There are two matchers toHaveBeenCalled and toHaveBeenCalledWith which should be used with spies. toHaveBeenCalled matcher will return true if the spy was called; and toHaveBeenCalledWith matcher will return true if the argument list matches any of the recorded calls to the spy.

```
describe("MathUtils", function() {
    var calc;
 
    beforeEach(function() {
        calc = new MathUtils();
        spyOn(calc, 'sum');
    });
 
    describe("when calc is used to peform basic math operations", function(){
         
        //Test for sum operation
        it("should be able to calculate sum of 3 and 5", function() {
            //call any method
            calc.sum(3,5);
 
            //verify it got executed
            expect(calc.sum).toHaveBeenCalled();
            expect(calc.sum).toHaveBeenCalledWith(3,5);
        });
 
    });
});
```

Above example is very much most basic in nature, you can use spies to verify the calls for internal methods as well. E.g. If you call method calculateInterest() on any object then you may want to check if getPrincipal(), getROI() and getTime() must have been called inside that object. Spy will help you verify these kind of assumptions.

When there is not a function to spy on, jasmine.createSpy can create a bare spy. This spy acts as any other spy – tracking calls, arguments, etc. But there is no implementation behind it. Spies are JavaScript objects and can be used as such. Mostly, these spies are used as callback functions to other functions where it is needed.

```
var callback = jasmine.createSpy('callback');
 
//Use it for testing
expect(object.callback).toHaveBeenCalled();
```

If you need to define multiple such methods then you can use shortcut method jasmine.createSpyObj. e.g.

```
tape = jasmine.createSpyObj('tape', ['play', 'pause', 'stop', 'rewind']);
tape.play();
 
//Use it for testing
 expect(tape.play.calls.any()).toEqual(true);
```

#### TRACKING PROPERTY = PURPOSE
* .calls.any() = returns false if the spy has not been called at all, and then true once at least one call happens.
* .calls.count() = returns the number of times the spy was called
* .calls.argsFor(index) = returns the arguments passed to call number index
* .calls.allArgs() = returns the arguments to all calls
* .calls.all() = returns the context (the this) and arguments passed all calls
* .calls.mostRecent() = returns the context (the this) and arguments for the most recent call
* .calls.first() = returns the context (the this) and arguments for the first call
* .calls.reset() = clears all tracking for a spy
