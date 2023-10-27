
// data types in js
// number  23
// string   "shailesh"
// Boolean  true false
// undefined
// null

// types of variables in js

// const  ---constant type of variable
// let ---local type of variable
// var ---global type of variable

// const num1 = 10;
// num1 = 20
// console.log(num1,"this is constant varibale ")

// let num1  = 10;
// num1=20
// console.log(num1,"this is constant varibale ")

// var num1 =10;
// var num1=20;
// console.log(num1,"this is GLOBALE variable")

// const name = "shailesh";
// const age = 24;
// const address = "nagpur";
// const isage24 = true;
// console.log("my name is"+" " +name +"and age is "+" "+age+" I live in "+address );
// console.log(`my name is ${name} and age is ${age} I live in ${address}`);
// console.log(`my name is ${name} and age is ${age} I live in ${address}`)

// operators in js
// arithmatic operator(+,-,*,/,%)
// const num1 = 10;
// const num2 = 20;

// const num3 = num1 + num2;
// console.log(num3)
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

// console.log(name1=="vaibhav" && name2=="shailesh"); //-->fasle
// console.log(name1=="" && name2==""); //-->fasle

// console.log(name1=="vaibhav" || name2=="shailesh");
// false               false---------------false
// console.log(name1=="shailesh" || name2=="rani");
// true                false   ---------------true
// console.log(!dummy);
// console.log(!true);

// ternary operator
//  condition ? statement    :  statement

// const name1 = "shailesh"
// const name2 = "vaibhav"
// name1=="shailesh" ? console.log("ha sahi hai") :console.log("galat hai");
// true              ?  executable                : not executable


// conditional operator --------> true false
// const num1 = 10;
// const num2 = 20;
// const num1 = 10;
// const num2 = "10";

// const num3 = "10"

// const value1 = true
// const value2 = "true"

// console.log(num1>num2)  //false
// console.log(num1<num2)  //true
// console.log(num1<=num2)  //true    (num1<num2 || num1==num2)
// console.log(num1>=num2)  //false    (num1>num2 || num1==num2)
// console.log(num1==num2)  //false
// console.log(num1!==num2)  //true
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

// const age = 18;
// if(age<18){
//     console.log("age is less");
// }else if(age===18){
//     console.log("age is 18")
// }
// else{
//     console.log("age is greater")
// }
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

// 1+2+3+4+5+... 100; using while loop /
// let i = 0;
// syntax
// while(condition){
//     statements
//     i++;
// }

// let i =1;
// while(i<=100){
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

// string ////////////////////////////////////////////////////////////////// 
// const name="shailesh gokhale";
// const age=24;
// console.log(typeof age)   //number
// console.log(name[0]);
// console.log(name.length)  //16

// for (let i = 0; i < name.length; i++) {   //i=i+1 0+1
//     console.log(name[i]);
// }

// let uppercaseName = name.toUpperCase()
// console.log(uppercaseName);
// console.log(uppercaseName.toLowerCase());
// console.log(name.charAt(5));
// console.log(name.slice(0,5))
// const newname = name.replace("gokhale","xyz")
// console.log(newname)

// const name1 = "shailesh"
// const name2 = "shailesh"
// console.log(name1===name2);

// function ///////////////////////////////////////
// expressive function 
// arrow function 
// normal function

// function calc(a,b) {
//     console.log(a + b)
//     console.log(a - b)
//     console.log(a * b)
//     console.log(a / b)
//     console.log(a % b)
//     console.log("--------------------------------------------------------------")
// }

// calc(10,20);
// calc(200,300);
// calc(88,99);
// calc(35,87);

// arrow function //////////////////////////////////////

// const calc = (a, b) => {
//     console.log(a + b)
//     console.log(a - b)
//     console.log(a * b)
//     console.log(a / b)
//     console.log(a % b)
//     console.log("--------------------------------------------------------------")
// }
// calc(10,20);
// calc(200,300);
// calc(88,99);
// calc(35,87);

// const isNegative = (num)=>{
//     if(num<0){
//         console.log(true);
//     }else{
//         console.log(false)
//     }
// }

// isNegative(-5);
// const isNegative = num => num<0;
// console.log(isNegative(-5))

// const isEven = number=> number%2==0;
// console.log(isEven(2))
// console.log(isEven(7))

//expressive  function /////////////////////////////////////////////////////////////////////////
// const calc = function(a,b){
//     console.log(a+b)
//     console.log(a-b)
//     console.log(a*b)
//     console.log(a/b)
//     console.log(a%b)
// }
// calc(10,20);

