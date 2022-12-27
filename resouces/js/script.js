const navbar = document.querySelector(".header__navbar");
const sidebar = document.querySelector(".nav");
const closeTag = document.querySelector(".nav-close-icon");
const searchTag = document.querySelector(".closetag");
const sectionScrollBar = document.querySelector(".section__slider");
const generalContainer = document.querySelector(".general-container");

navbar.addEventListener("click", ()=>{
    sidebar.classList.add("show");
    document.body.style.overflow = "hidden";
});

searchTag.addEventListener("click", ()=>{
    sidebar.classList.add("show");
});

closeTag.addEventListener("click", ()=>{
    sidebar.classList.remove("show");
    document.body.style.overflow = "";
});


console.log(document.documentElement.scrollTop);