import { test, expect } from '@playwright/test';

const Employeelist = {

    Employee1: "Ashwini",
    Employee2: "Ganavi",
    Employee3: "Sanjana",
    Employee4: "Rohan",
    Employee5: "Sandeep",

}

for (let Employee in Employeelist) {

    
test(`example for looping test data - DDT - ${Employeelist[Employee]}`, async ({ page }) => {


    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator(`input[name='username']`).fill("Admin")
    await page.locator("input[type='password']").fill("admin123")
    await page.locator("button[type='submit']").click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    await page.locator("(//span[contains(@class,'oxd-text oxd-text--span')])[2]").click()
    await page.locator("(//a[@class='oxd-topbar-body-nav-tab-item'])[2]").click()
    let randomtext = (Math.random() + 1).toString(36).substring(7); 
    await page.locator("input[name='First Name']").fill(Employeelist[Employee] + randomtext)
    await page.locator("input[name='Last Name']").fill(".")
    await page.locator("button[type='submit']").click()
    //await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/242")


}) 

} 