// let isNegative = num => num<0;
// console.log(isNegative(-1));

// function xyz() {
//     console.log("this is xyz 1")
//     function abc() {
//         console.log("this is abc")
//     }
//     console.log("this is xyz")
//     abc();
// }

// xyz();

// function myfunction(){
//     console.log("this is callback");
// }

// function abc(callback){
//     callback();
// }

// // abc("shailesh",24,["abc","xyz"],{mm:"mm"})

// abc(myfunction)

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
// collection of different types of data //////////////////////////////////////////////////

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = ["vaibhav", "vinay", "jay", "raju", "bunty"];
// const newarr = arr1.concat(arr2);
// console.log(newarr);
// const arr3 = [true, false, 12345, "vaibhav", { name: "shailesh", age: 24 },["bbb","llls"]];
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)

// cloning ////////////////////////////////////////////////////////////////////////////////

// first way of cloning
// let newarr = arr1.slice(0);
// console.log(newarr);

// second way of cloning
// let newarr = [].concat(arr1);
// console.log(newarr);

// third way of cloning /////////////////////////////////////////////////////////////////////
// (...) using spread operator ////////////////////////////// 
// const newarr = [...arr1,4,5,6,"xyz",[...arr2]];
// console.log(newarr);

// const newarr = [...arr1, ...arr2, ...arr3, "shailesh", "arno"];
// console.log(newarr);

// console.log(arr2)
// const newarr = [...arr2];
// for (let i = 0; i < newarr.length; i++) {
//     if(newarr[i]=="raju"){
//         newarr[i]="rajendra";
//     }
// }
// console.log(newarr)

// const result = arr2.includes("xyz");
// console.log(result)
// if(result){
//     console.log("present")
// }else{
//     console.log("not present");
// }

// array distructuring///////////////////////////////////////////// 
// const arr = ["shailesh","vaibhav","swapnil","xyz","abc","mno"];
// // skip dataon index2
// const [name1,name2,name3,...otherdata] = arr;
// console.log(name1)
// console.log(name2)
// console.log(name3)
// console.log(otherdata)

// const [name1,name2,name3,...otherdata] = arr;
// console.log(name1);
// console.log(name2);
// console.log(name3);
// console.log(otherdata);

// const names = ["shailesh","vaibhav","swapnil","xyz","abc","mno"];
// names.push("shivani");
// names.unshift("sayukta");
// const poppedElement  = names.pop();
// names.shift();
// console.log(poppedElement)

// names.splice(index,counts,additems);
// names.splice(1,1,"sayukta","shivani");
// console.log(names)



// const names = ["shailesh","vaibhav","swapnil","xyz","abc","mno"];
// forIn loop ////////////////////////////////////////////////////
// for(let i in names){
//     console.log(names[i])
// }


// const names = ["shailesh","vaibhav","swapnil","xyz","abc","mno"];
// // for of loop////////////////////////////////////////////////////
// for(let name of names){
//     console.log(name);
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



// networth ///////////////////////////////////////////////////////////////////////////////////////////////
// let assets = [
//     { name: 'Equity', amount: 3500000, return: 0.11, weightage: 0.7 },
//     { name: 'Bonds', amount: 1000000, return: 0.06, weightage: 0.2 },
//     { name: 'Real Estate', amount: 0, return: 0.08, weightage: 0 },
//     { name: 'Alternatives', amount: 0, return: 0.1, weightage: 0 },
//     { name: 'Gold', amount: 0, return: 0.07, weightage: 0 },
//     { name: 'Cash', amount: 500000, return: 0.04, weightage: 0.1 }
// ]

// let totalAssetsAmt = 0;
// let totalwReturnAvg = 0;
// var totalLiabilities = 0;
// var initialNetworth = 0;
// assets.forEach((asset) => {
//     if (asset.amount != null && asset.amount > 0 && asset.amount != undefined) {
//         totalAssetsAmt = totalAssetsAmt + asset.amount;
//         totalwReturnAvg = totalwReturnAvg + (asset.return * asset.weightage);
//     }
// })

// // add weightage and weighted return of the asset when asset allocation choice is current portfolio based in Networth and add to the array
// var weight = 0;
// var wReturn = 0;

// assets.forEach((asset) => {
//     var assetreturn = asset.return;
//     if (asset.amount != null && asset.amount > 0 && asset.amount != undefined) {
//         weight = (asset.amount / totalAssetsAmt) * 100;
//         wReturn = weight * assetreturn;
//     } else {
//         weight;
//         wReturn;
//     }
//     asset["weight"] = weight;
//     asset["wReturn"] = wReturn;
// })

