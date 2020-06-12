// console.log('hello');
// console.log("Hello World ", 4+6, " Another log");
// document.write("hi");
// console.warn("this is warning");
// console.error("error bro");
// alert("hi");
// console.assert(4==(8-9));
// var n1=34;
// var n2=56;
// console.log(n1+n2);
// var s1="string";
// var marks={
//     ravi:89,
//     sh:78
// }
// console.log(marks);
// var a=true;
// var u;
// var n=null;
// console.log(a);
// console.log(u);
// console.log(n);
// var arr=[1,2,"bae",4,5];
// console.log(arr);
// console.log("a+b",(n1+n2));
// console.log(true && false);
// console.log(true || false);
// function avg(n1,n2){
//     return (n1+n2)/2;
// }
// console.log(avg(n1+n2))
// age=9;
// if (age>7){
//     console.log("not kid");
// }
// else if(age>2 && age<7){
//     console.log("kid");
// }
// else{
//     console.log("born");
// }

// var arr = [1, 2, 3, 4, 5, 6, 8];
// // console.log(arr)
// // for (var i=0;i<arr.length;i++){
// //     console.log(arr[i])
// // }

// arr.forEach(function(element){
//     console.log(element);
// })


// let j = 0;
// const a = 0;
// a+=1
// // a++
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);


// let arr=["tp",34,true,null]
// console.log(arr.length)
// arr.pop()
// arr.push("qwer")
// console.log(arr)
// arr.shift()
// console.log(arr)
// const newlen=arr.unshift(arr)
// console.log(newlen)
// console.log(arr)
// arr.toString()
// console.log(arr)
// arr.sort()
// console.log(arr)


// str="qwer is good good"
// console.log(str.length)
// console.log(str.indexOf("is"))
// console.log(str.lastIndexOf("good"))
// console.log(str.slice(0,5))
// d=str.replace("good","very")
// console.log(d)

// myDate=new Date();
// console.log(myDate)
// console.log(myDate.getFullYear())
// console.log(myDate.getMonth())
// console.log(myDate.getTime())
// console.log(myDate.getDay())
// console.log(myDate.getMinutes())
// console.log(myDate.getHours())


// // DOM Manipulation
// window.onload = function () {
//     // document.getElementById("clic").innerHTML = "Why is this null?";
//     // eli=document.getElementById('clic')
//     // // console.log(document.getElementById('clic'))
//     // let elc=document.getElementsByClassName('container')
//     // // console.log(elc);
//     // // document.getElementsByClassName('container')[0].style.border="2px solid green"
//     // elc[0].style.border="2px solid darkblue"
//     // elc[0].classList.add("bg-primary")
//     // elc[0].classList.add("success")
//     // elc[0].classList.remove("success")
//     // // console.log(eli.innerHTML);
//     // // console.log(eli.innerText);
//     // // console.log(elc[0].innerText);
//     // // console.log(elc[0].innerHTML);
//     // tn=document.getElementsByTagName('div')
//     // console.log(tn)
//     // created=document.createElement('p')
//     // created.innerText="created paragraph"
//     // tn[0].appendChild(created)
//     // created2=document.createElement('b')
//     // created2.innerText="created bolded paragraph"
//     // tn[0].replaceChild(created2,created)
//     // tn[0].removeChild(created2)

//     //selecting using query
//     sel = document.querySelector('.container');
//     console.log(sel);
//     sel2 = document.querySelectorAll('.container');
//     console.log(sel2);
// }

// // events
// function clicked() {
//     console.log("button clicked")
// }

// window.onload = function () {
//     let prev = document.querySelectorAll('.container')[1].innerHTML
//     console.log("document loaded");
//     // firstcontainer.addEventListener('click', function () {
//     //     console.log("click hua");
//     // })
//     // firstcontainer.addEventListener('mouseover', function () {
//     //     console.log("mouse on")
//     // })
//     // firstcontainer.addEventListener('mouseout', function () {
//     //     console.log("mouse out")
//     // })
//     firstcontainer.addEventListener('mouseup', function () {
//         document.querySelectorAll('.container')[1].innerHTML = prev
//         console.log("mouse up")
//     })
//     firstcontainer.addEventListener('mousedown', function () {
//         document.querySelectorAll('.container')[1].innerHTML = "<b> clicked </b>"
//         console.log("mouse down")
//     })
// }

// setTimeout and setinterval
// Arrow functions
// function sum(a,b){
//     return a+b;
// }
// sum=(a,b)=>{
//     return a+b;
// }
// console.log(sum(5,6))
// logKaro=()=>{
//     document.querySelectorAll('.container')[1].innerHTML='<b>CLICKED</b>';
//     console.log("I m ur log ");
// }
// // settimeout
// // setTimeout(logKaro,2000)
// clr=setInterval(logKaro,2000)
// clearInterval(clr)
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout


// javascript localstorage
// localStorage.setItem('name','isha')
// localStorage
// localStorage.getItem('name','isha')
localStorage.removeItem('name')
localStorage.clear
// json
obj={name: 'isha',length : 1,a:{this : 'tha"t'}}
jso=JSON.stringify(obj)
console.log(jso)
console.log(typeof jso)

console.log(jso)
parsed=JSON.parse(`{"name":"isha","length":1,"a":{"this":"that"}}`)
console.log(parsed)

// template literals
a=34;
console.log(`this is my $${a}`)


