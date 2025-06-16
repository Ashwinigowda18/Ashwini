//loops:

//Syntax:
// for(initialization;condition;increment/decrement){
//     //block of code
// }

// for(let i=1;i<=1000;i++){
//     console.log("automation")
// }                               //its executed 1000 times

// for(let i=1;i<=1000;i++){
//     console.log(i)
//     console.log("automation")    //i value is determined
// }

// for(let i=1;i>=1;i++){
//     console.log(i)
//     console.log("automation")    //infinite loop
// }

// for(let i=1;i<1;i++){
//     console.log(i)
//     console.log("automation")    //no output
// }

arr = ['input[value="0"]', 'input[value="2"]', 'input[value="4"]']

//await page.locator(css).check()

for(let i=0; i<arr.length; i++){

     await page.locator(arr[i]).check()
}
