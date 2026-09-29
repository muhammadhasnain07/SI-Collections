/**
 * SI COLLECTION - MAIN INTERACTIVE ENGINE
 * Owner: Muhammad Shamoil | WhatsApp & Call: +92 330 8464118
 */

const SI_CONFIG = {
    ownerName: "Muhammad Shamoil",
    phoneDisplay: "+92 330 8464118",
    phoneRaw: "923308464118",
    logoUrl: "https://i.postimg.cc/V65xt2xS/Whats-App-Image-2026-09-27-at-5-35-21-PM.jpg",
    links: {
        whatsappGroup: "https://chat.whatsapp.com/F7Mjb5TKiUy6WYHyfE3d5q?s=qt&p=a&mlu=4",
        whatsappDirect: "https://wa.me/923308464118",
        facebook: "https://www.facebook.com/profile.php?id=61564811677751",
        tiktok: "https://www.tiktok.com/@si.collection89?_r=1&_t=ZS-99cGPaaiu2P",
        instagram: "https://www.instagram.com/sicollection_2486?utm_source=qr&stkn=MTZscjd4Mzd1ZGxjZQ=="
    }
};

// State Variables
let currentCategory = "all";
let currentSearchQuery = "";
let currentProductList = [];
let displayedProductCount = 24; // Initial batch for high performance
let currentlyViewedProduct = null;

// ==================== INITIALIZATION ====================
document.addEventListener("DOMContentLoaded", () => {
    initLogo();
    
    // Check if category is specified in URL query (e.g. ?category=casual-shoes)
    const urlParams = new URLSearchParams(window.location.search);
    const catFromUrl = urlParams.get("category");
    if (catFromUrl) {
        currentCategory = catFromUrl;
    } else {
        const preselected = localStorage.getItem("si_target_category");
        if (preselected && preselected !== "all") {
            currentCategory = preselected;
            localStorage.removeItem("si_target_category");
        }
    }

    initSidebarCategories();
    initSearchEngine();
    initMobileDrawer();
    initProductGrid();
    initSocialLinks();
});

// Logo setup with fallback
function initLogo() {
    const logos = document.querySelectorAll(".brand-logo-img");
    logos.forEach(img => {
        img.src = SI_CONFIG.logoUrl;
        img.onerror = () => {
            img.src = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=150&q=80";
        };
    });
}

// Bind official social links
function initSocialLinks() {
    document.querySelectorAll(".link-wa-group").forEach(a => a.href = SI_CONFIG.links.whatsappGroup);
    document.querySelectorAll(".link-wa-direct").forEach(a => a.href = SI_CONFIG.links.whatsappDirect);
    document.querySelectorAll(".link-facebook").forEach(a => a.href = SI_CONFIG.links.facebook);
    document.querySelectorAll(".link-tiktok").forEach(a => a.href = SI_CONFIG.links.tiktok);
    document.querySelectorAll(".link-instagram").forEach(a => a.href = SI_CONFIG.links.instagram);
    document.querySelectorAll(".link-phone-call").forEach(a => a.href = `tel:+${SI_CONFIG.phoneRaw}`);
}

// ==================== SIDEBAR & CATEGORIES ====================
function initSidebarCategories() {
    const catList = document.getElementById("sidebarCategoryList");
    if (!catList) return;

    catList.innerHTML = "";

    SI_CATEGORIES.forEach(cat => {
        const li = document.createElement("li");
        li.className = `category-row ${currentCategory === cat.id ? 'active' : ''}`;
        li.id = `cat-btn-${cat.id}`;
        li.onclick = () => selectCategory(cat.id);

        li.innerHTML = `
            <div class="cat-left-info">
                <i class="fa-solid ${cat.icon}"></i>
                <span>${cat.name}</span>
            </div>
            <span class="cat-count">30</span>
        `;
        catList.appendChild(li);
    });

    // Sidebar Category Filter Input
    const filterInput = document.getElementById("sidebarCatFilter");
    if (filterInput) {
        filterInput.addEventListener("input", (e) => {
            const term = e.target.value.toLowerCase().trim();
            const rows = catList.querySelectorAll(".category-row");
            rows.forEach(row => {
                const text = row.innerText.toLowerCase();
                row.style.display = text.includes(term) ? "flex" : "none";
            });
        });
    }
}

