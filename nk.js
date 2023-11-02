console.log ('hello');
var menu = document.getElementById("menu");
var close = document.getElementById("close");
var navlink = document.querySelector(".nav-links");

menu.addEventListener('click' , () =>{
    menu.style.display = "none";
    close.style.display = "block";
    navlink.classList.toggle("nav-show-link");
    close.style.borderLeft = "1px solid #4682b4";
    close.style.borderRight = "1px solid #4682b4";
})
close.addEventListener('click' , () =>{
    close.style.display = "none";
    menu.style.display = "block";
    navlink.classList.toggle("nav-show-link");

})

var icon1 = document.getElementById("icon1");
var icon2 = document.getElementById("icon2");
var icon3 = document.getElementById("icon3");
var icon4 = document.getElementById("icon4");
var movieslink = document.querySelector(".movies-link");
var asianlink = document.querySelector(".asian-link");

icon1.addEventListener('click' , () =>{
    icon1.style.display = "none";
    icon2.style.display = "block";
    movieslink.classList.toggle('movies-show-link');
    movieslink.style.height = "109px";
})
icon2.addEventListener('click' , () =>{
    icon2.style.display = "none";
    icon1.style.display = "block";
    movieslink.classList.toggle('movies-show-link');
    movieslink.style.height = "0px";
    icon4.style.display = "none";
    icon3.style.display = "block";
    asianlink.style.height = "0px";
})


var icon3 = document.getElementById("icon3");
var icon4 = document.getElementById("icon4");
var asianlink = document.querySelector(".asian-link");
var movieslink = document.querySelector(".movies-link"); 
icon3.addEventListener('click' , () =>{
    icon3.style.display = "none";
    icon4.style.display = "block";
    asianlink.classList.toggle('asian-show-link');
    movieslink.style.height = "264px";
    asianlink.style.height = "159px";
})
icon4.addEventListener('click' , () =>{
    icon4.style.display = "none";
    icon3.style.display = "block";
    asianlink.classList.toggle('asian-show-link');
    movieslink.style.height = "109px";
    asianlink.style.height = "0px";
})
var icon3 = document.getElementById("icon3");
var icon4 = document.getElementById("icon4");
var asianlink = document.querySelector(".asian-link");
var movieslink = document.querySelector(".movies-link"); 

// window.addEventListener('resize' , ()=>{

//     if(window.innerWidth > 600 && movieslink.style.height === "264px" && asianlink.style.height === "159px"){
//         movieslink.style.height = "75px";
//         asianlink.style.height = "109px";
//     }
// })
// var navlink = document.querySelector(".nav-links");

// window.addEventListener('resize' , ()=>{

//     if(window.innerWidth > 600 ) {
//         navlink.style.display = "none";
//     }
// })
var icon5 = document.getElementById("icon5");
var icon6 = document.getElementById("icon6");
var genrelink = document.querySelector(".genre-link")

icon5.addEventListener('click' , () =>{
    icon5.style.display = "none";
    icon6.style.display = "block";
    genrelink.classList.toggle('genre-show-link')
})
icon6.addEventListener('click' , () =>{
    icon6.style.display = "none";
    icon5.style.display = "block";
    genrelink.classList.toggle('genre-show-link')

})


