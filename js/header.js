const navMenu = document.getElementById('nav-menu');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const navLinks = document.querySelectorAll('#nav-menu .nav-lists a');
const body = document.body; // Add this line to control scroll

menuBtn.addEventListener('click', () => {
    navMenu.classList.add('active');
    body.classList.add('no-scroll'); // 🚫 Disable scroll
});

closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('active');
    body.classList.remove('no-scroll'); // ✅ Enable scroll again
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        body.classList.remove("no-scroll"); // ✅ Enable scroll again on link click
    });
});
