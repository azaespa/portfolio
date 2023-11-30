const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 99) {
        header.classList.add("on-scroll");
    } else {
        header.classList.remove("on-scroll");
    }
})