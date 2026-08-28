// =========================================
// SHADOW NETWORK STORE CONFIG
// =========================================

const SHADOW_CONFIG = {

    // ================================
    // SERVER
    // ================================

    server: {
        name: "Shadow Network",
        ip: "play.shadownetwork.net",
        version: "1.12.2",

        // Change this later if you have a real
        // server status API.
        status: "online"
    },


    // ================================
    // STORE
    // ================================

    currency: "USD",

    ranks: [

        {
            id: "vip",
            name: "VIP",
            luckPermsGroup: "vip",
            price: 4.99,

            description:
                "Enter the Shadow with your first upgrade.",

            perks: [
                "VIP Prefix",
                "Exclusive Commands",
                "VIP Chat Color",
                "Special Perks"
            ]
        },


        {
            id: "premium",
            name: "PREMIUM",
            luckPermsGroup: "premium",
            price: 9.99,

            description:
                "Step deeper into the Shadow.",

            perks: [
                "Everything in VIP",
                "Premium Prefix",
                "More Commands",
                "Exclusive Perks"
            ]
        },


        {
            id: "elite",
            name: "ELITE",
            luckPermsGroup: "elite",
            price: 19.99,

            description:
                "Become one of the elite.",

            perks: [
                "Everything in Premium",
                "Elite Prefix",
                "Exclusive Commands",
                "Elite Cosmetics",
                "Special Rewards"
            ],

            popular: true
        },


        {
            id: "shadow",
            name: "SHADOW",
            luckPermsGroup: "shadow",
            price: 29.99,

            description:
                "Command the darkness.",

            perks: [
                "Everything in Elite",
                "Shadow Prefix",
                "Powerful Commands",
                "Exclusive Cosmetics",
                "Shadow Rewards"
            ]
        },


        {
            id: "shadowplus",
            name: "SHADOW+",
            luckPermsGroup: "shadowplus",
            price: 49.99,

            description:
                "The ultimate Shadow Network rank.",

            perks: [
                "Everything in Shadow",
                "Shadow+ Prefix",
                "Ultimate Commands",
                "Exclusive Cosmetics",
                "Maximum Perks",
                "Priority Support"
            ]
        }

    ],


    // ================================
    // SOCIAL LINKS
    // ================================

    links: {

        discord: "#",

        website: "#",

        support: "#"

    },


    // ================================
    // CHECKOUT
    // ================================

    checkout: {

        enabled: false,

        /*
         * We will connect this to a real payment
         * provider later.
         *
         * DO NOT put API keys, secret keys,
         * server passwords, or LuckPerms
         * credentials in this file.
         */

        provider: "not-configured",

        checkoutUrl: ""

    }

};