function selectCategory(catId) {
    if (!document.getElementById("productsMasterGrid")) {
        window.location.href = `shop.html?category=${encodeURIComponent(catId)}`;
        return;
    }

    currentCategory = catId;
    currentSearchQuery = "";
    displayedProductCount = 24;

    try {
        const newUrl = catId === 'all' ? 'shop.html' : `shop.html?category=${encodeURIComponent(catId)}`;
        window.history.replaceState(null, '', newUrl);
    } catch(e) {}

    // Reset search inputs
    const searchInput = document.getElementById("mainSearchInput");
    if (searchInput) searchInput.value = "";
    hideSearchDropdown();

    // Update active state in sidebar
    const allBtn = document.getElementById("allProductsBtn");
    if (allBtn) {
        if (catId === "all") allBtn.classList.add("active");
        else allBtn.classList.remove("active");
    }

    document.querySelectorAll(".category-row").forEach(el => {
        el.classList.remove("active");
    });
    const activeEl = document.getElementById(`cat-btn-${catId}`);
    if (activeEl) activeEl.classList.add("active");

    // Close mobile drawer if open
    closeMobileSidebar();

    // Render filtered products
    renderProducts();

    // Scroll to top of shop
    const mainContent = document.querySelector(".main-shop-content");
    if (mainContent) {
        mainContent.scrollIntoView({ behavior: "smooth" });
    }
}

// ==================== SEARCH BAR ENGINE & LIVE SUGGESTIONS ====================
function initSearchEngine() {
    const searchInput = document.getElementById("mainSearchInput");
    const searchDropdown = document.getElementById("searchDropdown");
    const clearBtn = document.getElementById("clearSearchBtn");
    const searchIcon = document.getElementById("mainSearchIcon");

    if (!searchInput || !searchDropdown) return;

    searchInput.addEventListener("input", (e) => {
        const val = e.target.value;
        if (clearBtn) clearBtn.style.display = val ? "block" : "none";
        handleLiveSearch(val);
    });

    searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            performExplicitSearch(searchInput.value);
        }
    });

    if (searchIcon) {
        searchIcon.addEventListener("click", () => {
            performExplicitSearch(searchInput.value);
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener("click", () => {
            searchInput.value = "";
            clearBtn.style.display = "none";
            hideSearchDropdown();
            currentSearchQuery = "";
            renderProducts();
        });
    }

    // Close dropdown on click outside
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".search-wrapper")) {
            hideSearchDropdown();
        }
    });
}

function handleLiveSearch(query) {
    const dropdown = document.getElementById("searchDropdown");
    const cleanQuery = query.toLowerCase().trim();

    if (!cleanQuery || cleanQuery.length < 2) {
        hideSearchDropdown();
        return;
    }

    const allProducts = getActiveProductsList();
    const matches = allProducts.filter(p => 
        p.name.toLowerCase().includes(cleanQuery) ||
        p.categoryName.toLowerCase().includes(cleanQuery) ||
        p.category.toLowerCase().includes(cleanQuery)
    );

    if (matches.length === 0) {
        dropdown.innerHTML = `
            <div style="padding: 16px; text-align: center; color: var(--text-muted); font-size: 13px;">
                <i class="fa-solid fa-magnifying-glass" style="margin-bottom: 6px; font-size: 18px; color: var(--yellow-gold);"></i><br>
                Koi product nahi mila "<b>${escapeHtml(query)}</b>" k liye.<br>
                <span style="font-size: 11px;">(Try: Shoes, Watch, Perfume, Jacket, Kurta)</span>
            </div>
        `;
        dropdown.style.display = "block";
        return;
    }

    let html = `
        <div class="search-dropdown-header">
            Matched Products (${matches.length})
        </div>
    `;

    // Take top 6 matches for dropdown
    matches.slice(0, 6).forEach(product => {
        html += `
            <div class="dropdown-item" onclick="openProductFromSearch('${product.id}')">
                <img src="${product.mainImage}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=100&q=80'">
                <div class="dropdown-item-info">
                    <div class="dropdown-item-title">${highlightMatch(product.name, cleanQuery)}</div>
                    <div class="dropdown-item-meta">
                        <span>${product.categoryName}</span>
                        <span class="dropdown-item-price">PKR ${product.price.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        `;
    });

    if (matches.length > 6) {
        html += `
            <div style="padding: 10px 16px; text-align: center; background: rgba(255,200,0,0.06); cursor: pointer; color: var(--yellow-gold); font-size: 12.5px; font-weight: 700;" onclick="performExplicitSearch('${cleanQuery}')">
                View all ${matches.length} matching products &rarr;
            </div>
        `;
    }

    dropdown.innerHTML = html;
    dropdown.style.display = "block";
}

