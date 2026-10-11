const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');

// Open and close the mobile navigation
menuToggle.addEventListener('click', () => {
const isOpen = nav.classList.toggle('open');

```
menuToggle.setAttribute('aria-expanded', isOpen);
menuToggle.setAttribute(
    'aria-label',
    isOpen ? 'Close navigation menu' : 'Open navigation menu'
);
```

});

// Close the mobile navigation after selecting a link
navLinks.forEach((link) => {
link.addEventListener('click', () => {
nav.classList.remove('open');

```
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute(
        'aria-label',
        'Open navigation menu'
    );
});
```

});

```javascript
// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");

// Open and close the mobile menu
menuToggle.addEventListener("click", function () {

    nav.classList.toggle("active");

    menuToggle.classList.toggle("active");

    const isOpen = nav.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

});

// Close the menu when a navigation link is clicked
navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    });

});

```javascript
// =========================
// ACTIVE NAVIGATION ON SCROLL
// =========================

const sections = document.querySelectorAll("main section");

function updateActiveLink() {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 150) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveLink);

updateActiveLink();