// initialNetworth = totalAssetsAmt - totalLiabilities;
// console.log(totalAssetsAmt)
// console.log(totalwReturnAvg)
// console.log(initialNetworth)
// console.log(assets);


//  loanworks/////////////////////////////////////////////////////////////////////////////////////////
// const liabilities = [
//     { loanName: 'Car Loan', emiAmt: 0, startYear: 2023, endYear: 2027, interest: 0.08, loanOutStandingBal: 0 },
//     { loanName: 'Home Loan', emiAmt: 98473.95579255935, startYear: 2024, endYear: 2039, interest: 0.085, loanOutStandingBal: 10000000 }
// ]

// console.log(liabilities)
// var loanDetails = []; // Declare a new array
// var totalYears = 0; // The total rows required for goalDetails range

// // use the loans input to calculate year wise loan repayments and outstanding balances and store them in a table
// let balanceMonthsInYear = 12 - new Date().getMonth(); //to ascertain how many more months loan is paid in current year
// let currentYear = new Date().getFullYear(); //get current year

// console.log(balanceMonthsInYear)
// console.log(currentYear)

// liabilities.forEach((row) => {
//     var loanYears = row.endYear - row.startYear + 1;
//     var loanOutstanding = row.loanOutStandingBal;
//     var emi = row.emiAmt;
//     var interestRate = row.interest;
//     console.log(loanOutstanding)
//     if (loanYears != "NULL" && loanYears > 0 && loanOutstanding > 0) {
//         for (var counter = 1; counter <= loanYears; counter = counter + 1) {
//             let loanPayments = emi * 12; // multiply by 12 for future years
//             let interest = loanOutstanding * interestRate;
//             let year = row.startYear + counter - 1; //there must be a better way to do this?

//             if (year == currentYear) {
//                 loanPayments = emi * balanceMonthsInYear;  // multiply by balance months for the current year
//                 interest = loanOutstanding * interestRate * (balanceMonthsInYear / 12);
//             } else {
//                 loanPayments;
//                 interest;
//             }

//             let principal = loanPayments - interest;

//             loanOutstanding = loanOutstanding - principal; //(- prepayments, to be done later)

//             //to account for final year of loan payments
//             if (loanOutstanding > 0) {
//                 loanPayments;
//             } else {
//                 loanPayments = loanOutstanding + (principal * (1 + interestRate)); //balance loan in last year is paid off and loan becomes 0
//                 loanOutstanding = 0;
//             }

//             let loanName = row.loanName + " " + counter;

//             // add all above data to a new object and add it to loanDetails row[0] is loanName, 1 is EMI / repayment, 5 is loan outstanding, 4 is interest interestRate
//             var newLoan = { loanName, year, emi, loanPayments, loanOutstanding, interestRate }
//             console.log(newLoan)
//             loanDetails.push(newLoan);
//             console.log(loanDetails)
//         }
//         totalYears += loanYears; // to calculate total no. of rows to write in the Loan Details sheet
//     }
// })

// goal works ////////////////////////////////////////////////////////////////////////////////////////


// let data = [
//     { goalName: 'Graduation', goalDesc: 'Y', goalStartYear: 2036, goalEndYear: 4, costPerYear: 1500000, inflation: 0.1 },
//     { goalName: 'Post Graduation', goalDesc: 'Y', goalStartYear: 2025, goalEndYear: '', costPerYear: '', inflation: 0.5 },
//     { goalName: 'Graduation', goalDesc: 'SW', goalStartYear: 2028, goalEndYear: '', costPerYear: '', inflation: 0.5 },
//     { goalName: 'Post Graduation', goalDesc: 'SW', goalStartYear: 2046, goalEndYear: '', costPerYear: '', inflation: 0.5 },
//     { goalName: 'Refurbishing', goalDesc: 'Self', goalStartYear: 2029, goalEndYear: '', costPerYear: '', inflation: 0.5 },
//     { goalName: 'Home', goalDesc: 'Self', goalStartYear: 2024, goalEndYear: 1, costPerYear: 5000000, inflation: 0.5 },
//     { goalName: 'Wedding', goalDesc: 'Y', goalStartYear: 2045, goalEndYear: 1, costPerYear: 2500000, inflation: 0.5 },
//     { goalName: 'Car', goalDesc: 'Self', goalStartYear: 2030, goalEndYear: 1, costPerYear: 3000000, inflation: 0.5 },
//     { goalName: 'Travel', goalDesc: 'Self', goalStartYear: 2030, goalEndYear: '', costPerYear: '', inflation: 0.5 }
// ]

