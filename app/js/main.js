document.addEventListener("DOMContentLoaded", function() {
    let navLinks = document.querySelectorAll('.header__ul .header__href');

    function getActiveSection() {
        let scrollPosition = window.scrollY;
        let windowHeight = window.innerHeight;

        for (let i = 0; i < sections.length; i++) {
            let section = sections[i];
            if (scrollPosition > section.offsetTop - windowHeight / 2 && scrollPosition < section.offsetTop + section.offsetHeight - windowHeight / 2) {
                return section.id;
            }
        }
        return null;
    }

    function setActiveNav() {
        let activeSectionId = getActiveSection();
        if (activeSectionId) {
            navLinks.forEach(function(link) {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === activeSectionId) {
                    link.classList.add('active');
                }
            });
        }
    }

    let sections = document.querySelectorAll('section');

    window.addEventListener('scroll', setActiveNav);
    setActiveNav();

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            let targetSectionId = this.getAttribute('href').substring(1);
            let targetSection = document.getElementById(targetSectionId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });

                let navbarToggle = document.querySelector('.navbar-toggler');
                let navbarNav = document.querySelector('.navbar-collapse');

                if (navbarToggle && navbarNav.classList.contains('show')) {
                    navbarToggle.click();
                }
            }
        });
    });
});
