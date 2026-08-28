/* =========================================
   SHADOW NETWORK STORE
   COMPLETE STYLESHEET
   ========================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: #050507;
    color: #ffffff;
    overflow-x: hidden;
}

button,
a {
    -webkit-tap-highlight-color: transparent;
}

/* =========================================
   BACKGROUND
   ========================================= */

.background {
    position: fixed;
    inset: 0;
    z-index: -10;
    overflow: hidden;

    background:
        radial-gradient(
            circle at 20% 20%,
            rgba(124, 58, 237, 0.18),
            transparent 30%
        ),
        radial-gradient(
            circle at 80% 70%,
            rgba(168, 85, 247, 0.12),
            transparent 30%
        ),
        #050507;
}

.glow {
    position: absolute;

    width: 500px;
    height: 500px;

    border-radius: 50%;

    filter: blur(120px);

    opacity: 0.25;

    animation: floatGlow 10s ease-in-out infinite alternate;
}

.glow-one {
    background: #7c3aed;

    top: -200px;
    left: -150px;
}

.glow-two {
    background: #a855f7;

    right: -200px;
    bottom: -200px;

    animation-delay: 3s;
}

@keyframes floatGlow {
    from {
        transform: translate(0, 0) scale(1);
    }

    to {
        transform: translate(80px, 50px) scale(1.15);
    }
}

.stars {
    position: absolute;
    inset: 0;

    opacity: 0.25;

    background-image:
        radial-gradient(#ffffff 1px, transparent 1px);

    background-size: 70px 70px;

    animation: starsMove 20s linear infinite;
}

@keyframes starsMove {
    from {
        background-position: 0 0;
    }

    to {
        background-position: 70px 70px;
    }
}

/* =========================================
   NAVBAR
   ========================================= */

.navbar {
    position: sticky;
    top: 0;
    z-index: 100;

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 18px 6%;

    background: rgba(5, 5, 7, 0.75);

    backdrop-filter: blur(20px);

    border-bottom:
        1px solid rgba(255, 255, 255, 0.08);
}

.logo {
    display: flex;
    align-items: center;

    gap: 12px;
}

.logo-icon {
    width: 44px;
    height: 44px;

    display: grid;
    place-items: center;

    border-radius: 12px;

    background:
        linear-gradient(
            135deg,
            #7c3aed,
            #a855f7
        );

    box-shadow:
        0 0 25px rgba(124, 58, 237, 0.55);

    font-size: 22px;
    font-weight: 900;
}

.logo strong {
    display: block;

    font-size: 17px;

    letter-spacing: 2px;
}

.logo small {
    display: block;

    margin-top: 2px;

    color: #a855f7;

    font-size: 9px;

    font-weight: 800;

    letter-spacing: 4px;
}

.navbar nav {
    display: flex;

    gap: 30px;
}

.navbar nav a {
    color: #a1a1aa;

    text-decoration: none;

    font-size: 14px;

    font-weight: 600;

    transition: 0.25s;
}

.navbar nav a:hover {
    color: #ffffff;
}

.cart-button {
    border:
        1px solid rgba(168, 85, 247, 0.4);

    background:
        rgba(124, 58, 237, 0.12);

    color: white;

    padding: 10px 16px;

    border-radius: 10px;

    cursor: pointer;

    transition: 0.25s;
}

.cart-button:hover {
    background:
        rgba(124, 58, 237, 0.3);

    transform: translateY(-2px);

    box-shadow:
        0 0 25px rgba(124, 58, 237, 0.2);
}

#cart-count {
    display: inline-grid;
    place-items: center;

    min-width: 20px;
    height: 20px;

    margin-left: 5px;

    border-radius: 50%;

    background: #7c3aed;

    font-size: 11px;
}

/* =========================================
   HERO
   ========================================= */

.hero {
    min-height: 720px;

    display: flex;

    align-items: center;
    justify-content: center;

    text-align: center;

    padding: 100px 20px;
}

.hero-content {
    max-width: 900px;
}

