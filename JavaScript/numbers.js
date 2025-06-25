const { hash } = require("crypto")

console.log("5"-3)  //2
console.log("ashu"-6)  //NaN
console.log("55"+undefined) //55undefined

console.log(49+undefined)  //NaN
console.log(isNaN(49+undefined))  //true  //inbuilt method
console.log(isNaN(49+16))  //false

//converting string to number:
str=Number("35")
console.log(typeof(str))     //o/p:number

//converting number to a string:
num=65
number=String(65)
console.log(typeof(number))   //o/p:string

//other types to know:
str="12.80"
num=parseInt("12.80")
console.log(num)      //12
num=parseFloat("12.8975")
console.log(num)         //12.8975

//consider big integers:
console.log(2**53)   //9007199254740992 //above this number is called big integer

num1=900719998765525467389740993
num2=5
total=num1+num2
console.log(total)    //9.007199987655255e+26 //which is not an expected result

num1=900719998765525467389740993n
num2=5n
total=num1+num2
console.log(total)   //900719998765525467389740998n  //is the correct value(n will be ignored)

//Inbuilt Math functions:
 
max=Math.max()
max=Math.max(45,89,56,34,12,6)
console.log(max)               //89

min=Math.min()
min=Math.min(45,89,56,34,12,6)
console.log(min)               //6

//ceil :upper integer:
a=Math.ceil(56.6)
console.log(a)    //57
a=Math.ceil(78.2)
console.log(a)    //79

//floor :lowest integer:
b=Math.floor(68.9)
console.log(b)    //68
b=Math.floor(14.3)
console.log(b)   //14

//Math.pow() :
c=Math.pow(2,4)
console.log(c)   //16 //2 to the power of 4

//Math.trunc(): returns integer part of x (new in ES6)
console.log(Math.trunc(45.89))  //45
console.log(Math.trunc(0.56))   //0

x=Math.sqrt(49)
console.log(x)    //7

y=Math.random()  //this will generate a random diff number evertime we execute b/w 0 to 1
console.log(y)   //0.23234115963947177 //0.0639884068809653  etc.













