// access HTML elements in js
// 1. by id ------------- id denoted by #
// 2. by class ------------- class denoted by (.)
// 3. by tagname
// 4. by attribute

// console.log(document);

// const myinfo = {
//     name: "shailesh",
//     age: 24,
//     address: "nagpur"
// }


// // mybutton.addEventListener("click",function(){
// //     alert();
// // })

// const mybutton = document.getElementById("changeinformation");
// mybutton.addEventListener("click", changeinfo)

// function changeinfo() {
//     const getmyinfo = document.getElementById("myinfo");
//     getmyinfo.textContent = `My name is ${myinfo.name} and my age is ${myinfo.age} I live in ${myinfo.address}`;
// }


// function changeStyle() {
//     const getmyinfo = document.getElementById("myinfo");
//     getmyinfo.style.backgroundColor = "#ff6666";
//     getmyinfo.style.border = "1px solid black";
//     getmyinfo.style.borderRadius = "10px";
//     getmyinfo.style.padding = "15px";


//     const mybutton = document.getElementById("changeinformation");
//     console.dir(mybutton);
//     mybutton.style.backgroundColor = "#ff6666";
//     mybutton.style.border = "1px solid black";
//     mybutton.style.borderRadius = "10px";
//     mybutton.style.padding = "15px";
//     mybutton.textContent = "Change Information";
// }

// function hideElement(){
//     const getmyinfo = document.getElementById("myinfo");
//     getmyinfo.style.display = "none";
// }
// function showElement(){
//     const getmyinfo = document.getElementById("myinfo");
//     getmyinfo.style.display = "block";
// }

// getElementBy class //////////////////////////////////////////////////////////////////////////////

// const sociallinks = document.getElementsByClassName("link");
// console.log(sociallinks,"sociallinkssociallinks")


// console.log(Array.isArray(sociallinks));
// let collection = [...sociallinks];
// console.log(collection);

// // for (let i = 0; i < sociallinks.length; i++) {
// //     console.log(sociallinks[i]);
// //     if (sociallinks[i].host == "snapchat.app") {
// //         console.log(sociallinks);
// //         sociallinks[5].style.backgroundColor = "yellow"
// //         sociallinks[5].style.color = "black"
// //     }
// // }

// const snapchat = collection.filter((element) => element.host == "snapchat.app")
// console.log(snapchat, "snapchatsnapchatsnapchat")
// snapchat[0].style.backgroundColor = "yellow"
// snapchat[0].style.color = "black"
// collection.forEach((element) => {
//     if (element.host == "snapchat.app") {
//         sociallinks[5].style.backgroundColor = "yellow"
//         sociallinks[5].style.color = "black"
//     }
// })


// const myinfo = document.getElementById("myinfo");
// console.dir(myinfo);
// myinfo.textContent = "hellow world"

// querySelector ////////////////////////////////////////////////////////////////////////////

// (.) for class 
// (#) for id

// this is for id /////////////////////////////////

// const myinfo = document.querySelector("#myinfo");
// console.log(myinfo);
// myinfo.style.color = "red"
// myinfo.style.backgroundColor = "black"

// this is for class ///////////////////////////////
// const link = document.querySelector(".link");
// link.style.color = "red"
// link.style.backgroundColor = "black"
// console.log(link);
// const attrib = link.getAttribute("href");
// console.log(attrib)
// link.setAttribute("href","mahindra.com")


// const links = document.querySelectorAll(".link");
// console.log(links);
// links.forEach((item)=>{
//     if(item.host=="snapchat.app"){
//         console.log();
//         item.textContent="Linkedin"
//         item.href = "https://linkedin.com"
//     }
// });

// finding the index of item ///////////////////////////////////////////////////////////
// const newlinks = [...links];
// console.log(Array.isArray(newlinks))
// const item = newlinks.find((item)=>item.textContent=="hike");
// const index = newlinks.indexOf(item)
// console.log(index);

// tagname /////////////////////////////////////////////////////////////////////////////
// const h3 = document.getElementsByTagName("h3");
// h3[0].style.color = "red";
// console.dir(h3);

// classlist //////////////////////////////////////////////////////////////////////////

// function changeclass() {
//     const element = document.querySelector("#myinfo");
//     element.classList.add("border-red");
//     element.classList.remove("heading");
// }

// dom tree /////////////////////////////////////////////////////////////////////////

// const rootNode = document.getRootNode();
// // // console.dir(rootNode);
// const htmlElementNode = rootNode.childNodes[1];
// console.log(htmlElementNode.children); //NodeList(3) [head, text, body]
// const headElementNode = htmlElementNode.childNodes[0];
// const textNode1 = htmlElementNode.childNodes[1];
// const bodyElementNode = htmlElementNode.childNodes[2];

// console.log(headElementNode)
// console.log(bodyElementNode.childNodes)
// bodyElementNode.childNodes[5].textContent = "Google Universe";
// console.log(headElementNode.childNodes);

