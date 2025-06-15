//Primitive datatypes: Number, string, boolean, undefined, null

// x=10                   //number
// console.log(typeof(x))

// x="orange"             //string
// console.log(typeof(x))

// x=true                 //boolean
// console.log(typeof(x))

// var x               //undefined
// console.log(typeof(x))

// x=                //undefined                        
// console.log(typeof(x))

// x=null                //null
// console.log(typeof(x))

// Non primitive datatypes : arrays,objects,regular expressions

// arr=[]  //empty array
// arr1=["Admin","admin123"]  //elements of array
// console.log(arr1)       //[ 'Admin', 'admin123' ]
// console.log(arr1[0])    //Admin
// console.log(arr1[1])    //admin123
// console.log(typeof(arr1))  //object
// console.log(typeof(arr1[0])) //string
// console.log(typeof(arr1[1]))  //string

// arr2=["Ashu",18,true,undefined,null]  //array with mixed data types
// // console.log(arr2)  //[ 'Ashu', 18, true, undefined, null ]
// // console.log(typeof(arr2))  //object
// // console.log(arr2[0]) //Ashu
// // console.log(arr2[1]) //18
// // console.log(arr2[2]) //true
// // console.log(arr2[3]) //undefined
// // console.log(arr2[4]) //null
// // console.log(arr2[5]) //undefined here also if element is not defined
// // console.log(typeof(arr2[0])) //string
// // console.log(typeof(arr2[1])) //number
// // console.log(typeof(arr2[2])) //boolean
// // console.log(typeof(arr2[3])) //undefined
// console.log(typeof(arr2[4])) //object
// console.log(typeof(arr2[5])) //undefined here also if element is not defined

// arr3=[2,6,57,14]  //array with same data types
// console.log(arr3) //[ 2, 6.57, 14 ]
// console.log(arr3[2]) //57
// console.log(typeof(arr3[0])) //number

// arr1=["Admin","admin123"] 
// //index always starts from 0
// //arr1[0] refers to Admin , arr1[1] refers to admin123
// console.log(arr1[0])
// console.log(arr1[1])

//example: consider 
// import { test, expect } from '@playwright/test';

// const creds=["Admin","admin123"]

// test("Verify Login with valid credential", async ({page})=>{

//     //Actions 
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

//     await page.locator("input[name='username']").fill(creds[0])

//     await page.locator("input[type='password']").fill(creds[1])

//     await page.locator("button[type='submit']").click()

//     //Assertions
//     await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

// })

// arr4=["pink","blue"]
// console.log(arr4)  //[ 'pink', 'blue' ]
// arr4[1]="purple"
// console.log(arr4)  //[ 'pink', 'purple' ] //arrays are mutable

// str="Javsscript"
// str[3]="a"
// console.log(str) //Javsscript //i.e, strings are immutable

// objectname = {
//     property name: "propertyvalue"
// }

// student={
//     firstname:"Ashwini",  //property name, property value
//     lastname:"N",
//     place:"Bangalore"
// }
// console.log(student.firstname) //Ashwini
// console.log(student.lastname) //N
// console.log(student.place)  //Bangalore

// creds={
// //     username:"Admin",
// //     password:"admin123"
// // }
// // console.log(creds.username) //Admin
// // console.log(creds.password)  //admin123

// // Example:
// const { test, expect } = require('playwright/test');
// import data from "../../testData/Addjobtitle.json"
// test.describe('Add Job Title Feature', () => {
//     const creds = {
//         username: "Admin",
//         password: "admin123"
//     }
//     test('should add a new job title successfully', async ({ page }) => {

//         await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

//         await page.locator("input[name='username']").fill(creds.username)

//         await page.locator("input[type='password']").fill(creds.password)

//         await page.locator("button[type='submit']").click()

//         //Assertions
//         await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

//         await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click()
//         await page.locator("//span[normalize-space(text())='Job']").click()
//         await page.locator("//a[normalize-space(text())='Job Titles']").click()
//         await page.locator("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click()
//         await page.locator("(//label[normalize-space(text())='Job Title']/following::input)[1]").fill(data.jobtitle)
//         await page.locator("//textarea[@placeholder='Type description here']").fill(data.jobDescription)
//         await page.locator('button[type="submit"]').click()

//         await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList')
//     });

// });



