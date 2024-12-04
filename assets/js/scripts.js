/* 
    *task: 
        -when click humborger change  menau show/hide navbar
        also toggle between bars/x-mark
*/
const listMenu = document.querySelector(".header nav ul");
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
const humburger = document.querySelector(".humburger");

humburger.addEventListener("click", function () {
    bars.classList.toggle("active");
    xmark.classList.toggle("active");
    listMenu.classList.toggle("active");
})

        // When the page is fully loaded, hide the loader and show the content
        window.onload = function() {
            document.getElementById("loader").style.display = "none";
        };