// var goalDetails = []; // Declare a new array
// var totalYears = 0; // The total rows required for goalDetails range

// // calculate future cost of each goal per year in which money is required and insert in the array
// data.forEach((row) => {
//     var goalYears = row.goalEndYear;
//     // Conditional to ignore error when goalYears is empty
//     if (goalYears != "NULL" && goalYears > 0 && goalYears != undefined) {
//         for (var counter = 1; counter <= goalYears; counter = counter + 1) {
//             let goalCostNow = row.costPerYear; //current cost for the goal
//             let goalInflation = row.inflation; //inflation value for the goal
//             var endYear = row.goalStartYear + 1;
//             var startYear = endYear - 1; //there must be a better way to do this?
//             var exp = startYear - new Date().getFullYear(); //the power factor / exponent to calculate the future cost

//             console.log(goalCostNow,"goalCostNow")
//             console.log(goalInflation,"goalInflation")
//             console.log(exp,"exp")
//             var futureCost = Math.round(goalCostNow * (Math.pow(1 + goalInflation, exp)), 2);
//             var goalName = row.goalName + " " + counter;

//             console.log(futureCost,"futureCost")
//             console.log("------------------------------")

//             // add all above data to a new object and add it to goalDetails
//             var newGoal = {
//                 goalName: goalName,
//                 goalDesc: row.goalDesc,
//                 startYear: startYear,
//                 endYear: endYear,
//                 goalCostNow: goalCostNow,
//                 futureCost: futureCost
//             };
//             goalDetails.push(newGoal);
//         }
//         totalYears += goalYears;// to calculate total no. of rows to write in the Goal Details sheet
//     }
// })

// console.log(goalDetails)





































// all functions///////////////////////////////////////////////////////////////////////////////////////////]
// const networth = () => {
//     let assets = [
//         { name: 'Equity', amount: 3500000, return: 0.15, weightage: 0.50 },
//         { name: 'Bonds', amount: 3000000, return: 0.06, weightage: 0.42 },
//         { name: 'Real Estate', amount: 0, return: 0.08, weightage: 0 },
//         { name: 'Alternatives', amount: 0, return: 0.01, weightage: 0 },
//         { name: 'Gold', amount: 0, return: 0.07, weightage: 0 },
//         { name: 'Cash', amount: 500000, return: 0.04, weightage: 0.07 }
//     ]

//     let totalAssetsAmt = 0;
//     let totalwReturnAvg = 0;
//     var totalLiabilities = 0;
//     var initialNetworth = 0;
//     var assetAllocationChoice = "D"
//     assets.forEach((asset) => {
//         if (asset.amount != null && asset.amount > 0 && asset.amount != undefined) {
//             totalAssetsAmt = totalAssetsAmt + asset.amount;
//             totalwReturnAvg = totalwReturnAvg + (asset.return * asset.weightage);
//         }
//         console.log(totalwReturnAvg.toPrecision(16),"totalwReturnAvgtotalwReturnAvgtotalwReturnAvg")
//     })

//     // add weightage and weighted return of the asset when asset allocation choice is current portfolio based in Networth and add to the array
//     var weight = 0;
//     var wReturn = 0;

//     assets.forEach((asset) => {
//         var assetreturn = asset.return;
//         if (asset.amount != null && asset.amount > 0 && asset.amount != undefined) {
//             weight = (asset.amount / totalAssetsAmt) * 100;
//             wReturn = weight * assetreturn;
//         } else {
//             weight;
//             wReturn;
//         }
//         asset["weight"] = weight;
//         asset["wReturn"] = wReturn;
//     })

//     initialNetworth = totalAssetsAmt - totalLiabilities;
//     let obj = {
//         initialNetworth: initialNetworth,
//         totalwReturnAvg: totalwReturnAvg,
//         totalAssetsAmt: totalAssetsAmt,
//         totalLiabilities: totalLiabilities,
//         assetAllocationChoice: assetAllocationChoice
//     }
//     return obj;
// }

// const loanWorks = () => {
//     const liabilities = [
//         { loanName: 'Car Loan', emiAmt: 0, startYear: 2023, endYear: 2027, interest: 0.08, loanOutStandingBal: 0 },
//         { loanName: 'Home Loan', emiAmt: 98473.95579255935, startYear: 2024, endYear: 2039, interest: 0.085, loanOutStandingBal: 1000000 }
//     ]