.status {
    display: inline-flex;

    align-items: center;

    gap: 8px;

    padding: 9px 15px;

    border-radius: 999px;

    background:
        rgba(34, 197, 94, 0.08);

    border:
        1px solid rgba(34, 197, 94, 0.25);

    color: #86efac;

    font-size: 12px;

    font-weight: 800;

    letter-spacing: 1px;
}

.status-dot {
    width: 8px;
    height: 8px;

    border-radius: 50%;

    background: #22c55e;

    box-shadow:
        0 0 10px #22c55e;

    animation: pulse 1.5s infinite;
}

@keyframes pulse {
    0%,
    100% {
        opacity: 1;
        transform: scale(1);
    }

    50% {
        opacity: 0.45;
        transform: scale(0.7);
    }
}

.hero h1 {
    margin-top: 30px;

    font-size:
        clamp(55px, 9vw, 115px);

    line-height: 0.9;

    font-weight: 1000;

    letter-spacing: -5px;
}

.hero h1 span {
    display: block;

    color: transparent;

    background:
        linear-gradient(
            90deg,
            #7c3aed,
            #c084fc,
            #7c3aed
        );

    background-size: 200% auto;

    -webkit-background-clip: text;

    background-clip: text;

    animation:
        gradientMove 4s linear infinite;

    text-shadow:
        0 0 60px rgba(124, 58, 237, 0.25);
}

@keyframes gradientMove {
    to {
        background-position: 200% center;
    }
}

.hero p {
    max-width: 650px;

    margin: 30px auto;

    color: #a1a1aa;

    font-size: 18px;

    line-height: 1.7;
}

.hero-buttons {
    display: flex;

    justify-content: center;

    gap: 14px;

    margin-top: 35px;

    flex-wrap: wrap;
}

.primary-button,
.secondary-button {
    padding: 15px 25px;

    border-radius: 10px;

    font-weight: 900;

    cursor: pointer;

    text-decoration: none;

    transition: 0.25s;
}

.primary-button {
    color: white;

    background:
        linear-gradient(
            135deg,
            #7c3aed,
            #9333ea
        );

    box-shadow:
        0 0 30px rgba(124, 58, 237, 0.35);
}

.primary-button:hover {
    transform: translateY(-3px);

    box-shadow:
        0 10px 40px rgba(124, 58, 237, 0.45);
}

.secondary-button {
    color: white;

    background:
        rgba(255, 255, 255, 0.04);

    border:
        1px solid rgba(255, 255, 255, 0.12);
}

.secondary-button:hover {
    background:
        rgba(255, 255, 255, 0.08);

    transform: translateY(-3px);
}

.server-ip {
    margin-top: 40px;
}

.server-ip span {
    display: block;

    color: #71717a;

    font-size: 10px;

    letter-spacing: 3px;
}

.server-ip strong {
    display: block;

    margin-top: 7px;

    color: #d4d4d8;

    font-size: 16px;

    letter-spacing: 1px;
}

/* =========================================
   STATS
   ========================================= */

.stats {
    width: 88%;
    max-width: 1100px;

    margin: -30px auto 100px;

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 15px;
}

.stat-card {
    display: flex;

    align-items: center;

    gap: 15px;

    padding: 22px;

    border-radius: 15px;

    background:
        rgba(255, 255, 255, 0.035);

    border:
        1px solid rgba(255, 255, 255, 0.08);

    backdrop-filter: blur(10px);

    transition: 0.3s;
}

.stat-card:hover {
    transform: translateY(-4px);

    border-color:
        rgba(168, 85, 247, 0.3);
}

.stat-icon {
    font-size: 25px;
}

.stat-card strong {
    display: block;

    font-size: 14px;
}

.stat-card p {
    margin-top: 4px;

    color: #71717a;

    font-size: 12px;
}

/* =========================================
   SECTIONS
   ========================================= */

.section {
    width: 88%;
    max-width: 1250px;

    margin: 0 auto 150px;
}

.section-heading {
    text-align: center;

    margin-bottom: 60px;
}

.section-heading > span {
    color: #a855f7;

    font-size: 11px;

    font-weight: 900;

    letter-spacing: 4px;
}

.section-heading h2 {
    margin-top: 12px;

    font-size:
        clamp(35px, 5vw, 55px);

    letter-spacing: -2px;
}

