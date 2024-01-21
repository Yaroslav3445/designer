
// let soft = document.querySelectorAll'header'
document.addEventListener('DOMContentLoaded', () => {
    // Отримання всіх елементів навігації
    var navLinks = document.querySelectorAll('.header__href');

    // Додавання обробників подій для кожного елемента навігації
    navLinks.forEach((navLink) => {
        navLink.addEventListener('click', function (e)  {
            // Відміна стандартної дії по кліку на посилання

            navLinks.forEach((link) => {
                link.classList.remove('class-active');
            });

            this.classList.add('class-active');
        });
    });
});
