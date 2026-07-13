// ============================================
// AutoLux Contact Page JavaScript
// ============================================

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");
    const status = document.getElementById("formStatus");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        status.textContent = "";
        status.className = "";

        // Validation
        if (!name || !email || !phone || !message) {
            showStatus("Please fill in all required fields.", "error");
            return;
        }

        if (!validateEmail(email)) {
            showStatus("Please enter a valid email address.", "error");
            return;
        }

        if (!validatePhone(phone)) {
            showStatus("Please enter a valid phone number.", "error");
            return;
        }

        // Simulate successful submission
        showStatus("Thank you! Your message has been sent successfully.", "success");

        console.log({
            name,
            email,
            phone,
            subject,
            message
        });

        form.reset();
    });

    function showStatus(message, type) {
        status.textContent = message;
        status.className = type;

        setTimeout(() => {
            status.textContent = "";
            status.className = "";
        }, 5000);
    }

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validatePhone(phone) {
        const regex = /^[0-9+\-\s()]{7,20}$/;
        return regex.test(phone);
    }

});


// ============================================
// FAQ Accordion (Only one open at a time)
// ============================================

const faqs = document.querySelectorAll(".faq-container details");

faqs.forEach((faq) => {

    faq.addEventListener("toggle", () => {

        if (faq.open) {

            faqs.forEach((item) => {

                if (item !== faq) {
                    item.removeAttribute("open");
                }

            });

        }

    });

});


// ============================================
// Smooth Scroll for Contact Buttons
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


// ============================================
// Contact Card Hover Animation
// ============================================

const cards = document.querySelectorAll(".info-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});


// ============================================
// Hero Fade-In Animation
// ============================================

window.addEventListener("load", () => {

    const hero = document.querySelector(".hero-content");

    if (hero) {
        hero.classList.add("show");
    }

});


// ============================================
// Scroll Reveal Animation
// ============================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".info-card, .contact-text, .contact-form, .faq-container details, .contact-cta"
).forEach(element => {

    element.classList.add("hidden");
    observer.observe(element);

});