/* =========================================
   SHADOW NETWORK STORE
   COMPLETE SCRIPT
   ========================================= */

let cart = [];


/* =========================================
   CONFIG
   ========================================= */

function getConfig() {
    return window.SHADOW_CONFIG || null;
}


/* =========================================
   INITIALIZE
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const config = getConfig();

    if (!config) {
        console.error(
            "Shadow Network: config.js was not loaded."
        );
        return;
    }

    updateServerInformation(config);
    buildRanks(config);
    setupAnimations();
    updateCart();

});


/* =========================================
   SERVER INFORMATION
   ========================================= */

function updateServerInformation(config) {

    if (!config.server) {
        return;
    }

    const ipElement =
        document.getElementById("server-ip");

    const versionElement =
        document.getElementById("server-version");

    if (ipElement && config.server.ip) {
        ipElement.textContent =
            config.server.ip;
    }

    if (
        versionElement &&
        config.server.version
    ) {
        versionElement.textContent =
            config.server.version;
    }

}


/* =========================================
   BUILD RANKS
   ========================================= */

function buildRanks(config) {

    if (!config.ranks) {
        return;
    }

    const rankGrid =
        document.getElementById("rank-grid");

    if (!rankGrid) {
        return;
    }

    rankGrid.innerHTML = "";

    config.ranks.forEach(function (rank) {

        const card =
            document.createElement("div");

        card.className =
            "rank-card " + getRankClass(rank);

        if (rank.popular === true) {
            card.classList.add("popular");
        }


        let perksHTML = "";

        if (Array.isArray(rank.perks)) {

            rank.perks.forEach(function (perk) {

                perksHTML += `
                    <li>
                        ✓ ${escapeHTML(perk)}
                    </li>
                `;

            });

        }


        const popularHTML =
            rank.popular === true
                ? `
                    <div class="popular-badge">
                        MOST POPULAR
                    </div>
                `
                : "";


        card.innerHTML = `

            ${popularHTML}

            <div class="rank-icon">
                ◆
            </div>

            <h3>
                ${escapeHTML(rank.name)}
            </h3>

            <div class="price">
                <span>$</span>${Number(rank.price).toFixed(2)}
            </div>

            <p class="rank-description">
                ${escapeHTML(rank.description || "")}
            </p>

            <ul>
                ${perksHTML}
            </ul>

            <button
                type="button"
                data-rank-id="${escapeHTML(rank.id)}"
            >
                BUY ${escapeHTML(rank.name)}
            </button>

        `;


        const buyButton =
            card.querySelector("button");


        buyButton.addEventListener(
            "click",
            function () {

                addRankToCart(rank);

            }
        );


        rankGrid.appendChild(card);

    });

}


/* =========================================
   RANK CSS CLASS
   ========================================= */

function getRankClass(rank) {

    const id =
        String(rank.id || "")
            .toLowerCase()
            .replace(/[^a-z0-9]/g, "");

    if (id === "vip") {
        return "vip";
    }

    if (id === "premium") {
        return "premium";
    }

    if (id === "elite") {
        return "elite";
    }

    if (id === "shadow") {
        return "shadow";
    }

    if (
        id === "shadowplus" ||
        id === "shadow+"
    ) {
        return "shadow-plus";
    }

    return "";
}


/* =========================================
   ADD RANK TO CART
   ========================================= */

function addRankToCart(rank) {

    if (!rank) {
        return;
    }

    const existing =
        cart.find(function (item) {

            return item.id === rank.id;

        });


    if (existing) {

        showNotification(
            rank.name +
            " is already in your cart."
        );

        openCart();

        return;
    }


    cart.push({

        id: rank.id,

        name: rank.name,

        price: Number(rank.price),

        luckPermsGroup:
            rank.luckPermsGroup || ""

    });


    updateCart();

    showNotification(
        rank.name +
        " added to your cart!"
    );

    openCart();

}


/* =========================================
   BACKWARDS-COMPATIBLE ADD TO CART
   ========================================= */

