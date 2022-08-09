const { By, Key} = require("selenium-webdriver");
const {Builder} = require("selenium-webdriver");

async function testing() {

    //Launch browser
    let driver = await new Builder().forBrowser("firefox").build();


    //Navigate to application
    await driver.get("https://lambdatest.github.io/sample-todo-app/");
    


    //Add a todo
    await driver.findElement(By.id("sampletodotext")).sendKeys("First selenium", Key.RETURN);


    //Exit browser
    await driver.quit();

}
testing();