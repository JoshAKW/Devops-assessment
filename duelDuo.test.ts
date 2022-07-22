
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})


// Check that clicking the Draw button displays the div with id = “choices”

// Check that clicking an “Add to Duo” button displays the div with id = “player-duo”

test('choices container is displayed when clicking draw', async() => {
    await driver.findElement(By.id('draw')).click()
    const choices = await driver.findElement(By.id('choices'))
    const isDisplayed = await choices.isDisplayed()
    await driver.sleep(1000)
    expect(isDisplayed).toBeTruthy();
   
})


test('add a robot to my team', async() => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.xpath('//button[text()="Add to Duo"]')).click()
    const playerDuo = await driver.findElement(By.id('player-duo'))
    const isDisplayed = await playerDuo.isDisplayed()
    await driver.sleep(1000)
    expect(isDisplayed).toBeTruthy();
})



// Open and read the file called duelDuo.test.ts. There is one automated test included already.

// Write at least 2 more tests for the game. Here are some ideas for tests:

// Check that clicking the Draw button displays the div with id = “choices”

// Check that clicking an “Add to Duo” button displays the div with id = “player-duo”

// Check that when a bot is “Removed from Duo”, that it goes back to “choices”

// Note: You may want to use the sleep function after clicking on an element to make sure the tests don’t get ahead of themselves.

// You can run these with npm run test as well.