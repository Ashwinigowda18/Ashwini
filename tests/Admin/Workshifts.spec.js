import { test, expect } from '@playwright/test'
import logindata from "../../testData/login.json"

import shift from "../../testData/Workshifts.json"

test.describe('Add Work Shifts', () => {

    test("should add Work Shifts", async ({ page }) => {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await page.locator("input[placeholder='Username']").fill(logindata.username)
        await page.locator("input[name='password']").fill(logindata.password)
        await page.locator("button[type='submit']").click()
        await page.locator("(//a[@class='oxd-main-menu-item'])[1]").click()
        await page.locator("(//span[@class='oxd-topbar-body-nav-tab-item'])[2]").click()


        await page.locator("//a[normalize-space(text())='Work Shifts']").click()

        await page.locator("//i[contains(@class,'oxd-icon bi-plus')]").click()


        await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(shift.ShiftName)
        await page.locator("//button[@type='submit']").click()
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/workShift")




    });

});
