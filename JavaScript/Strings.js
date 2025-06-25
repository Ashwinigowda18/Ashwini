//strings
//length:
str="javascript"
console.log(str.length)  //o/p:10  //char count

console.log(str[4])      //o/p:s
//or this can also be written as:
console.log(str.charAt(4))    //o/p:s


str1="Happy"
str2="Morning"
//str3=str1.concat(str2)
//console.log(str3)    //o/p:HappyMorning //joining two strings
//or we can use: 
str3=str1+str2
console.log(str3)   //o/p:HappyMorning

//<button    id  ="xyz"  >  Login   <
str4 ="    Login    "
console.log(str4.trim())   //o/p: Login
console.log(str4.length)   //o/p: 13  //including spaces
console.log(str4.trim().length) //o/p:5  //wide spaces are removed

//trimStart()
//trimEnd()

str5="fgjgdsiysggfucgkjugu"
str6=str5.toUpperCase()
console.log(str6)   //o/p:FGJGDSIYSGGFUCGKJUGU

str7="fgjgdsiysggfucgkjuguHTRFG"
str8=str7.toUpperCase()
console.log(str8)       //FGJGDSIYSGGFUCGKJUGUHTRFG

str8="FGJGDSIYSGGFUCGKJUGUHTRFG"
str9=str8.toLowerCase()
console.log(str9)      //fgjgdsiysggfucgkjuguhtrfg

//substring from a string:
str10="javascript"
str11=str10.substr(4)
console.log(str11)      //script
str11=str10.substr(0,4)
console.log(str11)      //java

//multi line string:
str="Ashu\ngowda"
console.log(str)   
//o/p:
// Ashu
// gowda

str="Ashu\tgowda"
console.log(str)   //Ashu    gowda

str="Ashu"+"gowda"
console.log(str)     //Ashugowda

str="Ashu"+ " gowda"
console.log(str)     //Ashu gowda

//includes:
st="javascript"
st.includes("scri")
console.log(st.includes("scri"))  //o/p:true
st.includes("python")
console.log(st.includes("python"))  //o/p:false

//template literals:
st1="Bengaluru"
st2=`Capital city of KA is-${st1}`
console.log(st2)           //Capital city of KA is-Bengaluru
//note: have to give back ticks only ``
//consider:
st1="Bengaluru"
st2="Capital city of KA is-${st1}"
console.log(st2)  //Capital city of KA is-${st1} //is not correct

//example2:
st3="Mango"
st4="fruit"
st5=`My favorite ${st4} in summer is ${st3}`
console.log(st5)       //My favorite fruit in summer is Mango

//strings are immutable:
str="crikket"
str[3]="c"
console.log(str)  //crikket  //no change

//other examples to know:
price1="₹69,999"
price2="₹79,999"
//to remove ₹ and , symbols and converting 69999 and 79999 strings into number:
price1=Number("₹69,999".replace("₹","").replace(",",""))
price2=Number("₹79,999".replace("₹","").replace(",",""))
price = price1+price2
console.log(price)            //o/p:149998 //which is a number




















