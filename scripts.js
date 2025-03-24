// My English Chalet interactiviteit
console.log("✨ Welcome to My English Chalet ✨");

document.addEventListener("DOMContentLoaded", () => {
    const heroImg = document.querySelector(".avatar");
    heroImg.addEventListener("mouseover", () => {
        heroImg.style.transform = "scale(1.05)";
    });
    heroImg.addEventListener("mouseout", () => {
        heroImg.style.transform = "scale(1)";
    });
});
