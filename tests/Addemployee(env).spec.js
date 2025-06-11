import { test, expect } from '@playwright/test';

import data from "../testData/Addemployee.json"



test('Verify Add Employee', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).fill('A');
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.ORG_USERNAME);
  await page.getByRole('textbox', { name: 'Username' }).press('Enter');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.ORG_PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await expect(page.locator('#app')).toContainText('Time at Work');
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'First Name' }).fill('A');
  await page.getByRole('textbox', { name: 'First Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'First Name' }).fill(data.firstname);
  await page.getByRole('textbox', { name: 'First Name' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Middle Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Last Name' }).fill(data.lastname);
  await page.getByRole('textbox', { name: 'Last Name' }).press('CapsLock');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('textbox').nth(4).dblclick();
  await page.getByRole('textbox').nth(4).fill('1236');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/249');
  await page.locator('div').filter({ hasText: /^Configuration Employee ListAdd EmployeeReports$/ }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('link', { name: 'Employee List' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('A');
  await page.getByRole('textbox', { name: 'First Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'First Name' }).fill('Ashwini');
  await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Middle Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('N');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/250');
});
