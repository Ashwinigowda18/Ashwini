// function printMessage() {
//     console.log("book")
//     console.log("pen")
// }
// printMessage()           //o/p: book and pen

//scenario 2:
// function printMessage(value1,value2) {
//     console.log(value1)
//     console.log(value2)
// }
// printMessage("book","pen")   //o/p: book and pen
// printMessage(10,5)           //o/p: 10 & 5

//scenario 3:
// function printMessage(value1,value2) {
//     console.log(value1)
//     console.log(value2)
//     console.log(value1+value2)
// }
// printMessage("book","pen")   //o/p:bookpen
// printMessage(10,5)           //o/p:15
// printMessage(5,"10")         //o/p:510
// printMessage(4,"pen")        //o/p:4pen
// printMessage("5","10")       //o/p:510

//function without params(arguments)
//function with params

// function add (num1,num2){
// console.log("playwright")
// console.log(num1+num2)
// console.log("execution completed")
// }
// add(4,7) 

// output:
// playwright 
// 11
// execution completed

// function add (num1,num2){
// console.log("playwright")
// console.log(num1)
// console.log(num2)
// console.log(num1+num2)
// console.log("execution completed")
// }
// add()

// output:
// playwright
// undefined
// undefined
// NaN
// execution completed

// function displayname(){
//     console.log("Ashu")
// }
// displayname()             //o/p:Ashu

// function displayname(){
//     return "Ashu"
// }
// displayname()  //Ashu is not printed here,its there in the memory location
// x=displayname()
// console.log(x)   //o/p:Ashu

// function add (num1,num2){
//     return num1+num2
// }
// y=add(5,8)
// console.log(y)    //o/p:13
//This above script can also be written as:
// function add (num1,num2){
//     return num1+num2
// }
// console.log(add(5,8))   //o/p:13

//similarly :with return
//function without params(arguments)
//function with params

//Arrow function:

// printMessage=()=>{
//     console.log("this is an arrow function")
// }
// printMessage()               //o/p:this is an arrow function

//scenario 1:
// function squarenum(num){
//     console.log(num*num)
// }
//This above function can be written in arrow function:

// squarenum=num=>{             //single parameter "num"
//     console.log(num*num)
// }
// squarenum(7)           //o/p:49

//scenario 2:
// function add (num1,num2){
//     console.log(num1+num2)
// }
//This above function can be written in arrow function:

// add=(num1,num2)=>{              //two parameters "num1" and "num2"
//     console.log(num1+num2)
// }
// add(5,9)              //o/p:14

//scenario 3:
// function add (num1,num2){
//     return num1+num2
// }
//This above function can be written in arrow function:

// add=(num1,num2)=>num1+num2
// console.log(add(2,8))      //o/p:10 //without return keyword its giving o/p

//scenario 4:
// add=(num1,num2)=>console.log(num1+num2)  //single statement,flower bracket not required
// add(6,3)                  //o/p:9