//     var loanDetails = []; // Declare a new array
//     var totalYears = 0; // The total rows required for goalDetails range

//     // use the loans input to calculate year wise loan repayments and outstanding balances and store them in a table
//     let balanceMonthsInYear = 12 - new Date().getMonth(); //to ascertain how many more months loan is paid in current year
//     let currentYear = new Date().getFullYear(); //get current year

//     liabilities.forEach((row) => {
//         var loanYears = row.endYear - row.startYear + 1;
//         var loanOutstanding = row.loanOutStandingBal;
//         var emi = row.emiAmt;
//         var interestRate = row.interest;
//         if (loanYears != "NULL" && loanYears > 0 && loanOutstanding > 0) {
//             for (var counter = 1; counter <= loanYears; counter = counter + 1) {
//                 let loanPayments = emi * 12; // multiply by 12 for future years
//                 let interest = loanOutstanding * interestRate;
//                 let year = row.startYear + counter - 1; //there must be a better way to do this?

//                 if (year == currentYear) {
//                     loanPayments = emi * balanceMonthsInYear;  // multiply by balance months for the current year
//                     interest = loanOutstanding * interestRate * (balanceMonthsInYear / 12);
//                 } else {
//                     loanPayments;
//                     interest;
//                 }

//                 let principal = loanPayments - interest;

//                 loanOutstanding = loanOutstanding - principal; //(- prepayments, to be done later)

//                 //to account for final year of loan payments
//                 if (loanOutstanding > 0) {
//                     loanPayments;
//                 } else {
//                     loanPayments = loanOutstanding + (principal * (1 + interestRate)); //balance loan in last year is paid off and loan becomes 0
//                     loanOutstanding = 0;
//                 }

//                 let loanName = row.loanName + " " + counter;

//                 // add all above data to a new object and add it to loanDetails row[0] is loanName, 1 is EMI / repayment, 5 is loan outstanding, 4 is interest interestRate
//                 var newLoan = { loanName, year, emi, loanPayments, loanOutstanding, interestRate }
//                 loanDetails.push(newLoan);
//             }
//             totalYears += loanYears; // to calculate total no. of rows to write in the Loan Details sheet
//         }
//     })
//     return loanDetails;
// }

// const goalWorks = () => {
//     let data = [
//         { goalName: 'Graduation', goalDesc: 'Y', goalStartYear: 2036, goalEndYear: 4, costPerYear: 1500000, inflation: 0.10 },
//         // { goalName: 'Post Graduation', goalDesc: 'Y', goalStartYear: 2025, goalEndYear: '', costPerYear: 0, inflation: 0 },
//         // { goalName: 'Graduation', goalDesc: 'SW', goalStartYear: 2028, goalEndYear: '', costPerYear: 0, inflation: 0 },
//         // { goalName: 'Post Graduation', goalDesc: 'SW', goalStartYear: 2046, goalEndYear: '', costPerYear: 0, inflation: 0 },
//         // { goalName: 'Refurbishing', goalDesc: 'Self', goalStartYear: 2029, goalEndYear: '', costPerYear: 0, inflation: 0.8 },
//         // { goalName: 'Home', goalDesc: 'Self', goalStartYear: 2024, goalEndYear: '', costPerYear: 0, inflation: 0.8 },
//         // { goalName: 'Wedding', goalDesc: 'Y', goalStartYear: 2045, goalEndYear: 1, costPerYear: 2500000, inflation: 0.8 },
//         // { goalName: 'Car', goalDesc: 'Self', goalStartYear: 2035, goalEndYear: 1, costPerYear: 2000000, inflation: 0.6 },
//         // { goalName: 'Travel', goalDesc: 'Self', goalStartYear: 2030, goalEndYear: '', costPerYear: 0, inflation: 0 }
//         { goalName: 'Wedding', goalDesc: 'Y', goalStartYear: 2045, goalEndYear: 1, costPerYear: 2500000, inflation: 0.08 },
//         { goalName: 'Car', goalDesc: 'Self', goalStartYear: 2035, goalEndYear: 1, costPerYear: 2000000, inflation: 0.06 }

//     ]

//     var goalDetails = []; // Declare a new array
//     var totalYears = 0; // The total rows required for goalDetails range

