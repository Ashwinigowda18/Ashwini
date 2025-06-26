// class className{
//     //variables
//     //methods
// }

// class calculator{

//     x=20
//     y=30
//     add(num1,num2){
//        console.log(num1+num2)
//     }
//     substract(num1,num2){
//         console.log(num1-num2)

//     }
//      divide(num1,num2){
//         console.log(num1/num2)
//     }    
// }
// //executing the above wont give the output
// //need to create object or instance of this class:
// const cal1=new calculator() //now we can call any method or variable with this object

// cal1.add(2,6)   //8
// cal1.divide(9,2)  //4.5
// console.log(cal1.x)   //20

// const cal2=new calculator()
// cal2.add(2,8)  //10

//example 2:
// class employee {
//     printMessage() {
//         console.log("This is a playwright")
//     }
//     login(username, password) {
//         console.log(username, password)

//     }
//     createEmployee() {
//         console.log("Create Employee logic here");  //click on log to the console

//     }
// }
// //object of this class is created outside this class
// const emp1=new employee()
// emp1.printMessage()              //o/p:This is a playwright

//for the same above, in the place of printMessage if we give constructor, calling method is not required:

// class employee {
//     constructor() {
//         console.log("This is a playwright")
//     }
//     login(username, password) {
//         console.log(username, password)

//     }
//     createEmployee() {
//         console.log("Create Employee logic here");  //click on log to the console

//     }
// }
// //object of this class is created outside this class
// const emp2=new employee()            //o/p:This is a playwright
// //if we create another object, for that also same constructor is executed
// const emp3=new employee() 

//scenario 2: replacing constructor-->printMessage & login-->constructor for the above:
// class employee {
//     printMessage() {
//         console.log("This is a playwright")
//     }
//     constructor(username, password) {
//         console.log(username, password)

//     }
//     createEmployee() {
//         console.log("Create Employee logic here");  //click on log to the console

//     }
// }
// const emp2=new employee("Ashu","N")            
// const emp3=new employee("Swathi","N") 

//o/p:
// Ashu N
// Swathi N

//scenario 3: //using "this" keyword for the above:
// class employee {
//     printMessage() {
//         console.log("This is a playwright")
//     }
//     constructor(username, password) {
//         console.log(username, password)

//     }
//     createEmployee() {
//         this.printMessage()
//         console.log("Create Employee logic here");

//     }
// }
// const emp1 = new employee("Ashu", "N")
// emp1.createEmployee()

//o/p:
// Ashu N
// This is a playwright
// Create Employee logic here

//scenario 4:
// class employee {
//     hello(){                 //method name
//         console.log("Morning")
//     }
//     printMessage() {
//         this.hello()
//         console.log("This is a playwright")
//     }
//     constructor(username, password) {
//         console.log(username, password)

//     }
//     createEmployee() {
//         this.printMessage()
//         console.log("Create Employee logic here");

//     }
// }
// const emp1 = new employee("Ashu", "N")
// emp1.createEmployee()

//o/p: all the lines are executed:
// Ashu N
// Morning
// This is a playwright
// Create Employee logic here

//this process is also for methods as well as variables also:
// class employee {
//     username = "Admin"
//     password = "admin123"

//     hello() {                   //method name
//         console.log("Morning")
//         console.log(this.password)
//     }
//     printMessage() {
//         this.hello()
//         console.log("This is a playwright")
//     }
//     constructor(username, password) {
//         console.log(username, password)

//     }
//     createEmployee() {
//         this.printMessage()
//         console.log("Create Employee logic here");

//     }
// }
// const emp1 = new employee("Ashu", "N")
// //emp1.createEmployee()
// emp1.hello()

//o/p:  //we are accessing variable of this particular class only
// Ashu N
// Morning
// admin123

//static variable:
class student {
    static x = "abc"
    static y = "def"
    static m1() {
        console.log("this method is M1")
    }

    static m2() {
        console.log("this method is M2")
    }

    static m3() {
        console.log("this method is M3")
    }

    static m4() {
        console.log("this method is M4")
    }
}
//now create object
// const stu1=new student()
// stu1.m1()
student.m1()       //o/p:this method is M1






