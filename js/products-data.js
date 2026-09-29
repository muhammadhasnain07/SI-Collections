/**
 * ==============================================================================
 * 👑 SI COLLECTION - PRODUCT PICTURES MANAGER (BY MUHAMMAD SHAMOIL)
 * ==============================================================================
 * محمد شموئل بھائی! آپ جس بھی 1 پروڈکٹ کی تصویر کوڈ میں بدلنا چاہتے ہیں،
 * صرف نیچے دیے گئے "MY_PRODUCT_PICTURES" کے اندر اس پروڈکٹ کے ID کے آگے
 * اپنی مین تصویر (main) اور 3 ذیلی تصاویر (related) کے لنکس تبدیل کر دیں۔
 * 
 * 💡 فائدہ:
 * صرف اور صرف اسی 1 پروڈکٹ کی تصویر تبدیل ہوگی! باقی 19 یا باقی 599 پروڈکٹس
 * کو بالکل کوئی فرق نہیں پڑے گا اور وہ اپنی جگہ محفوظ رہیں گے۔
 * 
 * 🔒 نوٹس:
 * پبلک ویب سائٹ سے تصویر بدلنے کا کوئی بھی بٹن ہٹا دیا گیا ہے تاکہ کوئی کسٹمر
 * یا عام یوزر تصویر تبدیل نہ کر سکے، صرف آپ کوڈ میں تصویریں کنٹرول کریں گے!
 * ==============================================================================
 */

const MY_PRODUCT_PICTURES = {
    // --------------------------------------------------------------------------
    // 👞 کیٹیگری: CASUAL SHOES (جوتے) - پروڈکٹ 1 سے 30 تک
    // --------------------------------------------------------------------------
    // اگر جوتے #1 کی تصویر بدلنی ہو:
    "casual-shoes-1": {
        main: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80",
        related: [
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80"
        ]
    },
    // اگر جوتے #2 کی تصویر بدلنی ہو:
    "casual-shoes-2": {
        main: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80",
        related: [
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80"
        ]
    },
    // اگر جوتے #3 کی تصویر بدلنی ہو:
    "casual-shoes-3": {
        main: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80",
        related: [
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80"
        ]
    },

    // --------------------------------------------------------------------------
    // ⌚ کیٹیگری: LUXURY WATCHES (گھڑیاں)
    // --------------------------------------------------------------------------
    // اگر گھڑی #1 کی تصویر بدلنی ہو:
    "watches-1": {
        main: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
        related: [
            "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80"
        ]
    },

    // --------------------------------------------------------------------------
    // 🌸 کیٹیگری: FRAGRANCES & PERFUMES (پرفیومز)
    // --------------------------------------------------------------------------
    // اگر پرفیوم #1 کی تصویر بدلنی ہو:
    "perfumes-1": {
        main: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80",
        related: [
            "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=600&q=80"
        ]
    }

    // 💡 نوٹ: آپ اسی طرح جس بھی پروڈکٹ کا ID چاہیں (مثال: formal-shoes-1, jackets-1, kurta-1)
    // یہاں شامل کر کے اپنی ذاتی تصویریں لگا سکتے ہیں!
};

// ==================== 20 CATEGORIES LIST ====================
const SI_CATEGORIES = [
    { id: "casual-shoes", name: "Casual Shoes", icon: "fa-shoe-prints", count: 30 },
    { id: "formal-shoes", name: "Formal & Oxford Shoes", icon: "fa-socks", count: 30 },
    { id: "sneakers", name: "Sneakers & Joggers", icon: "fa-person-running", count: 30 },
    { id: "boots", name: "Leather Boots & Chelsea", icon: "fa-mitten", count: 30 },
    { id: "watches", name: "Luxury Watches", icon: "fa-clock", count: 30 },
    { id: "wallets", name: "Wallets & Cardholders", icon: "fa-wallet", count: 30 },
    { id: "belts", name: "Pure Leather Belts", icon: "fa-ring", count: 30 },
    { id: "sunglasses", name: "Designer Sunglasses", icon: "fa-glasses", count: 30 },
    { id: "perfumes", name: "Fragrances & Perfumes", icon: "fa-spray-can-sparkles", count: 30 },
    { id: "t-shirts", name: "T-Shirts & Polos", icon: "fa-shirt", count: 30 },
    { id: "shirts", name: "Casual & Formal Shirts", icon: "fa-user-tie", count: 30 },
    { id: "tracksuits", name: "Tracksuits & Activewear", icon: "fa-person-walking", count: 30 },
    { id: "jackets", name: "Jackets & Hoodies", icon: "fa-vest-patches", count: 30 },
    { id: "jeans", name: "Denim Jeans & Chinos", icon: "fa-bars-staggered", count: 30 },
    { id: "kurta", name: "Traditional Kurta & Kameez", icon: "fa-person", count: 30 },
    { id: "bags", name: "Backpacks & Duffle Bags", icon: "fa-bag-shopping", count: 30 },
    { id: "caps", name: "Caps & Beanies", icon: "fa-hat-cowboy", count: 30 },
    { id: "jewelry", name: "Rings, Chains & Bracelets", icon: "fa-gem", count: 30 },
    { id: "cufflinks", name: "Luxury Cufflinks & Tie Pins", icon: "fa-award", count: 30 },
    { id: "grooming", name: "Grooming & Trimmer Kits", icon: "fa-scissors", count: 30 }
];

