const button = document.querySelector(".navbar-toggler");
const dropdown = document.querySelector(".drop-down");

button.addEventListener("click",()=> {
    dropdown.classList.toggle("open")
});

const closeButton = document.querySelector(".btn-close");

closeButton.addEventListener("click",()=> {
    console.log('hello')
    dropdown.classList.remove("open");
    
});