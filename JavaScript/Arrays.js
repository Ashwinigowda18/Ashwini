// arr=[]  //empty array
// arr1=[2,4,5,6,7,8,9]
// console.log(arr1.length)  //o/p:7

// //index always starts from 0
// //first element=0 index
// //last element= length-1

// console.log(arr1[0])  //o/p:2
// arr1=["pencil",4,5,6,7,"paper",9]
// console.log(arr1[0])  //o/p:pencil
// console.log(arr1[5])  //o/p:paper

// creds=["Admin","admin123"]
// console.log(creds[0])  //Admin
// console.log(creds[1])  //admin123

// console.log(typeof(arr1)) //object
// console.log(typeof(arr[0])) //undefined
// console.log(typeof(arr1[0])) //string

// //sorting a array:

// //ascending order:
//arr2=[9,3,5,2,7,4]
// arr3=arr2.sort()  
// console.log(arr3)  //o/p:[ 2, 3, 4, 5, 7, 9 ]
//console.log(arr2.length)  //o/p:6 //length of an array
// arr4=["ashu","ammu","bablu","mom","dad"]
// arr5=arr4.sort()
// console.log(arr5)  //o/p:[ 'ammu', 'ashu', 'bablu', 'dad', 'mom' ]

// arr6=["ashu","ammu","bablu","Mom","dad"]
// arr7=arr6.sort()
// console.log(arr7)  //o/p:[ 'Mom', 'ammu', 'ashu', 'bablu', 'dad' ]

// arr8=["ashu","ammu","Bablu","Mom","dad"]
// arr9=arr8.sort()
// console.log(arr9)   //o/p:[ 'Bablu', 'Mom', 'ammu', 'ashu', 'dad' ]

// //reverse order:
// arr10=["ashu","ammu","Bablu","Mom","dad"]
// arr11=arr10.reverse()
// console.log(arr11)   //o/p:[ 'dad', 'Mom', 'Bablu', 'ammu', 'ashu' ]

// //descending order:
// arrx =[9,3,5,2,7,4]
// arry=arrx.sort((a,b)=>b-a)
// console.log(arry)     //o/p:[ 9, 7, 5, 4, 3, 2 ]

// //converting the elements of an array to a string:
// arr12=["ashu","ammu","bablu","mom","dad"]
// str=arr12.join("")
// console.log(str)    //o/p:ashuammubablumomdad

// str=arr12.join(" ")
// console.log(str)    //o/p:ashu ammu bablu mom dad

// //converting string to array:
// str="javascript"
// arr13=str.split("")
// console.log(arr13) 
//output:
// 'j', 'a', 'v', 'a',
//   's', 'c', 'r', 'i',
//   'p', 't'

// str="javascript class"
// arr14=str.split("")
// console.log(arr14) 
// //output:               //space is also considered as an element
// // 'j', 'a', 'v', 'a',
// //   's', 'c', 'r', 'i',
// //   'p', 't', ' ', 'c',
// //   'l', 'a', 's', 's'

// str="this is javascript class"  //to convert each word into an array
// arr15=str.split(" ")
// console.log(arr15)         //o/p:[ 'this', 'is', 'javascript', 'class' ]

// str="this is javascript class"  
// arr16=str.split("j")
// console.log(arr16)         //o/p:[ 'this is ', 'avascript class' ]

// //reversing the string:
// str1="Laptop"
// revstr=str1.split("").reverse().join("")
// console.log(revstr)        //o/p:potpaL

// //length of the string:
// str2="Laptop"
// revstr=str2.split("").reverse().length
// console.log(revstr)        //o/p:6

//push,shift,unshift,pop

//push:
// //adding one more element to the same array(at the end of an array)
// arr=["pink","purple"]
// arr.push("white")
// console.log(arr)   //o/p:[ 'pink', 'purple', 'white' ]

// //unshift:
// //add the element at the beginning of an array
// arr1=["pink","purple"]
// arr1.unshift("white")
// console.log(arr1)   //o/p:[ 'white', 'pink', 'purple' ]