.section-heading h2 strong {
    color: #a855f7;
}

.section-heading p {
    max-width: 600px;

    margin: 15px auto;

    color: #71717a;

    line-height: 1.7;
}

/* =========================================
   RANK GRID
   ========================================= */

.rank-grid {
    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(220px, 1fr));

    gap: 18px;

    align-items: stretch;
}

/* =========================================
   RANK CARDS
   ========================================= */

.rank-card {
    position: relative;

    padding: 30px 24px;

    border-radius: 18px;

    background:
        linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.055),
            rgba(255, 255, 255, 0.018)
        );

    border:
        1px solid rgba(255, 255, 255, 0.08);

    overflow: hidden;

    transition:
        transform 0.3s,
        border-color 0.3s,
        box-shadow 0.3s;
}

.rank-card::before {
    content: "";

    position: absolute;

    top: -100px;
    left: 50%;

    width: 200px;
    height: 200px;

    transform: translateX(-50%);

    background: #7c3aed;

    opacity: 0.08;

    filter: blur(70px);

    pointer-events: none;
}

.rank-card:hover {
    transform: translateY(-8px);

    border-color:
        rgba(168, 85, 247, 0.45);

    box-shadow:
        0 20px 50px rgba(0, 0, 0, 0.4);
}

.rank-icon {
    width: 45px;
    height: 45px;

    display: grid;

    place-items: center;

    margin-bottom: 20px;

    border-radius: 12px;

    background:
        rgba(124, 58, 237, 0.12);

    color: #a855f7;

    font-size: 20px;
}

.rank-card h3 {
    font-size: 23px;

    letter-spacing: 1px;
}

.price {
    margin: 15px 0;

    font-size: 35px;

    font-weight: 900;
}

.price span {
    color: #a855f7;

    font-size: 18px;
}

.rank-description {
    min-height: 45px;

    color: #71717a;

    font-size: 13px;

    line-height: 1.5;
}

.rank-card ul {
    list-style: none;

    margin: 25px 0;

    color: #a1a1aa;

    font-size: 13px;

    line-height: 2;
}

.rank-card button {
    width: 100%;

    padding: 13px;

    border: 0;

    border-radius: 9px;

    background:
        rgba(124, 58, 237, 0.15);

    color: white;

    font-weight: 900;

    cursor: pointer;

    transition: 0.25s;
}

.rank-card button:hover {
    background: #7c3aed;

    box-shadow:
        0 0 25px rgba(124, 58, 237, 0.35);

    transform: translateY(-2px);
}

/* =========================================
   RANK COLORS
   ========================================= */

.vip .rank-icon {
    color: #60a5fa;
}

.premium .rank-icon {
    color: #38bdf8;
}

.elite {
    border-color:
        rgba(168, 85, 247, 0.35);
}

.elite .rank-icon {
    color: #c084fc;
}

.shadow .rank-icon {
    color: #e879f9;
}

.shadow-plus {
    background:
        linear-gradient(
            145deg,
            rgba(124, 58, 237, 0.13),
            rgba(255, 255, 255, 0.025)
        );
}

.shadow-plus .rank-icon {
    color: #f0abfc;
}

.popular-badge {
    position: absolute;

    top: 15px;
    right: 15px;

    padding: 5px 9px;

    border-radius: 999px;

    background:
        rgba(168, 85, 247, 0.15);

    border:
        1px solid rgba(168, 85, 247, 0.3);

    color: #d8b4fe;

    font-size: 8px;

    font-weight: 900;

    letter-spacing: 1px;
}

/* =========================================
   FEATURES
   ========================================= */

.feature-grid {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 18px;
}

.feature-card {
    padding: 30px;

    border-radius: 16px;

    background:
        rgba(255, 255, 255, 0.03);

    border:
        1px solid rgba(255, 255, 255, 0.08);

    transition: 0.3s;
}

.feature-card:hover {
    transform: translateY(-5px);

    background:
        rgba(124, 58, 237, 0.06);

    border-color:
        rgba(168, 85, 247, 0.25);

    box-shadow:
        0 15px 40px rgba(0, 0, 0, 0.25);
}

.feature-card > div {
    font-size: 30px;

    margin-bottom: 20px;
}

