/* =========================================
   SHADOW NETWORK STORE
   Website JavaScript
   ========================================= */

let cart = [];


/* =========================================
   CART
   ========================================= */

function addToCart(rankName, price) {

    const existingItem = cart.find(
        item => item.name === rankName
    );

    if (existingItem) {
        alert(rankName + " is already in your cart!");
        return;
    }

    cart.push({
        name: rankName,
        price: Number(price)
    });

    updateCart();

    openCart();
}


/* =========================================
   UPDATE CART
   ========================================= */

function updateCart() {

    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    cartCount.textContent = cart.length;

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;

        cartTotal.textContent = "$0.00";

        return;
    }

    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {

        total += item.price;

        const itemElement = document.createElement("div");

        itemElement.className = "cart-item";

        itemElement.innerHTML = `
            <div>
                <strong>${item.name}</strong>
                <p>$${item.price.toFixed(2)}</p>
            </div>

            <button
                onclick="removeFromCart(${index})"
                aria-label="Remove ${item.name}"
            >
                ✕
            </button>
        `;

        cartItems.appendChild(itemElement);
    });

    cartTotal.textContent =
        "$" + total.toFixed(2);
}


/* =========================================
   REMOVE ITEM
   ========================================= */

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


/* =========================================
   OPEN CART
   ========================================= */

function openCart() {

    const modal =
        document.getElementById("cart-modal");

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* =========================================
   CLOSE CART
   ========================================= */

function closeCart() {

    const modal =
        document.getElementById("cart-modal");

    modal.classList.remove("active");

    document.body.style.overflow = "";
}


/* =========================================
   CLOSE CART WHEN CLICKING OUTSIDE
   ========================================= */

document.addEventListener("click", function(event) {

    const modal =
        document.getElementById("cart-modal");

    if (event.target === modal) {
        closeCart();
    }

});


/* =========================================
   ESC KEY
   ========================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeCart();
    }

});


/* =========================================
   COPY SERVER IP
   ========================================= */

function copyIP() {

    const ip =
        document.getElementById("server-ip").textContent;

    if (navigator.clipboard) {

        navigator.clipboard.writeText(ip)
            .then(() => {

                showNotification(
                    "Server IP copied: " + ip
                );

            })
            .catch(() => {

                fallbackCopy(ip);

            });

    } else {

        fallbackCopy(ip);

    }
}


/* =========================================
   FALLBACK COPY
   ========================================= */

function fallbackCopy(text) {

    const textarea =
        document.createElement("textarea");

    textarea.value = text;

    textarea.style.position = "fixed";
    textarea.style.opacity = "0";

    document.body.appendChild(textarea);

    textarea.select();

    try {

        document.execCommand("copy");

        showNotification(
            "Server IP copied!"
        );

    } catch {

        alert(
            "Copy this server IP: " + text
        );

    }

    textarea.remove();
}


/* =========================================
   NOTIFICATION
   ========================================= */

function showNotification(message) {

    const notification =
        document.createElement("div");

    notification.className =
        "shadow-notification";

    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {

        notification.classList.add("show");

    }, 10);

    setTimeout(() => {

        notification.classList.remove("show");

        setTimeout(() => {
            notification.remove();
        }, 300);

    }, 2500);
}


/* =========================================
   CHECKOUT
   ========================================= */

function checkout() {

    if (cart.length === 0) {

        showNotification(
            "Your cart is empty!"
        );

        return;
    }

    /*
       IMPORTANT:

       This is currently a DEMO checkout.

       We will connect this button to a real
       payment provider + Minecraft username
       + automatic LuckPerms delivery later.

       NEVER put your LuckPerms/server credentials
       inside this JavaScript file.
    */

    showNotification(
        "Checkout system coming next!"
    );
}


/* =========================================
   SCROLL ANIMATION
   ========================================= */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


document
    .querySelectorAll(
        ".rank-card, .feature-card, .stat-card"
    )
    .forEach(element => {

        element.classList.add("reveal");

        observer.observe(element);

    });


/* =========================================
   INITIALIZE
   ========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateCart();

    }
);
