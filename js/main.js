/* ==========================================
   AUTOLUX
   MAIN JAVASCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       NAVBAR SCROLL
    =============================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

    /* ===============================
       MOBILE MENU
    =============================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".primary-nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", () => {

            nav.classList.toggle("open");

        });

    }

    /* ===============================
       SCROLL REVEAL
    =============================== */

    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    }, {

        threshold: .15

    });

    reveals.forEach(item => observer.observe(item));

    /* ===============================
       COUNTER
    =============================== */

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let current = 0;

        const increment = Math.ceil(target / 80);

        const updateCounter = () => {

            current += increment;

            if (current >= target) {

                counter.innerText = target;

            } else {

                counter.innerText = current;

                requestAnimationFrame(updateCounter);

            }

        };

        const counterObserver = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    updateCounter();

                    counterObserver.unobserve(entry.target);

                }

            });

        });

        counterObserver.observe(counter);

    });

    /* ===============================
       HERO BUTTON RIPPLE
    =============================== */

    document.querySelectorAll(".btn-primary, .btn-secondary").forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.style.transform = "translateY(-4px)";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "translateY(0)";

        });

    });

});