// //pop:
// //remove the element at the end of an array
// arr2=["pink","purple","yellow","green"]
// arr2.pop()
// console.log(arr2)   //o/p:[ 'pink', 'purple', 'yellow' ]

//to remove all the elements or when there are more number of elements
//arr3=["pink","purple","yellow","green","black","orange","blue"]
// while (arr3.length > 0) {
//     arr3.pop()
//     console.log(arr3)
// }                             //o/p:[]

//or we can execute this way also:
// let i=0

// while (i<arr3.length) {
//     arr3.pop()
//     console.log(arr3)  
// }

//shift:
//remove the element from the beginning of an array
// arr2=["pink","purple","yellow","green"]
// arr2.shift()
// console.log(arr2)   //o/p:[ 'purple', 'yellow', 'green' ]
// arr2.pop()
// console.log(arr2)   //o/p:[ 'purple', 'yellow' ]

//to replace the element in an array:
// arr=["pink","purple","yellow","green"]
// arr[2]="red"
// console.log(arr)     //o/p:[ 'pink', 'purple', 'red', 'green' ]

//includes() gives true or false 
//case1:
// arr=["pink","purple","yellow","green"]
// if(arr.includes("purple")){
//     console.log("element is present")
// }
// else{
//     console.log("element is not present")     //o/p:element is present
// }

//case2:
// arr=["pink","purple","yellow","green"]
// if(arr.includes("blue")){
//     console.log("element is present")
// }
// else{
//     console.log("element is not present")     //o/p:element is not present
// }

//indexOf()
// arr=["pink","purple","yellow","green"]
// arr.indexOf("green")
// console.log(arr.indexOf("green"))   //o/p:3

//concat() joins two arrays and make an array
// arr7=["pink","purple","yellow","green"]
// arr8=["yellow","blue"]
// arr9=arr7.concat(arr8)
// console.log(arr9)      //o/p/:[ 'pink', 'purple', 'yellow', 'green', 'yellow', 'blue' ]

//slice():
// arr15=["pink","purple","yellow","green"]
// arr16=arr15.slice(0,2)
// console.log(arr16)        //o/p:[ 'pink', 'purple' ]

//forEach():
// arr=["sun","moon","star","comet","orbit"]
// arr.forEach(element=>{
//     console.log("loop starts")
//     console.log(element)
//     console.log("loop ends")
// })
//output:
// loop starts
// sun
// loop ends
// loop starts
// moon
// loop ends
// loop starts
// star
// loop ends
// loop starts
// comet
// loop ends
// loop starts
// orbit
// loop ends  
    
//for of():
// arr=["sun","moon","star","comet","orbit"]
// for(let element of arr){
//     console.log("loop starts")
//     console.log(element)
//     console.log("loop ends")
// }                                 //same output as above.Both are same

//some other examples to know:
str="Ashwini"
arr=str.split("")
console.log(arr)
// o/p:
// [
//   'A', 's', 'h',
//   'w', 'i', 'n',
//   'i'
// ]
arr1=str.split(" ")
console.log(arr1)        //o/p:[ 'Ashwini' ]

str2="Ashwini playwright"
arr2=str2.split("")
console.log(arr2)
// o/p:
// [
//   'A', 's', 'h', 'w', 'i',
//   'n', 'i', ' ', 'p', 'l',
//   'a', 'y', 'w', 'r', 'i',
//   'g', 'h', 't'
// ]
arr3=str2.split(" ")
console.log(arr3)     //o/p:[ 'Ashwini', 'playwright' ]
arr4=str2.split("p")
console.log(arr4)     //o/p:[ 'Ashwini ', 'laywright' ]

//to get descending sorted array:
arr=[2,7,5,9,4,6]
arr1=arr.sort().reverse()
console.log(arr1)          //o/p:[ 9, 7, 6, 5, 4, 2 ]