function addToCart(rankName, price) {

    const config = getConfig();

    if (!config || !config.ranks) {
        return;
    }


    const rank =
        config.ranks.find(function (item) {

            return (
                item.name.toLowerCase() ===
                String(rankName).toLowerCase()
            );

        });


    if (rank) {

        addRankToCart(rank);

        return;

    }


    addRankToCart({

        id:
            String(rankName)
                .toLowerCase()
                .replace(/\s+/g, "-"),

        name: rankName,

        price: Number(price),

        luckPermsGroup: ""

    });

}


/* =========================================
   UPDATE CART
   ========================================= */

function updateCart() {

    const cartItems =
        document.getElementById(
            "cart-items"
        );

    const cartCount =
        document.getElementById(
            "cart-count"
        );

    const cartTotal =
        document.getElementById(
            "cart-total"
        );


    if (cartCount) {

        cartCount.textContent =
            cart.length;

    }


    if (!cartItems) {
        return;
    }


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;


        if (cartTotal) {
            cartTotal.textContent =
                "$0.00";
        }


        return;
    }


    let total = 0;


    cartItems.innerHTML = "";


    cart.forEach(function (item, index) {

        total += Number(item.price);


        const element =
            document.createElement("div");


        element.className =
            "cart-item";


        element.innerHTML = `

            <div>

                <strong>
                    ${escapeHTML(item.name)}
                </strong>

                <p>
                    $${Number(item.price).toFixed(2)}
                </p>

            </div>

            <button
                type="button"
                aria-label="Remove ${escapeHTML(item.name)}"
                data-cart-index="${index}"
            >
                ✕
            </button>

        `;


        const removeButton =
            element.querySelector("button");


        removeButton.addEventListener(
            "click",
            function () {

                removeFromCart(index);

            }
        );


        cartItems.appendChild(element);

    });


    if (cartTotal) {

        cartTotal.textContent =
            "$" + total.toFixed(2);

    }

}


/* =========================================
   REMOVE FROM CART
   ========================================= */

function removeFromCart(index) {

    if (
        index < 0 ||
        index >= cart.length
    ) {
        return;
    }


    const removed =
        cart[index];


    cart.splice(index, 1);


    updateCart();


    if (removed) {

        showNotification(
            removed.name +
            " removed from your cart."
        );

    }

}


/* =========================================
   GET CART TOTAL
   ========================================= */

function getCartTotal() {

    return cart.reduce(
        function (total, item) {

            return total +
                Number(item.price);

        },
        0
    );

}


/* =========================================
   OPEN CART
   ========================================= */

function openCart() {

    const modal =
        document.getElementById(
            "cart-modal"
        );


    if (!modal) {
        return;
    }


    modal.classList.add("active");

    document.body.style.overflow =
        "hidden";

}


/* =========================================
   CLOSE CART
   ========================================= */

function closeCart() {

    const modal =
        document.getElementById(
            "cart-modal"
        );


    if (!modal) {
        return;
    }


    modal.classList.remove("active");

    document.body.style.overflow =
        "";

}


/* =========================================
   CLICK OUTSIDE CART
   ========================================= */

document.addEventListener(
    "click",
    function (event) {

        const modal =
            document.getElementById(
                "cart-modal"
            );


        if (
            modal &&
            event.target === modal
        ) {

            closeCart();

        }

    }
);


/* =========================================
   ESCAPE KEY
   ========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeCart();

        }

    }
);


/* =========================================
   COPY SERVER IP
   ========================================= */

