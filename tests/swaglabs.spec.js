import { test, expect } from '@playwright/test';


test("Verify Login with valid credential", async ({page})=>{

    //Actions 
    await page.goto("https://www.saucedemo.com/v1/")

    await page.locator("input[data-test='username']").fill("standard_user")

    await page.locator("input[type='password']").fill("secret_sauce")

    await page.locator("input[type='submit']").click()

    //Assertions
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")




})

test("Verify Login with valid username and invalid password", async ({page})=>{

    //Actions 
    await page.goto("https://www.saucedemo.com/v1/")

    await page.locator("input[data-test='username']").fill("standard_user")

    await page.locator("input[type='password']").fill("hfdfyhddt")

    await page.locator("input[type='submit']").click()

    //Assertions
    await expect(page.locator("h3[data-test='error']")).toBeVisible()
    
})

test("Verify Login with invalid username and valid password", async ({page})=>{

    //Actions 
    await page.goto("https://www.saucedemo.com/v1/")

    await page.locator("input[data-test='username']").fill("dgertdthf")

    await page.locator("input[type='password']").fill("secret_sauce")

    await page.locator("input[type='submit']").click()

    //Assertions
    await expect(page.locator("h3[data-test='error']")).toBeVisible()
    
})

test("Verify Login with invalid username and invalid password", async ({page})=>{

    //Actions 
    await page.goto("https://www.saucedemo.com/v1/")

    await page.locator("input[data-test='username']").fill("dgertdthf")

    await page.locator("input[type='password']").fill("kfwtugg")

    await page.locator("input[type='submit']").click()

    //Assertions
    await expect(page.locator("h3[data-test='error']")).toBeVisible()
    
})

