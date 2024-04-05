// Cursor
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function(e) {

    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 500, fill: "forwards"});
}); 

// Menu button
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggle-btn');
    const menuList = document.getElementById('menu-list');
    const container = document.getElementsByTagName('section');

    toggleBtn.addEventListener('click', function() {
        menuList.classList.toggle('show-menu');
        if (menuList.classList.contains('show-menu')) {
            menuList.style.display = "block";
            container.classList.add("large-container");
        } 
        else {
            menuList.style.display = "none";
            container.classList.remove("large-container");
        }
    });
    const menuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu-list");

    menuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('show-mobile-menu');
        if (mobileMenu.classList.contains('show-mobile-menu')) {
            mobileMenu.style.display = "block";
        }
        else {
            mobileMenu.style.display = "none";
        }
    })
});