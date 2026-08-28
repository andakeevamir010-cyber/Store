/* =========================================
   SHADOW NETWORK STORE
   COMPLETE SCRIPT
   ========================================= */

let cart = [];


/* =========================================
   CONFIG HELPERS
   ========================================= */

function getConfig() {
    return window.SHADOW_CONFIG || null;
}


/* =========================================
   INITIALIZE WEBSITE
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const config = getConfig();

    if (!config) {
        console.error("Shadow Network config.js was not loaded.");
        return;
    }

    load
