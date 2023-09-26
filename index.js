
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

// let isNegative = num => num<0;
// console.log(isNegative(-1));
// xyz();

// function xyz() {
//     function abc() {
//         console.log("this is abc")
//     }
//     console.log("this is xyz")
//     abc();
// }

// let name = "shailesh";
// console.log(window.name)
// var obj = {
//     name:"shailesh"
// }
// console.log(window.obj)

// callback function ////////////////////////////////////////////////

// function test1(callback){
//     console.log("test1");
//     callback();
// }

// function myname(){
//     console.log("vaibhav");
// }
// test1(myname)


// array /////////////////////////////////////////////////////////////
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = ["vaibhav", "vinay", "jay", "raju", "bunty"];
// const arr3 = [true, false, 12345, "vaibhav", { name: "shailesh", age: 24 }];
// console.log(arr[0])
// const newarr = [...arr];
// console.log(newarr)

// second way of cloning
// let newarr =arr.slice(0);
// console.log(users2);

// second way of cloning

// let newarr = [].concat(arr);
// console.log(newarr);

// const newarr = [...arr1, ...arr2, ...arr3, "shailesh", "arno"];
// console.log(newarr);

// console.log(newarr[newarr.length-1])
// for (let i = 0; i < newarr.length; i++) {
//     // console.log(newarr[i])
//     if (newarr[i] === "shailesh") {
//         console.log(newarr[i]);
//     }
// }

// const result = newarr.includes("xyz");
// console.log(result);
// if(result){
//     console.log("present")
// }else{
//     console.log("not present");
// }

// const arr = ["shailesh","vaibhav","swapnil","xyz","abc","mno"];
// skip dataon index2
// const [name1, ,name2,name3] = arr

// const [name1,name2,name3,...otherdata] = arr;
// console.log(name1);
// console.log(name2);
// console.log(name3);
// console.log(otherdata);


// const newarr = [...arr1, ...arr2, ...arr3, "shailesh", "arno"];
// newarr.push("shweta");
// newarr.unshift("xyz");
// newarr.shift("xyz");
// const poppedElement = newarr.pop();
// // slicedElement = newarr.slice(0,6);
// // console.log(slicedElement)
// newarr.splice(newarr.length-2,2,["vaibhav","abc","mno",1000,200]);
// console.log(newarr);

// forIn loop ////////////////////////////////////////////////////
// for(let index in newarr){
//     console.log(newarr[index]);
// }

// for of loop////////////////////////////////////////////////////
// for(let item of newarr){
//     console.log(item);
// }

// function iterate(value){
//     console.log(value);
// }
// const iterate=(value)=>{
//     console.log(value);
// }
// newarr.forEach(iterate);

// newarr.forEach((item,index)=>console.log(item,index));

// Object//////////////////////////////////////////////////////////////

// const user = {
//     "name":"shailesh",
//     age:24,
//     address:"nagpur"
// }

// console.log(`My name is ${user.name} and age is ${user.age}, I live in ${user.address}`);

// first way to add data in object
// const newuser = {};
// newuser.name = "vaibhav";
// newuser.age = 24;
// newuser.address = "nagpur";
// console.log(newuser);

// second way to add data in object
// const newuser = {};
// newuser["4g signal"] = "yes";
// newuser["name"] = "swapnil";
// newuser["age"] = 24;
// newuser["living address"] = "amravati";
// console.log(newuser["4g signal"]);

// Object methods /////////////////////////////
// const newUserKeys = Object.keys(newuser);
// console.log(newUserKeys);

// for (const item of newUserKeys) {
//     console.log(newuser[item]);
// }

// const values = Object.values(newuser)
// console.log(values);

// const userList = [
//     {
//         "name": "shailesh",
//         age: 24,
//         address: "nagpur"
//     },
//     {
//         "name": "vaibhav",
//         age: 24,
//         address: "nagpur"
//     },
//     {
//         "name": "sanyukta",
//         age: 24,
//         address: "nagpur"
//     },
//     {
//         "name": "swapnil",
//         age: 24,
//         address: "nagpur"
//     },
//     {
//         "name": "harsh",
//         age: 24,
//         address: "nagpur"
//     },
// ]

// console.log(userList)

// for(let i=0;i<userList.length;i++){
//     console.log(userList[i].name);
//     console.log(userList[i].age);
// }


// spread operator using in object ///////////////////////////////
// let obj = {
//     "name": "harsh",
//     age: 24,
//     address: "nagpur"
// }

// const newobj = {...obj};
// newobj.name = "vaibhav"
// console.log(obj)
// console.log(newobj)

// object distructuring  ///////////////////////////////
// let obj = {
//     "name": "harsh",
//     age: 24,
//     address: "nagpur",
//     adhar:"982173 2398 2323",
//     phone:"98217323982323",
//     DOB:new Date(),
// }

