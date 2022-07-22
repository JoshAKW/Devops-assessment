const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test("Returns array", () => {
        expect(Array.isArray(shuffleArray([1,2]))).toBe(true)
    })
    test("Returns array of same length", () => {
const array = [1,2,3,4]

        expect(shuffleArray(array).length).toEqual(array.length)
    })
   
})



// In the functions.test.ts file, there is a describe block waiting for tests!

// Write at least 2 tests in the describe callback for the shuffleArray function. You may need to read through Jest documentation to find methods/matchers to use.

// Some ideas:

// check that shuffleArray returns an array

// check that it returns an array of the same length as the argument sent in

// check that all the same items are in the array

// check that the items have been shuffled around

// Once you’re done, make sure your server is running with nodemon.

// Next, in a new terminal window while your server is still running, run the tests with npm run test. You should see 1 passed in green when this command runs.

