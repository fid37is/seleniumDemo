const { By, Key} = require("selenium-webdriver");
const {Builder} = require("selenium-webdriver");
var should = require('chai').should();

//describe block
describe ("add todo tests", function(){

    //it block
    it("Successfully added a todo to application", async function(){
        //Launch browser
        let driver = await new Builder().forBrowser("firefox").build();

        //Navigate to application
        await driver.get("https://lambdatest.github.io/sample-todo-app/");
        
        //Add a todo
        await driver.findElement(By.id("sampletodotext")).sendKeys("First selenium", Key.RETURN);

        //Assert 
        let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){
            return value;
        });

        //assert using node assertion
        //assert.strictEqual(todoText, "First selenium");

        //assert using chai should
        todoText.should.equal("First selenium");

        //Exit browser
        await driver.quit();

    });


});






