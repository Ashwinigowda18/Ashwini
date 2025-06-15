// Operators:
// +
// -
// /
// *
// %
// ++
// --
// ==
// ===
// <
// >
// >=
// <=
// &&
// ||
// !

// 1.Arithmetic operators:
// +
// -
// /
// *
// % //modulus
// ++ //increment
// -- //decrement

// console.log(8+9)  //17 //addition
// console.log("Ashu"+"baby")  //Ashubaby //concatination
// console.log("Ashu"+" "+"baby")  //Ashu baby
// console.log(18+"Ashu") //18Ashu //string //number is converted to string
// console.log(18+"04") //1804 //string
// console.log(2+3+5+"4"+4+2) //10442 //string  //Coersion in JS

// console.log(34-20)  //14
// console.log(20/10)  //2
// console.log(4*4)    //16
// console.log(14%3)   //2 //this gives the remainder
// console.log(16%2)   //0
// console.log(40-"20")  //20 //here string is converted to number //Coersion 
// console.log(40*"20")  //800
// console.log(40/"20")  //2
// console.log(24-"berry")  //NaN (Not a Number)

// x=20
// x++
// console.log(x) //21 // x=x+1

// y=40
// y--
// y--
// console.log(y)  //38 //y=y-2

//2.Logical operators:
//AND(&&):
// x        y       result 
// true    false     false
// false   true      false
// false   false     false
// true    true       true

// console.log(false&&false) //o/p: false
// console.log(true&&false)  //o/p: false
// console.log(true&&false)  //o/p: false
// console.log(true&&true)  //o/p: true

// example: 
// console.log(true&&"Ashu") //Ashu
// console.log(false&&"Ashu") //false
//console.log((5>3)&&(8<6)) //false
//console.log((9>8)&&(6<8))  //true

// OR(||):
// x        y       result 
// true    false     true
// false   true      true
// false   false     false
// true    true       true

// console.log(false||false) //o/p: false
// console.log(true||false)  //o/p: true
// console.log(true||false)  //o/p: true
// console.log(true||true)  //o/p: true
// console.log((5>3)&&(8<9)) //o/p: true

//NOT(!)
// console.log(!(true))  //false
// console.log(!(false))  //true

//3.Comparision operators:
// ==
// ===
// < 
// > 
// >= 
// <=

// console.log("Girl"=="Girl") //o/p: true //comparision is done 
// console.log("Girl"=="Boy") //o/p: false
// console.log("Girl"==="Girl") //o/p: true 
// console.log("Girl"==="Boy") //o/p: false

//Difference b/w == and === :
// console.log(10=="10") //true, string is converted to number //just compare only values not datatypes
// console.log(10==="10") //false //compare both values and datatypes

// //JavaScript is a case-sensitive language:
// console.log("A"=="a") //false
//console.log("Girl"=="girl") //false

// console.log(5>4)  //true
// console.log(5>=5) //true
// console.log(5>5)  //false
// console.log(5<4)  //false

//4.Assignment operators(=):
//Here = is used to assignment of the value

// a=10
// a+=6
// console.log(a)  //o/p:16 //a=a+6

// a=20
// a-=6
// console.log(a)  //14 //a=a-6

// a=4
// a*=4
// console.log(a)  //16 //a=a*4

// a=15
// a/=5
// console.log(a)  //3  //a=a/5

// a=15
// a%=5
// console.log(a)  //0  //remainder

// a=2
// b=5
// console.log(a**b)  //32

//5.Conditional operator/Ternary operator:
value1="pink"
value2="blue"
m=5=="5"? value1:value2
console.log(m)  //o/p:pink
m=5==="5"? value1:value2
console.log(m)  //o/p:blue