function openProductFromSearch(productId) {
    hideSearchDropdown();
    window.location.href = `product.html?id=${encodeURIComponent(productId)}`;
}

function performExplicitSearch(query) {
    const cleanQuery = query.toLowerCase().trim();
    hideSearchDropdown();
    currentSearchQuery = cleanQuery;
    displayedProductCount = 24;

    // Reset sidebar category visual active state
    document.querySelectorAll(".category-row").forEach(el => el.classList.remove("active"));
    const allBtn = document.getElementById("allProductsBtn");
    if (allBtn) allBtn.classList.remove("active");

    renderProducts();
}

function hideSearchDropdown() {
    const dropdown = document.getElementById("searchDropdown");
    if (dropdown) dropdown.style.display = "none";
}

function highlightMatch(text, term) {
    const regex = new RegExp(`(${term})`, 'gi');
    return text.replace(regex, '<span style="color: var(--yellow-gold); font-weight: 800;">$1</span>');
}

// ==================== PRODUCT GRID RENDERING ====================
function initProductGrid() {
    renderProducts();

    // Sort Handler
    const sortSelect = document.getElementById("sortProductsSelect");
    if (sortSelect) {
        sortSelect.addEventListener("change", () => {
            renderProducts();
        });
    }
}

function renderProducts() {
    const grid = document.getElementById("productsMasterGrid");
    const countDisplay = document.getElementById("shopProductsCount");
    const headerTitle = document.getElementById("shopHeaderTitle");
    const searchIndicator = document.getElementById("searchIndicatorBox");

    if (!grid) return;

    let items = getActiveProductsList();

    // Apply Search Filter or Category Filter
    if (currentSearchQuery) {
        items = items.filter(p => 
            p.name.toLowerCase().includes(currentSearchQuery) ||
            p.categoryName.toLowerCase().includes(currentSearchQuery) ||
            p.category.toLowerCase().includes(currentSearchQuery)
        );
        if (headerTitle) headerTitle.innerText = `Search: "${currentSearchQuery}"`;
        if (searchIndicator) {
            searchIndicator.style.display = "flex";
            searchIndicator.innerHTML = `
                <div>Results for: <span>"${escapeHtml(currentSearchQuery)}"</span> (${items.length} items found)</div>
                <span class="reset-search-link" onclick="clearCurrentSearch()">Clear Search</span>
            `;
        }
    } else {
        if (searchIndicator) searchIndicator.style.display = "none";

        if (currentCategory === "all") {
            if (headerTitle) headerTitle.innerText = "All Products Collection";
        } else {
            items = items.filter(p => p.category === currentCategory);
            const catObj = SI_CATEGORIES.find(c => c.id === currentCategory);
            if (headerTitle && catObj) headerTitle.innerText = catObj.name;
        }
    }

    // Apply Sorting
    const sortSelect = document.getElementById("sortProductsSelect");
    if (sortSelect) {
        const val = sortSelect.value;
        if (val === "price-low") {
            items.sort((a, b) => a.price - b.price);
        } else if (val === "price-high") {
            items.sort((a, b) => b.price - a.price);
        } else if (val === "name-az") {
            items.sort((a, b) => a.name.localeCompare(b.name));
        }
    }

    currentProductList = items;

    if (countDisplay) {
        countDisplay.innerText = `Showing ${Math.min(displayedProductCount, items.length)} of ${items.length} Luxury Items`;
    }

    // Empty state
    if (items.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 70px 20px; background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--grey-700);">
                <i class="fa-solid fa-box-open" style="font-size: 42px; color: var(--yellow-gold); margin-bottom: 15px;"></i>
                <h3 style="color: #fff; font-size: 20px; margin-bottom: 8px;">No Products Found</h3>
                <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 20px;">Try searching for a different keyword or view all categories.</p>
                <button class="btn-vip-primary" onclick="selectCategory('all')">View All Products</button>
            </div>
        `;
        return;
    }

    // Render Cards (lazy slice for high UI responsiveness)
    const itemsToRender = items.slice(0, displayedProductCount);
    let cardsHtml = "";

    itemsToRender.forEach(product => {
        cardsHtml += `
            <a href="product.html?id=${product.id}" class="product-vip-card" style="text-decoration: none;">
                <div class="card-image-box">
                    <span class="card-badge-vip">${product.badge}</span>
                    <img src="${product.mainImage}" alt="${product.name}" class="card-product-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80'">
                </div>
                <div class="card-details-box">
                    <span class="card-category-tag">${product.categoryName}</span>
                    <h3 class="card-product-title">${product.name}</h3>
                    <div class="card-price-row">
                        <span class="card-price-current">PKR ${product.price.toLocaleString()}</span>
                        <span class="card-price-original">PKR ${product.originalPrice.toLocaleString()}</span>
                    </div>
                    <div class="card-actions-row">
                        <span class="btn-card-quickview">View Details</span>
                        <span onclick="event.preventDefault(); event.stopPropagation(); window.open('${getWhatsAppOrderLink(product)}', '_blank');" class="btn-card-whatsapp" title="Order on WhatsApp">
                            <i class="fa-brands fa-whatsapp"></i>
                        </span>
                    </div>
                </div>
            </a>
        `;
    });

    // Add "Load More" button if more products exist
    if (items.length > displayedProductCount) {
        cardsHtml += `
            <div style="grid-column: 1/-1; text-align: center; padding: 30px 0 10px;">
                <button class="btn-vip-secondary" onclick="loadMoreProducts()">
                    <i class="fa-solid fa-arrows-rotate"></i> Load More Products (${items.length - displayedProductCount} remaining)
                </button>
            </div>
        `;
    }

    grid.innerHTML = cardsHtml;
}

function loadMoreProducts() {
    displayedProductCount += 24;
    renderProducts();
}

function clearCurrentSearch() {
    const input = document.getElementById("mainSearchInput");
    if (input) input.value = "";
    currentSearchQuery = "";
    selectCategory("all");
}

// ==================== PRODUCT DETAIL NAVIGATION ====================
function openProductModal(productId) {
    window.location.href = `product.html?id=${encodeURIComponent(productId)}`;
}

// Generate Pre-filled WhatsApp Message
function getWhatsAppOrderLink(product) {
    const message = encodeURIComponent(
        `Assalam-o-Alaikum Muhammad Shamoil! 👋\n\n` +
        `I would like to order this item from SI Collection:\n` +
        `📦 *Product:* ${product.name}\n` +
        `🏷️ *Category:* ${product.categoryName}\n` +
        `💰 *Price:* PKR ${product.price.toLocaleString()}\n` +
        `🆔 *Code:* ${product.id}\n\n` +
        `Please confirm availability and Cash on Delivery details.`
    );
    return `https://wa.me/${SI_CONFIG.phoneRaw}?text=${message}`;
}

