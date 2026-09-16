const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", function () {

    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "70px";
        navLinks.style.right = "20px";
        navLinks.style.background = "white";
        navLinks.style.padding = "20px";
        navLinks.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";
    }

});

/* =====================================================
   PORTFOLIO WEBSITE - JAVASCRIPT
   ===================================================== */


/* =====================================================
   1. MOBILE NAVBAR MENU
   ===================================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");
        menuToggle.classList.toggle("active");

    });

}


/* Close mobile menu when clicking a link */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

        if (menuToggle) {
            menuToggle.classList.remove("active");
        }

    });

});


/* =====================================================
   2. PROJECT FILTER
   ===================================================== */

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        /* Remove active class from all buttons */

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        /* Add active class to clicked button */

        button.classList.add("active");

        /* Get selected category */

        const filterValue = button.getAttribute("data-filter");

        /* Filter projects */

        projectCards.forEach(card => {

            const category = card.getAttribute("data-category");

            if (
                filterValue === "all" ||
                category === filterValue
            ) {

                card.classList.remove("hide");
                card.classList.add("show");

            } else {

                card.classList.remove("show");
                card.classList.add("hide");

            }

        });

    });

});


/* =====================================================
   3. SCROLL REVEAL ANIMATION
   ===================================================== */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* =====================================================
   4. BACK TO TOP BUTTON
   ===================================================== */

const backToTop = document.querySelector(".back-to-top");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =====================================================
   5. SMOOTH SCROLL
   ===================================================== */

const smoothLinks = document.querySelectorAll(
    'a[href^="#"]'
);

smoothLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        if (
            targetId &&
            targetId !== "#"
        ) {

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});


/* =====================================================
   6. TYPING EFFECT
   ===================================================== */

const typingElement =
    document.querySelector(".typing");

if (typingElement) {

    const typingTexts = [
        "IT Officer",
        "IT Support Specialist",
        "Network Administrator",
        "System Administrator"
    ];

    let textIndex = 0;
    let characterIndex = 0;
    let deleting = false;


    function typingEffect() {

        const currentText =
            typingTexts[textIndex];


        if (!deleting) {

            typingElement.textContent =
                currentText.substring(
                    0,
                    characterIndex + 1
                );

            characterIndex++;


            if (
                characterIndex ===
                currentText.length
            ) {

                deleting = true;

                setTimeout(
                    typingEffect,
                    1500
                );

                return;

            }

        } else {

            typingElement.textContent =
                currentText.substring(
                    0,
                    characterIndex - 1
                );

            characterIndex--;


            if (characterIndex === 0) {

                deleting = false;

                textIndex =
                    (textIndex + 1) %
                    typingTexts.length;

            }

        }


        const typingSpeed =
            deleting ? 60 : 100;

        setTimeout(
            typingEffect,
            typingSpeed
        );

    }


    typingEffect();

}


/* =====================================================
   7. ACTIVE NAVBAR LINK ON SCROLL
   ===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const menuLinks =
    document.querySelectorAll(
        ".nav-menu a"
    );


function activeMenuOnScroll() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    menuLinks.forEach(link => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (
            href ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    activeMenuOnScroll
);


/* =====================================================
   8. CURRENT YEAR FOR FOOTER
   ===================================================== */

const currentYear =
    document.querySelector("#current-year");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}