.feature-card h3 {
    margin-bottom: 10px;
}

.feature-card p {
    color: #71717a;

    font-size: 13px;

    line-height: 1.7;
}

/* =========================================
   FAQ
   ========================================= */

.faq-container {
    max-width: 800px;

    margin: auto;
}

details {
    margin-bottom: 12px;

    padding: 20px;

    border-radius: 12px;

    background:
        rgba(255, 255, 255, 0.03);

    border:
        1px solid rgba(255, 255, 255, 0.08);

    transition: 0.25s;
}

details:hover {
    border-color:
        rgba(168, 85, 247, 0.25);
}

details[open] {
    background:
        rgba(124, 58, 237, 0.05);
}

summary {
    cursor: pointer;

    font-weight: 700;
}

details p {
    margin-top: 15px;

    color: #71717a;

    line-height: 1.7;

    font-size: 14px;
}

/* =========================================
   FOOTER
   ========================================= */

footer {
    padding: 60px 20px;

    text-align: center;

    border-top:
        1px solid rgba(255, 255, 255, 0.07);

    background:
        rgba(0, 0, 0, 0.25);
}

.footer-logo {
    margin-bottom: 12px;

    color: #c084fc;

    font-weight: 900;

    letter-spacing: 3px;
}

footer p {
    color: #52525b;

    font-size: 12px;
}

.footer-links {
    display: flex;

    justify-content: center;

    gap: 20px;

    margin-top: 20px;
}

.footer-links a {
    color: #71717a;

    text-decoration: none;

    font-size: 12px;

    transition: 0.2s;
}

.footer-links a:hover {
    color: #c084fc;
}

/* =========================================
   CART MODAL
   ========================================= */

.modal {
    position: fixed;

    inset: 0;

    z-index: 1000;

    display: none;

    align-items: center;
    justify-content: center;

    padding: 20px;

    background:
        rgba(0, 0, 0, 0.75);

    backdrop-filter: blur(12px);
}

.modal.active {
    display: flex;

    animation:
        modalFade 0.2s ease;
}

@keyframes modalFade {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.modal-content {
    position: relative;

    width: 100%;
    max-width: 500px;

    max-height: 85vh;

    overflow-y: auto;

    padding: 30px;

    border-radius: 20px;

    background: #0b0b10;

    border:
        1px solid rgba(168, 85, 247, 0.25);

    box-shadow:
        0 30px 100px rgba(0, 0, 0, 0.6);

    animation:
        modalSlide 0.25s ease;
}

@keyframes modalSlide {
    from {
        transform: translateY(20px) scale(0.98);
    }

    to {
        transform: translateY(0) scale(1);
    }
}

.modal-content h2 {
    margin-bottom: 25px;

    font-size: 28px;
}

.close-button {
    position: absolute;

    top: 18px;
    right: 18px;

    width: 35px;
    height: 35px;

    border: 0;

    border-radius: 9px;

    background:
        rgba(255, 255, 255, 0.06);

    color: white;

    font-size: 22px;

    cursor: pointer;

    transition: 0.2s;
}

.close-button:hover {
    background:
        rgba(239, 68, 68, 0.15);

    color: #f87171;
}

.empty-cart {
    padding: 30px;

    text-align: center;

    color: #71717a;
}

.cart-item {
    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 15px 0;

    border-bottom:
        1px solid rgba(255, 255, 255, 0.07);
}

.cart-item strong {
    font-size: 15px;
}

.cart-item p {
    margin-top: 4px;

    color: #a855f7;

    font-size: 13px;
}

.cart-item button {
    width: 32px;
    height: 32px;

    border: 0;

    border-radius: 8px;

    background:
        rgba(239, 68, 68, 0.08);

    color: #f87171;

    cursor: pointer;

    transition: 0.2s;
}

.cart-item button:hover {
    background:
        rgba(239, 68, 68, 0.2);

    transform: scale(1.05);
}

.cart-total {
    display: flex;

    justify-content: space-between;

    margin-top: 25px;

    padding-top: 20px;

    border-top:
        1px solid rgba(255, 255, 255, 0.08);
}

.cart-total strong {
    color: #c084fc;

    font-size: 20px;
}

.checkout-button {
    width: 100%;

    margin-top: 20px;

    padding: 14px;

    border: 0;

    border-radius: 10px;

    background:
        linear-gradient(
            135deg,
            #7c3aed,
            #9333ea
        );

    color: white;

    font-weight: 900;

    cursor: pointer;

    transition: 0.25s;
}

.checkout-button:hover {
    transform: translateY(-2px);

    box-shadow:
        0 10px 30px rgba(124, 58, 237, 0.3);
}

/* =========================================
   NOTIFICATIONS
   ========================================= */

.shadow-notification {
    position: fixed;

    left: 50%;
    bottom: 30px;

    transform:
        translate(-50%, 20px);

    z-index: 9999;

    padding: 14px 20px;

    border-radius: 12px;

    background: #111116;

    border:
        1px solid rgba(168, 85, 247, 0.35);

    box-shadow:
        0 10px 40px rgba(0, 0, 0, 0.5),
        0 0 25px rgba(124, 58, 237, 0.15);

    color: white;

    font-size: 13px;

    font-weight: 700;

    opacity: 0;

    pointer-events: none;

    transition:
        opacity 0.3s ease,
        transform 0.3s ease;
}

.shadow-notification.show {
    opacity: 1;

    transform:
        translate(-50%, 0);
}

/* =========================================
   SCROLL REVEAL
   ========================================= */

.reveal {
    opacity: 0;

    transform:
        translateY(25px);

    transition:
        opacity 0.7s ease,
        transform 0.7s ease;
}

.reveal.visible {
    opacity: 1;

    transform:
        translateY(0);
}

/* =========================================
   CUSTOM SCROLLBAR
   ========================================= */

::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #050507;
}