// ==================== MOBILE DRAWER & NAVIGATION ====================
function initMobileDrawer() {
    const toggleBtn = document.getElementById("mobileSidebarToggle");
    const sidebar = document.getElementById("shopSidebar");
    const overlay = document.getElementById("sidebarOverlay");
    const closeBtn = document.getElementById("sidebarCloseBtn");

    if (toggleBtn && sidebar && overlay) {
        toggleBtn.addEventListener("click", () => {
            sidebar.classList.add("active");
            overlay.classList.add("active");
        });

        overlay.addEventListener("click", () => {
            closeMobileSidebar();
        });

        if (closeBtn) {
            closeBtn.addEventListener("click", () => {
                closeMobileSidebar();
            });
        }
    }
}

function closeMobileSidebar() {
    const sidebar = document.getElementById("shopSidebar");
    const overlay = document.getElementById("sidebarOverlay");
    if (sidebar) sidebar.classList.remove("active");
    if (overlay) overlay.classList.remove("active");
}

// ==================== SIDEBAR CONTACT ACCORDION ====================
function toggleSidebarContact() {
    const card = document.getElementById("sidebarContactCard");
    if (card) {
        card.classList.toggle("expanded");
    }
}

// Simple Toast Notification
function showToastNotification(msg) {
    let toast = document.getElementById("siToast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "siToast";
        toast.style.position = "fixed";
        toast.style.bottom = "80px";
        toast.style.right = "20px";
        toast.style.background = "#000";
        toast.style.border = "1.5px solid var(--yellow-gold)";
        toast.style.color = "var(--yellow-gold-bright)";
        toast.style.padding = "14px 22px";
        toast.style.borderRadius = "10px";
        toast.style.fontSize = "13.5px";
        toast.style.fontWeight = "700";
        toast.style.boxShadow = "var(--shadow-vip)";
        toast.style.zIndex = "3000";
        toast.style.transition = "all 0.3s ease";
        document.body.appendChild(toast);
    }
    toast.innerText = msg;
    toast.style.display = "block";
    toast.style.opacity = "1";

    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.style.display = "none", 300);
    }, 4000);
}

// Helper: Escape HTML strings
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}
