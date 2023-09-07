
// data types in js
// number
// string
// Boolean
// undefined
// null

// types of variables in js

// const
// let
// var

// const num1 = 10;
// num1 = 20
// console.log(num1,"this is constant varibale ")

// let num1  = 10;
// num1=20

// // const num1 = 10;
// console.log(num1,"this is local variable")

// var num1 =10;

// var num1=10;
// console.log(num1,"this is GLOBALE variable")

// const name = "shailesh";
// const age = 24;
// const address = "nagpur";
// const isage24 = true;
// console.log("my name is"+" " +name +"and age is"+" "+age+" I live in "+address );
// console.log(`my name is ${name} and age is ${age} I live in ${address}`);

// const myinfo = document.querySelector("#myinfo");
// myinfo.innerText = `my name is ${name} and age is ${age} I live in ${address}`
// myinfo.style.color = "red"

// operators in js
// arithmatic operator(+,-,*,/,%)
// const num1 = 10;
// const num2 = 20;

// const num3 = num1 + num2;
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);


// logical operator (&&, || , !);--------> true false
// && --> when both conditions are true ----> true
// || --> when both conditions are false ----> false
// ! --> true -> false , false ->true

// const name1 = "shailesh"
// const name2 = "vaibhav"

// const dummy = "xyz";  //----false
// const value = false;

// console.log(name1=="vaibhav" && name2=="shailesh"); -->fasle

// console.log(name1=="vaibhav" || name2=="shailesh");
// false               false---------------false
// console.log(name1=="shailesh" || name2=="rani");
// true                false   ---------------true
// console.log(!dummy);

// ternary operator
//  condition ? statement    :  statement

// const name1 = "shailesh"
// const name2 = "vaibhav"
// name1=="vaibhav" ? console.log("ha sahi hai") :console.log("galat hai");
// true              ?  executable                : not executable


// conditional operator --------> true false
// const num1 = 10;
// const num2 = 20;

// const num3 = "10"

// const value1 = true
// const value2 = "true"

// console.log(num1>num2)  //false
// console.log(num1<num2)  //true
// console.log(num1<=num2)  //true    (num1<num2 || num1==num2)
// console.log(num1>=num2)  //false    (num1>num2 || num1==num2)
// console.log(num1==num2)  //false
// console.log(num1!=num2)  //false
// console.log(num1===num2)  //false ---> it checks value and data types
// console.log(num1==num3)  //true ---> it checks value only
// console.log(num1===num3)  //false ---> it checks value and data types


// console.log(value1==value2)  //true ---> it checks value only
// console.log(value1===value2)  //false ---> it checks value and data types



// consditional statements
// if-else
// for loop
// foreach
// switch
// while loop
// do-while-loop

// const age = 58;
// if (age < 18) {
//     console.log("not less")
// } else if (age < 34) {
//     console.log("not less 1")
// } else if (age <= 58) {
//     console.log("not less 2")
// } else {
//     console.log("yes it is")
// }

// when we want to do iterations of work

// array  expressions
// for( let i=1; i<=100; i++){
//     console.log("loop" , i)
// }


// let i = 0;
// syntax
// while(condition){
//     statements
//     i++;
// }

// while(i<100){
//     console.log(i)
//     i++;
// }

// let i=0;
// do{
//     console.log(i)
//     i++;
// }while(i<=100)


// switch case
// let day = "tuesday";

// switch (day) {
//     case "monday":
//         console.log("today is monday")
//         break;
//     case "tuesday":
//         console.log("today is tuesday")
//         break;
//     case "wednesday":
//         console.log("today is wednesday")
//         break;
//     case "thursday":
//         console.log("today is thursday")
//         break;
//     case "friday":
//         console.log("today is friday")
//         break;
//     case "saturday":
//         console.log("today is saturday")
//         break;
//     case "sunday":
//         console.log("today is sunday")
//         break;
//     default:
//         console.log("today is holiday")
//         break;
// }

// string ////////////////////////////////////////////////////////////////// " "
// const name="shailesh gokhale";
// const age=24;
// console.log(typeof age)
// console.log(name[0]);
// console.log(name.length)

// for (let i = 0; i < name.length; i++) {   //i=i+1 0+1
//     console.log(name[i]);
// }

// let uppercaseName = name.toUpperCase()
// console.log(uppercaseName);
// console.log(uppercaseName.toLowerCase());
// console.log(name.charAt(0));
// console.log(name.slice(0,8))
// const newname = name.replace("gokhale","xyz")
// console.log(newname)

// const name1 = "shailesh"
// const name2 = "shailesh"
// console.log(name1===name2);

// function ///////////////////////////////////////
// normal function
// function calc(a,b) {            //paramter value
//     console.log(a + b)
//     console.log(a - b)
//     console.log(a * b)
//     console.log(a / b)
//     console.log(a % b)
//     console.log("------------------------------------")
// }

// calc(100,2000); //argument
// calc(10,2000); //argument
// calc(109,2000); //argument


// arrow function //////////////////////////////////////

// const calc = (a,b)=>{
//     console.log(a + b)
//     console.log(a - b)
//     console.log(a * b)
//     console.log(a / b)
//     console.log(a % b)
//     console.log("------------------------------------")
// }
// calc(100,2000); //argument
// calc(10,2000); //argument
// calc(109,2000); //argument

// first way 
// const isEven = (number)=>{
//     return number%2==0;
// }


// second way 
// const isEven = number=> number%2==0;
// console.log(isEven(2))
// console.log(isEven(7))

// const calc =function(a,b){
//     console.log(a + b)
//     console.log(a - b)
//     console.log(a * b)
//     console.log(a / b)
//     console.log(a % b)
//     console.log("------------------------------------")
// }
// calc(100,2000); //argument
// calc(10,2000); //argument
// calc(109,2000); //argument

let isNegative = num => num<0;
// console.log(isNegative(-1));
xyz();  

function xyz() {
    function abc() {
        console.log("this is abc")
    }
    console.log("this is xyz")
    abc();
}

// let name = "shailesh";
// console.log(window.name)
var obj = {
    name:"shailesh"
}
console.log(window.obj)