// const { name, age, address,...props } = obj;
// console.log(props);

// for in loop in object //////////////////////////////////////////////

// let obj = {
//     "name": "harsh",
//     age: 24,
//     address: "nagpur",
//     adhar: "982173 2398 2323",
//     phone: "98217323982323",
//     DOB: new Date(),
// }


// for(let keys in obj){
//     console.log(keys +" : "+obj[keys]);
// }
// for(let keys in Object.keys(obj)){
//     // console.log(keys +" : "+obj[keys]);
//     console.log(Object.keys(obj)[keys] +" "+ obj[Object.keys(obj)[keys]]);
// }

// const keysarr = Object.keys(obj);
// // console.log(keysarr)
// for (let i in keysarr) {
//     console.log(`${keysarr[i]} : ${obj[keysarr[i]]}`);
// }

// const key1 = "name";
// const key2 = "email"
// const key3 = "password"

// const value1 = "shailesh"
// const value2 = "email@email.com"
// const value3 = "123"

// const obj = {
//     [key1]:value1,
//     [key2]:value2,
//     [key3]:value3
// };
// console.log(obj)

// let obj = {};
// obj[key1] = value1
// obj[key2] = value2
// obj[key3] = value3
// console.log(obj);

// const userList = [
//     {
//         "name": "shailesh",
//         age: 24,
//         address: "nagpur"
//     },
//     {
//         "name": "vaibhav",
//         age: 24,
//         address: "wardha"
//     },
//     {
//         "name": "sanyukta",
//         age: 24,
//         address: "wardha"
//     },
//     {
//         "name": "swapnil",
//         age: 24,
//         address: "nagpur"
//     },
//     {
//         "name": "harsh",
//         age: 24,
//         address: "nagpur"
//     },
// ]

// for each method is use for iterate like for loop
// it doesn't return new array
// userList.forEach((user)=>{
//     if(user.name=="swapnil"){
//         console.log("he is gentaleman");
//     }
// });


// map method ///////////////////////////////////////////////////////////////////////////
// it return new array
// let newuserlist = userList.map((user)=>{
// //    user.age = 25
//     if(user.name=="swapnil"){
//         user.name = "tejas"
//     }
//    return user;
// })
// console.log(newuserlist)

// filter method /////////////////////////////////////////////////////////////////////////
// it returns filter data in the sense of string, object, anything
// const filteredusers = userList.filter((user)=>user.address=="wardha");
// console.log(filteredusers,"filteredusers");

// let products = [
//     {price:"200000",name:"watch",brand:"hublot"},
//     {price:"2000",name:"nirma",brand:"Rin"},
//     {price:"150",name:"shoes",brand:"rebook"},
//     {price:"100000",name:"rapido",brand:"skoda"},
//     {price:"15000",name:"slipper",brand:"BMW"},
// ]

// const pricegreater2000 = products.filter((product)=>product.price>2000);
// console.log(pricegreater2000);


// methods in object ///////////////////////////////////////////////////////////////////////////

// const user = {
//     name: "shailesh",
//     age:12,
//     address: "nagpur",
//     hobbies: ["cricket", "jjjj"],
//     userinfo: function () {
//         console.log(`my name is ${this.name} and my age is ${this.age} I live in ${this.address} my hobbies are ${this.hobbies}`);
//     },
//     isage18: function () {
//         return this.age > 18;
//     },
//     isfromNagpur: function () {
//         return this.address === "nagpur";
//     }
// }

// user.userinfo();
// const checkage = user.isage18();
// console.log(checkage);
// console.log(user.isfromNagpur());

// compressing and saprating  code

// const usermethods = {
//     userinfo() {
//         console.log(`my name is ${this.name} and my age is ${this.age} I live in ${this.address} my hobbies are ${this.hobbies}`);
//     },
//     isage18() {
//         return this.age > 18;
//     },
//     isfromNagpur() {
//         return this.address === "nagpur";
//     }
// }

// const user = {
//     name: "shailesh",
//     age: 12,
//     address: "nagpur",
//     hobbies: ["cricket", "jjjj"],
//     userinfo: usermethods.userinfo,
//     is18: usermethods.isage18,
// }

// user.userinfo();
// console.log(user.is18());


// creating multiple user //////////////////////////////////////////////////
// const usermethods = {
//     userinfo() {
//         console.log(`my name is ${this.name} and my age is ${this.age} I live in ${this.address} my hobbies are ${this.hobbies}`);
//     },
//     isage18() {
//         return this.age > 18;
//     },
//     isfromNagpur() {
//         return this.address === "nagpur";
//     }
// }

// function createUser(name, age, address, hobbies) {
//     let user = {};
//     user.name = name;
//     user.age = age;
//     user.address = address;
//     user.hobbies = hobbies;
//     user.is18 = usermethods.isage18;
//     user.userinfo = usermethods.userinfo;
//     return user;
// }

