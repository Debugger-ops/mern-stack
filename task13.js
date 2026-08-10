

// // let selecting = document.querySelector('#title');
// // let button = document.querySelector("#BTN")
// // addEventListener("")

// let selecting = document.querySelector('#title');
// let button = document.querySelector("#btn")
// let textchange = document.querySelector(".text")
// let anotherway = document.querySelector(".another")


// anotherway.forEach((num) => console.log(num));
// anotherway.forEach((num) => {
//     num.addEventListener("click", function(){
//         selecting.textContent = "vivek"
//         selecting.style.color = "red"
       
//         setTimeout(function(){
//             selecting.style.transform = "scale(1)"
//         }, 500)
//     });
// });
// button.addEventListener("click", function(){
//     selecting.textContent = "vivek"
//     selecting.style.color = "red"
   
//     setTimeout(function(){
//         selecting.style.transform = "scale(1)"
//     }, 500)
// });
// const result = [...elements].reduce((acc, item) => {
//     return acc + item.textContent + " ";
// }, "");

// console.log(result);
// const items = document.querySelectorAll(".num");

// const odd = items.filter((item, index) => index % 2 === 0);

// console.log(odd);

// const items = document.querySelectorAll(".num");

// items.forEach((item, index) => {

//     if (index % 2 === 0) {
//         console.log("Odd:", item.textContent);
//         item.style.color = "blue";
//     } 
//     else {
//         console.log("Even:", item.textContent);
//         item.style.color = "red";
//     }
// });

let selecting = document.querySelector('#title');
let button = document.querySelector("#btn")
let textchange = document.querySelector(".text")
let anotherway = document.querySelectorAll(".another")

anotherway.forEach((num) => {
    num.addEventListener("click", function(){
        selecting.textContent = "vivek"
        selecting.style.color = "red"
       
        setTimeout(function(){
            selecting.style.transform = "scale(1 )"
        }, 500)
    });
});
button.addEventListener("click", function(){
    selecting.textContent = "vivek"
    selecting.style.color = "red"
   
    setTimeout(function(){
        selecting.style.transform = "scale(1)"
    }, 500)
});
