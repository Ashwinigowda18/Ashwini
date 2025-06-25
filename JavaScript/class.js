class className{
    //variables
    //methods
}

class calculator{

    x=20
    y=30
    add(num1,num2){
       console.log(num1+num2)
    }
    substract(num1,num2){
        console.log(num1-num2)

    }
     divide(num1,num2){
        console.log(num1/num2)
    }    
}
//executing the above wont give the output
//need to create object or instance of this class:
const cal1=new calculator() //now we can call any method or variable with this object

cal1.add(2,6)   //8
cal1.divide(9,2)  //4.5
console.log(cal1.x)   //20

const cal2=new calculator()
cal2.add(2,8)  //10


