// Curated high quality image seeds per category for realistic visual display
const CATEGORY_IMAGE_SEEDS = {
    "casual-shoes": [
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80"
    ],
    "formal-shoes": [
        "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1582897027650-716499e9dc72?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&w=600&q=80"
    ],
    "sneakers": [
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?auto=format&fit=crop&w=600&q=80"
    ],
    "boots": [
        "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=600&q=80"
    ],
    "watches": [
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80"
    ],
    "wallets": [
        "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=600&q=80"
    ],
    "belts": [
        "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1585856469733-4df452bb1667?auto=format&fit=crop&w=600&q=80"
    ],
    "sunglasses": [
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=600&q=80"
    ],
    "perfumes": [
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=600&q=80"
    ],
    "t-shirts": [
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80"
    ],
    "shirts": [
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1620012253295-c15c429fbb41?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=600&q=80"
    ],
    "tracksuits": [
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1483721074573-586540da5703?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=600&q=80"
    ],
    "jackets": [
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80"
    ],
    "jeans": [
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=600&q=80"
    ],
    "kurta": [
        "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&w=600&q=80"
    ],
    "bags": [
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?auto=format&fit=crop&w=600&q=80"
    ],
    "caps": [
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=600&q=80"
    ],
    "jewelry": [
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1611591475870-96f7c181518f?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=600&q=80"
    ],
    "cufflinks": [
        "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=600&q=80"
    ],
    "grooming": [
        "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"
    ]
};

// ==================== GENERATE MASTER DATASET (600 PRODUCTS) ====================
// Har product ka apna distinct ID hai jaise `casual-shoes-1`, `casual-shoes-2` ...
const SI_MASTER_PRODUCTS = [];

SI_CATEGORIES.forEach(category => {
    const seeds = CATEGORY_IMAGE_SEEDS[category.id] || [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80"
    ];

    for (let i = 1; i <= 30; i++) {
        const prodId = `${category.id}-${i}`;
        
        // Base Price Range
        const basePrices = {
            "watches": 3500 + (i * 150),
            "formal-shoes": 3800 + (i * 120),
            "boots": 4500 + (i * 130),
            "sneakers": 3200 + (i * 100),
            "casual-shoes": 2600 + (i * 90),
            "perfumes": 2800 + (i * 110),
            "jackets": 4200 + (i * 140),
            "tracksuits": 3600 + (i * 90),
            "kurta": 2900 + (i * 100),
            "jeans": 2400 + (i * 80),
            "shirts": 2200 + (i * 70),
            "t-shirts": 1600 + (i * 50),
            "bags": 2700 + (i * 80),
            "wallets": 1500 + (i * 60),
            "belts": 1400 + (i * 50),
            "sunglasses": 1800 + (i * 70),
            "jewelry": 1200 + (i * 40),
            "caps": 950 + (i * 30),
            "cufflinks": 1300 + (i * 50),
            "grooming": 2500 + (i * 90)
        };
        const price = basePrices[category.id] || 2500;

        // Individual Product Names
        const titles = [
            "VIP Royal Edition", "Executive Matte Black", "Golden Luxe Series", "Signature Masterpiece",
            "Midnight Obsidian", "Urban Classic Fit", "Imperial Heritage", "Monarch Elite",
            "Carbon Fiber Style", "Vintage Leather Touch", "Streetwear Premium", "Platinum Finish",
            "Diamond Cut Accent", "Velvet Comfort Line", "Ultra Flex Performance", "Aero Dynamic Light",
            "Crown Jewel Edition", "Sahara Sand Gold", "Nordic Frost Finish", "Tokyo Cyber Stealth",
            "Milan Runway Limited", "Parisian High Fashion", "Prestige Falcon Edition", "Arabic Calligraphy Series",
            "Titanium Core Heavy", "Zero Gravity Soft", "Velvet Touch Bespoke", "Royal Crest Special",
            "Iconic Heritage 2026", "Muhammad Shamoil Signature"
        ];
        const titleSuffix = titles[(i - 1) % titles.length];

        // Specific image index mapping with unique seed for Unsplash/Picsum
        const mainImgUrl = `${seeds[0]}&sig=${category.id}_${i}_main`;
        const sub1 = `${seeds[1]}&sig=${category.id}_${i}_sub1`;
        const sub2 = `${seeds[2]}&sig=${category.id}_${i}_sub2`;
        const sub3 = `${seeds[3]}&sig=${category.id}_${i}_sub3`;

        SI_MASTER_PRODUCTS.push({
            id: prodId,
            category: category.id,
            categoryName: category.name,
            name: `${category.name} - ${titleSuffix} (#${i})`,
            price: price,
            originalPrice: Math.round(price * 1.35),
            badge: (i % 5 === 0) ? "HOT" : (i % 7 === 0) ? "VIP" : (i % 3 === 0) ? "BESTSELLER" : "NEW",
            mainImage: mainImgUrl,
            relatedImages: [sub1, sub2, sub3],
            description: `Exclusive luxury ${category.name} handcrafted for SI Collection by Muhammad Shamoil. Premium materials, durable craftsmanship, and sophisticated VIP aesthetics tailored for Pakistani and international fashion enthusiasts.`,
            features: [
                "100% Genuine Quality Guarantee",
                "Fast Cash on Delivery all across Pakistan",
                "Official SI Collection Seal & Verification",
                "Muhammad Shamoil Signature Packaging"
            ]
        });
    }
});

// Function to get active products with overrides applied
function getActiveProductsList() {
    return SI_MASTER_PRODUCTS.map(product => {
        if (MY_PRODUCT_PICTURES[product.id]) {
            const custom = MY_PRODUCT_PICTURES[product.id];
            return {
                ...product,
                mainImage: custom.main || product.mainImage,
                relatedImages: (custom.related && custom.related.length === 3) 
                    ? custom.related 
                    : product.relatedImages
            };
        }
        return product;
    });
}
