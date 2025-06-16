//condition is true:
// if(true){
// console.log("book")
// console.log("pen")    //o/p:book and pen
// }  

//condition is false:
// if(false){
// console.log("book")
// console.log("pen")    //no output
// }                           

//Here we can also use 'else' if required:
// if(false){
// console.log("book")
// console.log("pen")    
// }                           
// else{
//     console.log("pencil")  //o/p : pencil, here else can be used acc to our requirement
// }

//else if() condition:
// cond1-pass : task1, fails: cond2
// cond2-pass : task2, fails: cond3
// cond3-pass : task3, fails: cond4  continues...

//scenario 1:
// if(4>3){
//     console.log("happy")
// }
// else if("4"===4){
//     console.log("pretty")
// }
// else if(true){
//     console.log("cherry")   //o/p:happy
// }

//scenario 2:
// if(2>3){
//     console.log("happy")
// }
// else if("4"===4){
//     console.log("pretty")
// }
// else if(true){
//     console.log("cherry")   //o/p:cherry
// }

//scenario 3:
// if(2>3){
//     console.log("happy")
// }
// else if("4"==4){
//     console.log("pretty")
// }
// else if(true){
//     console.log("cherry")   //o/p:pretty
// }

//scenario 4:
// if(false){
//     console.log("happy")
// }
// else if("4"==4){
//     console.log("pretty")
// }
// else if(false){
//     console.log("cherry")   //o/p:pretty
// }

//scenario 5:
// if(false){
//     console.log("happy")
// }
// else if("4"===4){
//     console.log("pretty")
// }
// else if(false){
//     console.log("cherry")   //no output
// }

//scenario 6:
// if(false){
//     console.log("happy")
// }
// else if("4"===4){
//     console.log("pretty")
// }
// else if(false){
//     console.log("cherry")   
// }
// else{
//     console.log("All conditions are failed")  //o/p:All conditions are failed
// }

//switch condition:

//scenario 1:
// switch ("tester") {
//     case "developer": {
//         console.log("developer here")
//     }
//         break;

//     case "scrum master": {
//         console.log("scrum master here")
//     }
//         break;

//     case "product owner": {
//         console.log("product owner here")
//     }
//         break;

//     case "architect": {
//         console.log("architect here")
//     }
//         break;

//     default:{
//         console.log("no case matched")
//     }
//         break;

// }                                         //o/p:no case matched

//scenario 2:
// switch ("scrum master") {
//     case "developer": {
//         console.log("developer here")
//     }
//         break;

//     case "scrum master": {
//         console.log("scrum master here")
//     }
//         break;

//     case "product owner": {
//         console.log("product owner here")
//     }
//         break;

//     case "architect": {
//         console.log("architect here")
//     }
//         break;

//     default:{
//         console.log("no case matched")
//     }
//         break;                          //o/p:scrum master here

// }   

//scenario 3:
switch ("chromium") {


    case "chromium": {

        console.log("Chromium Browser")

    }

        break;

    case "Firefox": {

        console.log("Firefox browser")

    }

        break;
    case "webkit": {

        console.log("Webkit Browser here")

    }

        break;

    default: {

        console.log("No Browser matched")
    }
        break;            //o/p:Chromium Browser
}