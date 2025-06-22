// car={
//     model:"2025",
//     make:"Nissan",
//     number:"75215787",
//     colour:"Black"
// }

// console.log(car.number)  //o/p:75215787
// console.log(car[`colour`])  //o/p: Black // is equivalent to car.colour

// car[`colour`]="Grey"
// console.log(car[`colour`]) //Grey  //updating the property values
// console.log(car.ownername) //undefined

// car[`ownername`]="Ashwini"
// console.log(car.ownername) //Ashwini  //Adding new property

// //to delete any property from the object:
// delete car[`make`]
// console.log(car.make)  //undefined //make is deleted

// //Another example:
// user={
//     firstname:"Ashwini",
//     lastname:"N",
//     place:"Blr"

// }
// delete user[`place`]  //to delete 


// menuitems={

//     menu1:"Admin",
//     menu2:"PIM",
//     menu3:"Leave"
//}
//for in
// for(let item in menuitems){
//     console.log("loop starts")
//     console.log(menuitems[item])
//      console.log("loop ends")
// }
// o/p:
// Admin
// loop ends
// loop starts
// PIM
// loop ends
// loop starts
// Leave
// loop ends

menuitems={

    menu1:"Admin",
    menu2:"PIM",
    menu3:"Leave"
}

for(let item in menuitems){
    console.log("loop starts")
    console.log(item)
     console.log("loop ends")
}
// o/p:
// loop starts
// menu1
// loop ends
// loop starts
// menu2
// loop ends
// loop starts
// menu3
// loop ends

//data driven testing:
//consider 3 job titles:

// CEO1
// CFO1
// COO1  

//consider:
// str1="pink"
// str2="purple"
// //str3="pink and purple are colours" //here we want to assign str1 and str2 to str3
// str3=`${str1} and ${str2} are colours`
// console.log(str3)        //o/p: pink and purple are colours













