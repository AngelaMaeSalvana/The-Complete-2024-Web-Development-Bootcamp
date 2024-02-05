const wrapper = document.querySelector(".content-box");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".content").offsetWidth;
const prevBtn = document.querySelectorAll("#prevBtn");
const nextBtn = document.querySelectorAll("#nextBtn");
const carouselChildrens = [...carousel.children]; 
 
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);  


nextBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
}); 
prevBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft  -= btn.id == "right" ? -firstCardWidth : firstCardWidth;
    });
}); 