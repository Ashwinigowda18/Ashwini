// var x //declaration
// var x = 10 //declaration and assignment
// console.log(x)

// var stuname="Ashu" //string
// console.log(stuname)
// stuname= "Bablu"
// console.log(stuname)
// //same variable stuname can be declared again
// stuname="baby"


// var employee="A"
// console.log(employee)
// //variables can be declared many times as required
// console.log(8*8) //8^2

// console.log(2**5)

// str="     apple     "
// console.log(str)
// console.log(str.trim()) //trims both the sides
// console.log(str.trimStart()) //trims the starting space
// console.log(str.trimEnd()) //trims the ending space

// if (4 > 3) {
//     var flower = "rose"
//     console.log(flower)     //possible to access in the block
// }

// if (4 > 3) {
//     var flower = "rose"      //possible to access outside the block also
// }
// console.log(flower)

// if (4 > 3) {
//     let flower = "rose"
//     flower="jasmine"        //re-assign of diff value can be done
//     console.log(flower)     //possible to access in the block
// }


// if (4 > 3) {
//     let flower = "rose"      // not possible to access outside the block 

// }
// console.log(flower)

// if (4 > 3) {
//     const flower = "rose"
//     console.log(flower)     //possible to access in the block
// }                           //not possible to re-assign diff value


// if (4 > 3) {
//     const flower = "rose"      // not possible to access outside the block 
// }                             //also not possible to re-declare const variable
// console.log(flower)

// if (4 > 3) {
//     let flower = "rose"
//     console.log(flower)       //let is accessible within the sub blocks also
//     if (5 > 6) {
//         console.log(flower)
//     }
// }

// if (4 > 3) {
//     let flower = "rose"
//     console.log(flower)       //let is accessible within the sub blocks also
//     if (5 > 6) {
//     }
//     console.log(flower)
// }

if (4 > 3) {
    let flower = "rose"
    console.log(flower)       //let is not accessible outside the block
    if (5 > 6) {
    }
}
console.log(flower)
// same is applicable for const also
