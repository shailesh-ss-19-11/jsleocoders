// access HTML elements in js
// 1. by id ------------- id denoted by #
// 2. by class ------------- class denoted by (.)
// 3. by tagname
// 4. by attribute

// console.log(document);

// const myinfo = {// access HTML elements in js
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

// console.log(Array.isArray(sociallinks));
// let collection = [...sociallinks];
// console.log(Array.isArray(collection));

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


const myinfo = document.getElementById("myinfo");
console.dir(myinfo);
myinfo.textContent = "hellow world"