function copyIP() {

    const element =
        document.getElementById(
            "server-ip"
        );


    if (!element) {
        return;
    }


    const ip =
        element.textContent.trim();


    if (!ip) {
        return;
    }


    if (
        navigator.clipboard &&
        window.isSecureContext
    ) {

        navigator.clipboard
            .writeText(ip)
            .then(function () {

                showNotification(
                    "Server IP copied!"
                );

            })
            .catch(function () {

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
        document.createElement(
            "textarea"
        );


    textarea.value = text;

    textarea.style.position =
        "fixed";

    textarea.style.left =
        "-9999px";


    document.body.appendChild(
        textarea
    );


    textarea.focus();

    textarea.select();


    try {

        const success =
            document.execCommand(
                "copy"
            );


        if (success) {

            showNotification(
                "Server IP copied!"
            );

        } else {

            alert(
                "Copy the server IP:\n" +
                text
            );

        }

    } catch (error) {

        alert(
            "Copy the server IP:\n" +
            text
        );

    }


    textarea.remove();

}


/* =========================================
   NOTIFICATION
   ========================================= */

function showNotification(message) {

    const oldNotification =
        document.querySelector(
            ".shadow-notification"
        );


    if (oldNotification) {
        oldNotification.remove();
    }


    const notification =
        document.createElement(
            "div"
        );


    notification.className =
        "shadow-notification";


    notification.textContent =
        message;


    document.body.appendChild(
        notification
    );


    requestAnimationFrame(
        function () {

            notification.classList.add(
                "show"
            );

        }
    );


    setTimeout(
        function () {

            notification.classList.remove(
                "show"
            );


            setTimeout(
                function () {

                    if (
                        notification.parentNode
                    ) {

                        notification.remove();

                    }

                },
                300
            );

        },
        2500
    );

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


    const config =
        getConfig();


    if (
        !config ||
        !config.checkout
    ) {

        showNotification(
            "Checkout is not configured yet."
        );

        return;
    }


    if (
        config.checkout.enabled !== true
    ) {

        showNotification(
            "Checkout is coming soon!"
        );

        return;
    }


    if (
        !config.checkout.checkoutUrl
    ) {

        showNotification(
            "Checkout URL is not configured."
        );

        return;
    }


    /*
     * IMPORTANT:
     *
     * Never send LuckPerms credentials
     * from this browser script.
     *
     * The secure payment + server delivery
     * system will be connected through a
     * backend later.
     */


    window.location.href =
        config.checkout.checkoutUrl;

}


/* =========================================
   SCROLL ANIMATIONS
   ========================================= */

function setupAnimations() {

    const elements =
        document.querySelectorAll(
            ".rank-card, " +
            ".feature-card, " +
            ".stat-card"
        );


    if (!("IntersectionObserver" in window)) {

        elements.forEach(
            function (element) {

                element.classList.add(
                    "visible"
                );

            }
        );

        return;
    }


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    elements.forEach(
        function (element) {

            element.classList.add(
                "reveal"
            );

            observer.observe(
                element
            );

        }
    );

}


/* =========================================
   SAFE HTML
   ========================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================
   SAVE CART
   ========================================= */

function saveCart() {

    try {

        localStorage.setItem(
            "shadowNetworkCart",
            JSON.stringify(cart)
        );

    } catch (error) {

        console.warn(
            "Could not save cart.",
            error
        );

    }

}


/* =========================================
   LOAD CART
   ========================================= */

function loadCart() {

    try {

        const saved =
            localStorage.getItem(
                "shadowNetworkCart"
            );


        if (!saved) {
            return;
        }


        const parsed =
            JSON.parse(saved);


        if (!Array.isArray(parsed)) {
            return;
        }


        cart = parsed.filter(
            function (item) {

                return (
                    item &&
                    typeof item.name === "string" &&
                    Number.isFinite(
                        Number(item.price)
                    )
                );

            }
        );


    } catch (error) {

        console.warn(
            "Could not load saved cart.",
            error
        );

        cart = [];

    }

}


/* =========================================
   KEEP CART SAVED
   ========================================= */

const originalUpdateCart =
    updateCart;


updateCart = function () {

    originalUpdateCart();

    saveCart();

};


/* =========================================
   LOAD SAVED CART
   ========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadCart();

        updateCart();

    }
);


/* =========================================
   OPTIONAL PLAYER COUNT
   =========================================
   
   This is intentionally a placeholder.

   A real Minecraft player count should
   come from a server-status API/backend,
   not be faked in the frontend.
   ========================================= */

function setPlayerCount(count) {

    const element =
        document.getElementById(
            "player-count"
        );


    if (!element) {
        return;
    }


    if (
        typeof count !== "number" ||
        !Number.isFinite(count)
    ) {
        return;
    }


    element.textContent =
        Math.max(0, Math.floor(count));

}