//     // calculate future cost of each goal per year in which money is required and insert in the array
//     data.forEach((row) => {
//         var goalYears = row.goalEndYear;
//         // Conditional to ignore error when goalYears is empty
//         if (goalYears != "NULL" && goalYears > 0 && goalYears != undefined) {
//             for (var counter = 1; counter <= goalYears; counter = counter + 1) {
//                 let goalCostNow = row.costPerYear; //current cost for the goal
//                 let goalInflation = row.inflation; //inflation value for the goal
//                 var endYear = row.goalStartYear + 1;
//                 var startYear = endYear - 1; //there must be a better way to do this?
//                 var exp = startYear - new Date().getFullYear(); //the power factor / exponent to calculate the future cost
//                 var futureCost = Math.round(goalCostNow * (Math.pow(1 + goalInflation, exp)), 2);
//                 var goalName = row.goalName + " " + counter;


//                 // add all above data to a new object and add it to goalDetails
//                 var newGoal = {
//                     goalName: goalName,
//                     goalDesc: row.goalDesc,
//                     startYear: startYear,
//                     endYear: endYear,
//                     goalCostNow: goalCostNow,
//                     futureCost: futureCost
//                 };
//                 goalDetails.push(newGoal);
//             }
//             totalYears += goalYears;// to calculate total no. of rows to write in the Goal Details sheet
//         }
//     })
//     if (goalDetails.length >= 1) {
//         return goalDetails;    //the array with the values
//     } else {
//         return null //if someone adds no goals
//     }
// }



// cashflow details ///////////////////////////////////////////////////////////////////////////////////////

// const cashFlowDetails = () => {
//     const data = {
//         currentAge: 40,
//         retirementAge: 58,
//         lifeExpectancy: 85,
//         currentIncome: 5200000,
//         incomeGrowthRate: 0.10,
//         currentExpenses: 3500000,
//         inflation: 0.08,
//         postRetirementExpenseReduceBy: 0.4,
//         useWithdrawalRate: 'No',
//         withdrawalRate: 0.04,
//         postRetirementInflation: 0.06,
//         equityRateOfReturn: 0.15,
//         bondRateOfReturn: 0.06,
//         realEstateRateOfReturn: 0.08,
//         alternativesRateOfReturn: 0.10,
//         goldRateOfReturn: 0.07,
//         cashRateOfReturn: 0.04
//     }

//     var currentAge = data.currentAge;
//     var retirementAge = data.retirementAge;
//     var livingAge = data.lifeExpectancy;
//     var totalYears = livingAge - currentAge + 1; // Total no. of rows required in the cashFlowDetails range, which is, life expectancy - current age
//     var currentIncome = data.currentIncome;
//     var incomeGrowthRate = data.incomeGrowthRate;
//     var currentExpense = data.currentExpenses;
//     var inflation = data.inflation;
//     var equityRate = data.equityRateOfReturn;
//     var bondRate = data.bondRateOfReturn;
//     var cashRate = data.cashRateOfReturn;
//     var retirementYear = new Date().getFullYear() + (data.retirementAge - data.currentAge);
//     var livingYear = new Date().getFullYear() + totalYears - 1;


//     let networthValues = networth();
//     var pFReturn = networthValues.totalwReturnAvg; // assign pfReturn as a var
//     let opNetworth = networthValues.initialNetworth; // assign initial networth to a var
//     let opAssets = networthValues.totalAssetsAmt;
//     let assetAllocationChoice = networthValues.assetAllocationChoice;

//     let cashFlowDetails = []; // Declare a new output array
//     let ffData = []; //for returning financial freedom age values array to FF function along with the main output

//     //post retirement constraints
//     var expenseAtRetirement = currentExpense * Math.pow(1 + inflation, (retirementAge - currentAge));
//     var expensePostRetirement;
//     let networthAtRetirement;
//     var retirementExpenseLessBy = data.postRetirementExpenseReduceBy;
//     var useWithdrawalRate = data.useWithdrawalRate;
//     var withdrawalRate = data.withdrawalRate;

//     let goalDetails = goalWorks(); //call the goals array here and used later for calculating goal outlfows per year
//     let loanDetails = loanWorks(); // call the loans array here and used later for calculating loan payments and outstandings
//     //loop to calculate cash flow detail output for each year and store in a row object
//     for (let counter = 0; counter < totalYears; counter += 1) {
//         var age = currentAge + counter;
//         var year = new Date().getFullYear() + counter;
//         var expensePreRetirement;
//         var income;
//         //calculate pre retirement income and expenses
//         if (year <= retirementYear) {
//             income = Math.round((currentIncome * Math.pow((1 + incomeGrowthRate), counter)), 2);
//             expensePreRetirement = Math.round((currentExpense * Math.pow((1 + inflation), counter)), 2);
//         } else {
//             income = 0;
//             expensePreRetirement = 0;
//         }
//         //calculate post retirement expenses considering use of reduction or withdrawal rate based on networth at retirement
//         if (year > retirementYear && year <= livingYear) {
//             if (useWithdrawalRate == "Yes" && withdrawalRate != "NULL") {
//                 expensePostRetirement = networthAtRetirement * withdrawalRate * Math.pow((1 + inflation), counter - retirementAge + currentAge);
//             } else if (useWithdrawalRate == "No") {
//                 expensePostRetirement = (1 - retirementExpenseLessBy) * (expenseAtRetirement * Math.pow((1 + inflation), counter - retirementAge + currentAge));
//             } else {
//                 expensePostRetirement = 0;
//             }
//         } else {
//             expensePostRetirement = 0;
//         }