// const user1 = createUser("shailesh", 24, "nagpur", ["abc", "xyz"]);
// const user2 = createUser("vaibhav", 24, "nagpur", ["abc", "xyz"]);
// const user3 = createUser("swapnil", 24, "nagpur", ["abc", "xyz"]);
// const user4 = createUser("sayukta", 24, "nagpur", ["abc", "xyz"]);
// const user5 = createUser("janvi", 24, "nagpur", ["abc", "xyz"]);
// const user6 = createUser("arno", 24, "nagpur", ["abc", "xyz"]);


// let obj={};

// let obj2 = {
//     key1:"value1",
//     key2:"value2"
// }

// obj = Object.create(obj2)
// obj.name = "shailesh";
// console.log(obj);




// __Proto__/////////////////////////////////////////////////////////////////////////////
// const usermethods = {
//     userinfo() {
//         console.log(`my name is ${this.name} and my age is ${this.age} I live in ${this.address} my hobbies are ${this.hobbies}`);
//     },
//     isage18() {
//         return this.age > 18;
//     },
//     isfromNagpur() {
//         return this.address === "nagpur";
//     }
// }

// function createUser(name, age, address, hobbies) {
//     let user = Object.create(usermethods);
//     user.name = name;
//     user.age = age;
//     user.address = address;
//     user.hobbies = hobbies;
//     user.isage18 = usermethods.isage18;
//     return user;
// }

// const user1 = createUser("shailesh", 24, "nagpur", ["abc", "xyz"]);

// prototype ///////////////////////////////////////////////////////////////////////////////////////////
// function has its own free space ////////////////////////////////////////////////////////////////////
// in js everything is object /////////////////////////////////////////////////////////////////////////
// function has prototype which is object

// function createUser(name, age, address, hobbies) {
//     let user = Object.create(createUser.prototype);
//     user.name = name;
//     user.age = age;
//     user.address = address;
//     user.hobbies = hobbies;
//     return user;
// }

// createUser.prototype.userinfo = function () {
//     console.log(`my name is ${this.name} and my age is ${this.age} I live in ${this.address} my hobbies are ${this.hobbies}`);
// }
// createUser.prototype.isage18 = function () {
//     console.log(`my name is ${this.name} and my age is ${this.age} I live in ${this.address} my hobbies are ${this.hobbies}`);
// }
// createUser.prototype.isfromNagpur = function () {
//     console.log(`my name is ${this.name} and my age is ${this.age} I live in ${this.address} my hobbies are ${this.hobbies}`);
// }
// const user1 = createUser("shailesh", 24, "nagpur", ["abc", "xyz"]);
// user1.userinfo();


// new keyword /////////////////////////////////////////////////
// provide this = {};
// new return itself with this{} object

// function createUser(name, age, address, hobbies) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.hobbies = hobbies;
// }

// createUser.prototype.userinfo = function () {
//     console.log(`my name is ${this.name} and my age is ${this.age} I live in ${this.address} my hobbies are ${this.hobbies}`);
// }
// createUser.prototype.isage18 = function () {
//     console.log(`my name is ${this.name} and my age is ${this.age} I live in ${this.address} my hobbies are ${this.hobbies}`);
// }
// createUser.prototype.isfromNagpur = function () {
//     console.log(`my name is ${this.name} and my age is ${this.age} I live in ${this.address} my hobbies are ${this.hobbies}`);
// }


// const user1 = new createUser("shailesh", 24, "nagpur", ["abc", "xyz"]);
// console.log(user1);

// user1.isage18();

// const newarr = [1,2,3,4,5,6];
// console.log(typeof newarr);
// const arr = new Array(1,2,4,5,6,7);
// console.log(arr);
// console.log(Array.isArray(arr));

// oops concept //////////////////////////////////////////////////////////////////////////////////
// class 
// object 
// encapsulation ---- binding the data and functions together
// inheritance

// class data members and member function , constructor , super();
// constructor ------ special member function , which initialize the object

// class CreateUser {
//     constructor(name, age, address, hobbies) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//         this.hobbies = hobbies;
//     }

//     userinfo = function () {
//         console.log(`my name is ${this.name} and my age is ${this.age} I live in ${this.address} my hobbies are ${this.hobbies}`);
//     }
//     isage18 = function () {
//         console.log(`my name is ${this.name} and my age is ${this.age} I live in ${this.address} my hobbies are ${this.hobbies}`);
//     }
//     isfromNagpur = function () {
//         console.log(`my name is ${this.name} and my age is ${this.age} I live in ${this.address} my hobbies are ${this.hobbies}`);
//     }
// }

// const user1 = new CreateUser("shailesh", 24, "nagpur", ["xyz", "abc"]);
// user1.userinfo();

