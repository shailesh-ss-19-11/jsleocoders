// access HTML elements in js 
// 1. by id ------------- id denoted by #
// 2. by class ------------- class denoted by (.)
// 3. by tagname  
// 4. by attribute  

// console.log(document);

const myinfo = {
    name: "shailesh",
    age: 24,
    address: "nagpur"
}


// mybutton.addEventListener("click",function(){
//     alert();
// })

const mybutton = document.getElementById("changeinformation");
mybutton.addEventListener("click", changeinfo)

function changeinfo() {
    const getmyinfo = document.getElementById("myinfo");
    getmyinfo.textContent = `My name is ${myinfo.name} and my age is ${myinfo.age} I live in ${myinfo.address}`;
}


function changeStyle() {
    const getmyinfo = document.getElementById("myinfo");
    getmyinfo.style.backgroundColor = "#ff6666";
    getmyinfo.style.border = "1px solid black";
    getmyinfo.style.borderRadius = "10px";
    getmyinfo.style.padding = "15px";


    const mybutton = document.getElementById("changeinformation");
    console.dir(mybutton);
    mybutton.style.backgroundColor = "#ff6666";
    mybutton.style.border = "1px solid black";
    mybutton.style.borderRadius = "10px";
    mybutton.style.padding = "15px";
    mybutton.textContent = "Change Information";
}

function hideElement(){
    const getmyinfo = document.getElementById("myinfo"); 
    getmyinfo.style.display = "none";  
}
function showElement(){
    const getmyinfo = document.getElementById("myinfo"); 
    getmyinfo.style.display = "block";  
}