//         // add yearly loan payments to output and calculate loan outstandings for each year
//         let loanRepayments = 0; // initialise the array to store values
//         let loanOutstanding = 0; // initialise the array to store values
//         // calculate total payments and loan outstandings in the year by looping through loanDetails
//         if (loanDetails != null) {
//             loanDetails.forEach(function (row) {
//                 var emiYear = row.year; // year in which EMI is paid
//                 var loanOutflow = row.loanPayments; // total EMIs paid
//                 var loanBalance = row.loanOutstanding; // outstanding loan balance at the end of year

//                 if (year == emiYear) {
//                     loanRepayments = loanRepayments + loanOutflow;
//                     loanOutstanding = loanOutstanding + loanBalance;
//                 }
//             });
//         }

//         // add goal outflows to output,,,this can be handled in goalWorks function and save the loop repetition here.
//         let goalOutflow = 0; // initialise the array to store values
//         if (goalDetails != null) {
//             goalDetails.forEach(function (row) {
//                 let goalYear = row.startYear;
//                 let goalFutureCost = row.futureCost;
//                 if (year == goalYear) {
//                     goalOutflow = goalOutflow + goalFutureCost; //all goals future cost
//                 }
//             });
//         }
//         // sum of total outflows in a year
//         var totalOutflow = expensePreRetirement + expensePostRetirement + loanRepayments + goalOutflow;
//         // calculate cashflow shortfall or surplus for the year
//         var cashShortOrSurPlus = income - totalOutflow;

//         // calculate savings rate for the. year only if there is an income
//         var savingsRate = 0;
//         if (income > 0 && income > cashShortOrSurPlus) {
//             savingsRate = Math.round((((income - (expensePreRetirement + expensePostRetirement + loanRepayments)) / income) * 100), 2);
//         };

//         if (assetAllocationChoice == "A") {
//             //pFReturn = Math.min(inflation + 0.005,pFReturn); //Lower of inflation + 0.5% or actual weighted portfolio return
//             pFReturn = (0.2 * equityRate) + (0.8 * bondRate); // 20% equity and rest bonds assuming some comes through NPS/PF and MFs
//         } else if (assetAllocationChoice == "B") {
//             let equityAllocation = (100 - age) / 100;
//             pFReturn = (equityAllocation * equityRate) + ((1 - equityAllocation) * bondRate);
//         } else if (assetAllocationChoice == "C") {
//             pFReturn = ((0.6 * equityRate) + (0.4 * bondRate));
//         } else if (assetAllocationChoice == "D") {
//             pFReturn;
//         };

//         // Networth - closing and opening - calculations, networth function called at the beginning of the CashFlowDetails function to avoid repetition; pfReturn and opNetworth assigned
//         console.log(opAssets * (1 + (0.10357142857142856)) + cashShortOrSurPlus,"cashShortOrSurPlus")
//         let clAssets = opAssets * (1 + (pFReturn)) + cashShortOrSurPlus;
//         let clNetworth = clAssets - loanOutstanding;


//         // to not write negative networth values // IF FUNDS ARE ENDING EARLIER, THEN DONT DO CALCULATIONS FOR THE FUTURE YEARS AND STOP
//         if (clAssets > 0) {
//             clAssets;
//         } else {
//             clAssets = 0;
//             ffData.push(age); // add to ffData array for calculating when funds exhaust 
//         };

//         // networth at retirement
//         if (age == retirementAge) {
//             networthAtRetirement = clNetworth;
//         };

//         // lets deal with the final outputs 
//         var newCashFlow = { year, age, income, expensePreRetirement, expensePostRetirement, loanRepayments, goalOutflow, totalOutflow, cashShortOrSurPlus, savingsRate, opAssets, clAssets, opNetworth, loanOutstanding, clNetworth } //store all outputs in a new row object
//         cashFlowDetails.push(newCashFlow); //add the row to the Cash Flow details array

