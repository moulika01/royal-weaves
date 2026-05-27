/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
});

/* auto close */
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
    });
});


/* ================= STICKY NAVBAR ================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 60);
});


/* ================= HERO ANIMATION (PREMIUM) ================= */

const heroElements = document.querySelectorAll(".hero-content h1, .hero-content p, .hero-content button");

function animateHero() {

    heroElements.forEach((el, index) => {

        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "0.8s ease";

        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, 200 * index);

    });
}

window.addEventListener("load", animateHero);


/* ================= PRODUCT INTERACTION ================= */

const cartCountElement = document.getElementById("cartCount");
let cartCount = 0;

document.querySelectorAll(".product-content button").forEach(btn => {

    btn.addEventListener("click", () => {

        cartCount++;
        cartCountElement.textContent = cartCount;

        btn.classList.add("added");
        btn.innerText = "Added ✓";

        setTimeout(() => {
            btn.classList.remove("added");
            btn.innerText = "Add To Cart";
        }, 1200);

    });
});

/* ================= NAVIGATION ANIMATION RESTART ================= */

const navItems = document.querySelectorAll(".nav-links a");
const productCards = document.querySelectorAll(".product-card");

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        /* RESET ANIMATION */

        productCards.forEach((card, index) => {

            card.style.animation = "none";
            card.offsetHeight; /* reflow */

            /* RESTART ANIMATION */

            card.style.animation =
            `slideRightToLeft 3s ease forwards`;

            /* STAGGER EFFECT AGAIN */

            card.style.animationDelay = `${index * 0.5}s`;

        });

    });

});

/* ================= PREMIUM NAVIGATION ANIMATION ================= */

/* ================= SCROLL REVEAL ANIMATION ================= */

const cards = document.querySelectorAll(".product-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            /* RESET */

            entry.target.style.animation = "none";
            void entry.target.offsetWidth;

            /* RUN AGAIN */

            entry.target.style.animation =
            "luxurySlide 1.8s cubic-bezier(0.22,1,0.36,1) forwards";

        }

    });

},{
    threshold:0.2
});

/* OBSERVE ALL CARDS */

cards.forEach((card)=>{
    observer.observe(card);
});
const sections = document.querySelectorAll(".products-section");

/* FUNCTION */

function animateProducts(sectionId){

    /* TARGET SECTION */

    const targetSection = document.querySelector(sectionId);

    if(!targetSection) return;

    /* GET PRODUCTS INSIDE SELECTED SECTION */

    const cards = targetSection.querySelectorAll(".product-card");

    cards.forEach((card,index)=>{

        /* RESET */

        card.style.opacity = "0";
        card.style.transform = "translateX(250px) scale(0.9)";
        card.style.filter = "blur(8px)";

        card.style.animation = "none";
        void card.offsetWidth;

        /* PREMIUM ANIMATION */

        card.style.animation =
        `luxurySlide 1.8s cubic-bezier(0.22,1,0.36,1) forwards`;

        /* STAGGER */

        card.style.animationDelay = `${index * 0.18}s`;

    });

}

/* ================= NAVIGATION SECTION ANIMATION ================= */

const navLinks = document.querySelectorAll(".nav-links a");

/* NAVBAR CLICK */

navLinks.forEach((link) => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        /* TARGET SECTION */

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        /* SMOOTH SCROLL */

        targetSection.scrollIntoView({
            behavior: "smooth"
        });

        /* GET PRODUCT CARDS OF THAT SECTION */

        const cards = targetSection.querySelectorAll(".product-card");

        /* RESTART ANIMATION */

        cards.forEach((card, index) => {

            /* RESET */

            card.style.animation = "none";
            card.offsetHeight;

            /* START AGAIN */

            card.style.animation =
            `luxurySlide 1.8s cubic-bezier(0.22,1,0.36,1) forwards`;

            /* STAGGER EFFECT */

            card.style.animationDelay = `${index * 0.2}s`;

        });

    });

});

/* ================= WISHLIST TOGGLE ================= */

const wishlistIcon = document.querySelector(".fa-heart");
const wishlistCountElement = document.getElementById("wishlistCount");

let wishlistCount = 0;
let liked = false;

wishlistIcon.addEventListener("click", () => {

    liked = !liked;

    if (liked) {
        wishlistCount++;
        wishlistIcon.style.color = "#ff4d6d";
    } else {
        wishlistCount--;
        wishlistIcon.style.color = "white";
    }

    wishlistCountElement.textContent = wishlistCount;
});


/* ================= CART ICON ================= */

document.getElementById("cartIcon").addEventListener("click", () => {

    alert(cartCount === 0
        ? "Your Cart is Empty 🛒"
        : `You have ${cartCount} items in cart 🛍️`
    );

});


/* ================= ACCOUNT ICON ================= */

document.querySelector(".fa-user").addEventListener("click", () => {
    alert("Login feature coming soon 👤");
});


/* ================= SEARCH ================= */

const searchInput = document.getElementById("searchInput");

function searchProducts() {

    const value = searchInput.value.toLowerCase();

    document.querySelectorAll(".product-card").forEach(card => {

        const name = card.querySelector("h3").innerText.toLowerCase();

        card.style.display = name.includes(value) ? "block" : "none";

    });
}

searchInput.addEventListener("keyup", searchProducts);
document.getElementById("searchIcon").addEventListener("click", searchProducts);


/* ================= SCROLL REVEAL (SMOOTH) ================= */

const revealItems = document.querySelectorAll(".product-card, .section-title, .footer-box");

function reveal() {

    const trigger = window.innerHeight * 0.85;

    revealItems.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
            el.classList.add("show");
        }

    });
}

window.addEventListener("scroll", reveal);


/* ================= NEWSLETTER ================= */

document.querySelector(".newsletter button").addEventListener("click", () => {

    const input = document.querySelector(".newsletter input");

    if (!input.value) {
        alert("Enter email ✉️");
    } else {
        alert("Subscribed successfully 💖");
        input.value = "";
    }

});