::-webkit-scrollbar-thumb {
    background:
        linear-gradient(
            #7c3aed,
            #a855f7
        );

    border-radius: 999px;
}

::-webkit-scrollbar-thumb:hover {
    background: #c084fc;
}

/* =========================================
   SELECTION
   ========================================= */

::selection {
    background:
        rgba(124, 58, 237, 0.45);

    color: white;
}

/* =========================================
   RESPONSIVE — TABLET
   ========================================= */

@media (max-width: 1000px) {

    .navbar nav {
        gap: 18px;
    }

    .feature-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .rank-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }
}

/* =========================================
   RESPONSIVE — MOBILE
   ========================================= */

@media (max-width: 700px) {

    .navbar {
        padding: 14px 20px;
    }

    .navbar nav {
        display: none;
    }

    .logo strong {
        font-size: 14px;
    }

    .logo-icon {
        width: 38px;
        height: 38px;

        font-size: 18px;
    }

    .cart-button {
        padding: 9px 12px;
    }

    .hero {
        min-height: 650px;

        padding:
            70px 20px 90px;
    }

    .hero h1 {
        letter-spacing: -3px;
    }

    .hero p {
        font-size: 15px;
    }

    .hero-buttons {
        flex-direction: column;
    }

    .primary-button,
    .secondary-button {
        width: 100%;
    }

    .stats {
        grid-template-columns: 1fr;

        margin-bottom: 80px;
    }

    .section {
        width: 92%;

        margin-bottom: 100px;
    }

    .section-heading {
        margin-bottom: 40px;
    }

    .rank-grid {
        grid-template-columns: 1fr;
    }

    .feature-grid {
        grid-template-columns: 1fr;
    }

    .modal-content {
        padding: 25px;

        border-radius: 16px;
    }
}

/* =========================================
   VERY SMALL PHONES
   ========================================= */

@media (max-width: 400px) {

    .logo small {
        display: none;
    }

    .logo strong {
        font-size: 13px;
    }

    .hero h1 {
        font-size: 52px;
    }

    .status {
        font-size: 10px;
    }

    .server-ip strong {
        font-size: 13px;
    }
}

/* =========================================
   REDUCED MOTION
   ========================================= */

@media (prefers-reduced-motion: reduce) {

    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;

        animation-iteration-count: 1 !important;

        scroll-behavior: auto !important;

        transition-duration: 0.01ms !important;
    }
}