//         // Other networth operations
//         opNetworth = clNetworth; // assigns last year's networth as next year opening 
//         opAssets = clAssets;
//     }
//     console.log(cashFlowDetails)
//     return { cashFlowDetails, inflation, pFReturn, totalYears, retirementAge, livingAge, ffData, currentAge }
// }


// function financialFreedom() {
//     let data = cashFlowDetails(); // call the function with the values
//     // console.table(data.cashFlowDetails);
//     let cashFlowData = data.cashFlowDetails;
//     let discountRate = data.inflation; //inflation used as discount rate
//     let growthRate = data.pFReturn; //portfolio return weighted average
//     let totalYears = data.totalYears;
//     let retirementAge = data.retirementAge;
//     let livingAge = data.livingAge;
//     let ffData = data.ffData;
//     let currentAge = data.currentAge;

//     let cashFlows = []; // empty array which will store the cashshortfallSurplus numbers for present values
//     let networth = []; // empty array which will store the networth values for each year
//     let ffArray = []; // stores the sum of present values of future cash flows at each year 


//     let fundsExhaustAtAge = ffData[0] - 1; //WHEN NETWORTH BECOMES ZERO AND REST OF THE CALCULATIONS DON'T MATTER.

//     cashFlowData.forEach(function (row) {
//         cashFlows.push(row.totalOutflow); //copied the total outflows values from the cash flow details table
//         networth.push(row.clAssets); //copied the networth value from the cash flow details table 
//     })
//     let fireAmount = 0;
//     let pvSumArray = [];
//     let diffData = [];
//     //loop for getting total pvSum values every year for future years

//     for (count = 0; count < totalYears; count++) {
//         cashFlows.splice(0, 1); // remove first total outflow value of the array as we need pv for future years
//         cashFlows; // get the array without the first value

//         let pvSum = 0;
//         for (let i = 0; i < cashFlows.length; i++) {
//             pvSum += cashFlows[i] / (Math.pow((1 + growthRate), i + 1)); // total sum of PVs of outflows as of a year for future years 
//         };
//         pvSumArray.push(pvSum); //stores all PV sum values for years


//         let age = cashFlowData[count].age;
//         let diff = networth[count] - pvSum; // calculate networth - Sum of PVs as on that year for future years

//         diffData.push(diff); // first value of this array suggests the amount of life insurance

//         if (diff > 0) {
//             ffArray.push(age); // stores age where networth - sum of PVs is positive to calculate ffAge
//         }

//     };
//     // THE BIG QUESTIONS ANSWERED

//     // FIRE amount required today?
//     fireAmount = pvSumArray[0];

//     // Already Financially Free?
//     let retireNow = "YES";
//     if (networth[0] < fireAmount) {
//         retireNow = "NO"
//     };

//     // Age of financial freedom?
//     let ffAge = ffArray[0];
//     if (ffArray.length == 0 || fundsExhaustAtAge < ffAge) {
//         ffAge = "WORK MORE!";
//     } else if (fundsExhaustAtAge >= ffAge) {
//         ffAge;
//     };


//     // Till what age do the funds last?
//     if (ffData.length == 0) {
//         fundsExhaustAtAge = "NEVER"
//     } else {
//         fundsExhaustAtAge;
//     }

//     // Life insurance cover required
//     let insuranceReqd = 0;
//     if (diffData[0] < 0) {
//         insuranceReqd = Math.abs(diffData[0]);
//     }

//     // Will I leave an inheritance?
//     let inherit = networth[totalYears - 1]; //networth at life expectancy / living age
//     let pvInherit = inherit / (Math.pow(1 + discountRate, (totalYears - 1))); // present value
//     if (inherit == null || inherit == 0 || fundsExhaustAtAge < livingAge) {
//         inherit = 0;
//         pvInherit = 0;
//     };

//     // Networth at retirement age
//     let retireSum = networth[retirementAge - currentAge];
//     let pvRetire = retireSum / Math.pow(1 + discountRate, (retirementAge - currentAge)); // present value
//     if (retireSum == null || retireSum == 0 || fundsExhaustAtAge < retirementAge) {
//         retireSum = 0;
//         pvRetire = 0;
//     };

//     let outputs = [[retireNow, ffAge, fireAmount, fundsExhaustAtAge, inherit, pvInherit, retireSum, pvRetire, insuranceReqd, growthRate * 100]];
// }

// financialFreedom();
