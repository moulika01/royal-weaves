<script>
document.addEventListener("DOMContentLoaded", () => {

    /* ================= MOBILE MENU ================= */
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    /* ================= CART ================= */
    let cartCount = 0;
    const cartCounter = document.getElementById("cartCount");

    document.querySelectorAll(".product-content button").forEach(btn => {
        btn.addEventListener("click", () => {
            cartCount++;
            cartCounter.textContent = cartCount;

            let oldText = btn.innerText;

            btn.innerText = "Added ✓";
            btn.style.background = "#d4af37";
            btn.style.color = "black";

            setTimeout(() => {
                btn.innerText = oldText;
                btn.style.background = "black";
                btn.style.color = "white";
            }, 1200);
        });
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

    /* ================= WISHLIST ================= */
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
            wishlistCount = Math.max(0, wishlistCount - 1);
            wishlistIcon.style.color = "white";
        }

        wishlistCountElement.textContent = wishlistCount;
    });

    /* ================= ICON ALERTS ================= */
    document.getElementById("cartIcon").addEventListener("click", () => {
        alert(cartCount === 0
            ? "Your Cart is Empty 🛒"
            : `You have ${cartCount} items in cart 🛍️`
        );
    });

    document.querySelector(".fa-user").addEventListener("click", () => {
        alert("Login feature coming soon 👤");
    });

    /* ================= ABOUT SECTION BUTTONS ================= */
    document.querySelectorAll(".feature-box").forEach(box => {
        box.style.cursor = "pointer";

        box.addEventListener("click", () => {
            const text = box.innerText.toLowerCase();

            if (text.includes("premium")) {
                document.getElementById("collections")
                    .scrollIntoView({ behavior: "smooth" });
            }

            else if (text.includes("bridal")) {
                document.getElementById("bridal")
                    .scrollIntoView({ behavior: "smooth" });
            }

            else if (text.includes("luxury")) {
                document.getElementById("partywear")
                    .scrollIntoView({ behavior: "smooth" });
            }
        });
    });

});
</script>