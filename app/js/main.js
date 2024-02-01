
document.addEventListener("DOMContentLoaded", () => {
    let navLinks = document.querySelectorAll(".header__href");
    let ul = document.querySelector(".header__ul");

    navLinks.forEach((navLink) => {
        navLink.addEventListener("click", function () {
            navLinks.forEach((link) => {
                link.classList.remove("class-active");
            });

            this.classList.add("class-active");
        });
    });
}); 