import { test, expect } from '@playwright/test';

import logindata from "../testData/login.json"

test("Verify Login with valid credential", async ({page})=>{

    //Actions 
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("input[name='username']").fill(logindata.username)

    await page.locator("input[type='password']").fill(logindata.password)

    await page.locator("button[type='submit']").click()

    //Assertions
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")




})
test("Verify Login with valid username and Invalid password", async ({page})=>{

    //Actions
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("input[name='username']").fill("Admin")

    await page.locator("input[type='password']").fill("fgdghg")

    await page.locator("button[type='submit']").click()

    //Assertions

    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()

})

test("Verify Login with Invalid username and valid password", async ({page})=>{

    //Actions
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("input[name='username']").fill("fgdghfj")

    await page.locator("input[type='password']").fill("admin123")

    await page.locator("button[type='submit']").click()

    //Assertions

    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()

})


test("Verify Login with Invalid username and Invalid password", async ({page})=>{

    //Actions
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("input[name='username']").fill("fgdghfj")

    await page.locator("input[type='password']").fill("afjfukd")

    await page.locator("button[type='submit']").click()

    //Assertions

    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()

})




























































