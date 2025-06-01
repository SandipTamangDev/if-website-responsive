const navMenu = document.getElementById('nav-menu');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const navLinks = document.querySelectorAll('#nav-menu .nav-lists a');


menuBtn.addEventListener('click', ()=> {
    navMenu.classList.add('active');
});

closeBtn.addEventListener('click', ()=>{
    navMenu.classList.remove('active');
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});