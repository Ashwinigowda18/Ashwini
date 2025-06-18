//loops:

//1. for loop Syntax:
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

// for(let i=0; i<arr.length; i++){

//      await page.locator(arr[i]).check()
// }

//2. while loop syntax:
// while(condition){
//      //block of code
//      //increment / decrement
// }

//scenario 1:
//let i=0

// while (i<=10){
//      console.log(i)
//      console.log("hello")
//      i++                   //hello is executed 11 times(0 to 10 count)
// }

//scenario 2:
//let i=0

// while (i<10){
//      console.log(i)
//      console.log("hello")
//      i++                   //hello is executed 10 times(0 to 9 count)
// }

//scenario 3:
// let i=10

// while (i>9){
//      console.log(i)
//      console.log("hello")
//      i++                   //infinite loop
// }

//scenario 3:
// let i=10

// while (i<9){
//      console.log(i)
//      console.log("hello")
//      i++                   //no output
// }

//3. do while syntax:
// do{
//      //block of code
// }while(condition)

//scenario 1:
// let i=0
// do{
//      console.log(i)
//      console.log("mobile")
//      i++
// }while(i<=10)               //mobile is executed 11 times(0 to 10 count)

//scenario 2:
let i=11
do{
     console.log(i)
     console.log("mobile")
     i++
}while(i<=10)                  //mobile is executed one time in do-while loop