// // sibling relation ///////////////////////////////////
// const h3 = document.querySelector("h3");
// console.log(h3.nextSibling.nextSibling.nextSibling.nextSibling);
// let a1 = h3.nextSibling.nextSibling.nextSibling.nextSibling;
// a1.style.color="red"


// adding element in html using js /////////////////////////////////////////////////////
// createelement first way/////////////
// const newElement = document.querySelector("#new-element");
// console.log(newElement);
// newElement.innerHTML = "<h1>Sayukta Lakhe</h1>"
// newElement.innerHTML += "<h1>Swapnil</h1>"
// newElement.innerHTML += "<h1>vaibhav</h1>"
// newElement.innerHTML += "<h1>janvi</h1>"
// newElement.append(`<h1>janvi</h1>`)

// create element in javascript ////////////////////////////////////
// createelement second / way///////////////////////////////////////////
// append prepend remove /////////////////////////////////
for (let i = 0; i < 10; i++) {
    const todoItem = document.createElement("li");
    todoItem.textContent = `task ${i}`;
    const todoList = document.querySelector("#todo-list");
    // todoList.append(todoItem);
    todoList.prepend(todoItem);
}

// remove //////////////////////
// const todoList = document.querySelector("#todo-list");
// todoList.remove("li");

// createelement third way //////////////////////////////////
// afterbegin 
// beforebegin
// afterend
// beforeend

// const todoList = document.querySelector("#todo-list");
// // todoList.insertAdjacentHTML("beforeend","<li>todo 1</li>")
// const todoItem = document.createElement("li");
// todoItem.textContent="task 10"
// todoList.insertAdjacentElement("beforeend",todoItem);

// sync programming 
// console.log("async start")
// console.log("async check")
// for (let i = 0; i < 10000; i++) {
//     console.log("i");
// }
// console.log("async end")

// console.log("async start")   //1st
// setTimeout(()=>{
//     console.log("timeout"); //3rd
// },1000)
// console.log("async end") //2nd



// async programming /////////////////////////////////////////////////////////////////////////
// async function xyz() {
//     for (let i = 0; i < 10000; i++) {
//         console.log("i");
//     }
//     await console.log("hello world");
// }

// console.log("start")
// xyz();
// console.log("end")


// const changeview = document.querySelector("#changeview");
// changeview.style.display = "none"
// setTimeout(()=>{
//     const changeview = document.querySelector("#changeview");
//     changeview.style.display = "block"
// },10000)


// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve('async checked');
//       }, 2000);
//     });
//   }

//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     console.log("xyz");
//     // Expected output: "resolved"
//   }

//   asyncCall();


// API ////////////////////////////////////////////////////////////////////////////////
// api is nothing but the url /////////////////////////////////////////////////////////
// transport medium of frontend and backend 
// full form //////////////// application program interface 

// methods for api crud
// get --->for getting data
// post --->for add data
// put --->update existing data
// patch --->update existing data
// delete --->delete existing data


// fetch method 

// async function userData() {
//     const response = await fetch("https://retoolapi.dev/jORbdI/data");
//     console.log(response);
//     const result = await response.json();
//     console.table(result);
//   }

// userData();
// get method implemented //////////////////////////////////////////////////
function getuserdetails() {
    fetch("https://retoolapi.dev/jORbdI/data").then((response) => {
        return response.json()
    }).then((result) => console.table(result));
}
getuserdetails();


// post method implemented ///////////////////////////////////////////////////
// const addUser = () => {
//     let userdata = {
//         address: "kanhan",
//         age: 50,
//         dob: new Date(),
//         name: "shivani",
//         phone: "9878767654"
//     }

//     fetch("https://retoolapi.dev/jORbdI/data", {
//         method: "post",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body:JSON.stringify(userdata)
//     }).then((response)=>{
//         console.log(response,"response");
//         if(response.status===201 || response.status===200){
//             getuserdetails();
//         }
//         return response.json()
//     }).then((result)=>console.log(result));
// }

// addUser();

// delete method implemented ///////////////////////////////////////////////////
// function deleteUser (){
//     fetch("https://retoolapi.dev/jORbdI/data/52", {
//         method: "delete",
//         headers: {
//             "Content-Type": "application/json",
//         },
//     }).then((response)=>{
//         console.log(response,"response");
//         if(response.status===201 || response.status===200){
//             getuserdetails();
//         }
//         return response.json()
//     }).then((result)=>console.log(result));
// }
// deleteUser ();


// update data /////////////////////////////////////////////////////////////////////////////////////
// function updateUser() {
//     let userdata = {
//         address: "nanadanvan",
//         age: 50,
//         dob: new Date(),
//         name: "sakshi",
//         phone: "23482347"
//     }
//     fetch("https://retoolapi.dev/jORbdI/data/49", {
//         method: "put",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body:JSON.stringify(userdata)
//     }).then((response) => {
//         console.log(response, "response");
//         if (response.status === 201 || response.status === 200) {
//             getuserdetails();
//         }
//         return response.json()
//     }).then((result) => console.log(result));
// }
// updateUser();
