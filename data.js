// js/data.js
var defaultProducts = [
    // --- APPAREL ---
    { id: 1, name: "Peanuts comfort T-shirts Heartthrobe Snoopy", category: "Apparel", price: 135.00, stock: 45, icon: "fa-shirt", color: "#000000", image: "https://peanuts.store/cdn/shop/files/unisex-garment-dyed-heavyweight-t-shirt-black-front-2-6966870892794_720x.jpg?v=1768328321" },
    { id: 2, name: "Charlie Brown Classic Grey Hoodie", category: "Apparel", price: 185.00, stock: 15, icon: "fa-shirt", color: "#6c757d", image: "https://peanuts.store/cdn/shop/products/PNTS-NED-9-100861-SPORT-GREY-MF_425x.jpg?v=1687379564" },
    { id: 3, name: "Peanuts American Football Jersey", category: "Apparel", price: 210.00, stock: 22, icon: "fa-shirt", color: "#f8f9fa", image: "https://peanuts.store/cdn/shop/files/all-over-print-american-football-jersey-white-front-69a75e29c0578_720x.png?v=1772576364" },
    { id: 4, name: "Peanuts Stamp Lounge Pants", category: "Apparel", price: 165.00, stock: 4, icon: "fa-shirt", color: "#777777", image: "https://peanuts.store/cdn/shop/files/all-over-print-unisex-wide-leg-pants-white-back-67ceff4d0658b_425x.jpg?v=1741619125" },

    // --- ACCESSORIES ---
    { id: 5, name: "Peanuts Gang Bagpack", category: "Accessories", price: 65.00, stock: 18, icon: "fa-bag-shopping", color: "#000000", image: "https://peanuts.store/cdn/shop/products/PNTS-CMIC-13-100633-RO_425x.jpg?v=1687464164" },
    { id: 6, name: "Guitar Strap Peanuts Zig Zag", category: "Accessories", price: 45.00, stock: 30, icon: "fa-wallet", color: "#dc3545", image: "https://peanuts.store/cdn/shop/files/GS-WPNT001-2_425x.jpg?v=1773151825" },
    { id: 7, name: "Peanuts Mystery Enomel Pin Blind Box", category: "Accessories", price: 28.00, stock: 65, icon: "fa-thumbtack", color: "#FFCC00", image: "https://peanuts.store/cdn/shop/files/PIN-PNTBC-01-2_425x.jpg?v=1773151794" },
    { id: 8, name: "Peanuts Gang Bi-Fold Wallet", category: "Accessories", price: 85.00, stock: 11, icon: "fa-wallet", color: "#6c757d", image: "https://peanuts.store/cdn/shop/files/WBF-PU-PNTCN-2_425x.jpg?v=1773151811" },

    // --- HOME & LIVING ---
    { id: 9, name: "Peanuts Pint Glass Snoopy", category: "Home & Living", price: 39.00, stock: 3, icon: "fa-mug-hot", color: "#000000", image: "https://peanuts.store/cdn/shop/products/PNTS-BUS-1-101009-FT-MF_425x.jpg?v=1686751337" },
    { id: 10, name: "Peanuts Athletic Department Snoopy Water Bottle", category: "Home & Living", price: 55.00, stock: 14, icon: "fa-glass-water", color: "#17a2b8", image: "https://peanuts.store/cdn/shop/products/PNTS-PAT50-15-100960-FT-MF_576x.jpg?v=1688665670" },
    { id: 11, name: "Snoopy Navy Insulated Tumbler with Straw", category: "Home & Living", price: 115.00, stock: 25, icon: "fa-bottle-water", color: "#FFCC00", image: "https://peanuts.store/cdn/shop/files/insulated-tumbler-with-a-straw-navy-20-oz-front-66ffa1e84f254_navy_425x.jpg?v=1728029299" },
    { id: 12, name: "Peanuts 75th Anniversary Stainless Steel Bottle", category: "Home & Living", price: 95.00, stock: 8, icon: "fa-bottle-water", color: "#28a745", image: "https://peanuts.store/cdn/shop/products/PNTS-PAT50-15-100960-RO_425x.jpg?v=1688665670" },
    { id: 13, name: "Snoopy Cozy Folded Blanket", category: "Home & Living", price: 175.00, stock: 12, icon: "fa-bed", color: "#dc3545", image: "https://peanuts.store/cdn/shop/products/PNTS-BLNKT-13-100206-60X80-FOLD-MF_425x.jpg?v=1689188446" },

    // --- COLLECTIBLES ---
    { id: 14, name: "Peanuts X Crislo X Snoopy X Woodstock Silver Necklace", category: "Collectibles", price: 145.00, stock: 7, icon: "fa-image", color: "#000000", image: "https://peanuts.store/cdn/shop/files/SNPY-CRIS1_12_MF.jpg?v=1713441667" },
    { id: 15, name: "Peanuts Snoopy's Doghouse Playset", category: "Collectibles", price: 250.00, stock: 2, icon: "fa-award", color: "#FFCC00", image: "https://peanuts.store/cdn/shop/files/40483_c_425x.jpg?v=1757005129" },
    { id: 16, name: "Peanuts Astronaut Snoopy With Helmet", category: "Collectibles", price: 250.00, stock: 5, icon: "fa-award", color: "#cccccc", image: "https://peanuts.store/cdn/shop/files/40484_a_425x.jpg?v=1757005109" }
];

var defaultSales = [
    { productId: 1, unitsSold: 290 }, { productId: 2, unitsSold: 115 }, { productId: 3, unitsSold: 98 }, { productId: 4, unitsSold: 45 },
    { productId: 5, unitsSold: 60 }, { productId: 6, unitsSold: 40 }, { productId: 7, unitsSold: 180 }, { productId: 8, unitsSold: 35 },
    { productId: 9, unitsSold: 245 }, { productId: 10, unitsSold: 70 }, { productId: 11, unitsSold: 110 }, { productId: 12, unitsSold: 55 },
    { productId: 13, unitsSold: 62 }, { productId: 14, unitsSold: 38 }, { productId: 15, unitsSold: 150 }, { productId: 16, unitsSold: 24 }
];

if (!localStorage.getItem('productsDataset')) {
    localStorage.setItem('productsDataset', JSON.stringify(defaultProducts));
}
if (!localStorage.getItem('salesDataset')) {
    localStorage.setItem('salesDataset', JSON.stringify(defaultSales));
}

window.productsDataset = JSON.parse(localStorage.getItem('productsDataset'));
window.salesDataset = JSON.parse(localStorage.getItem('salesDataset'));

window.saveToLocalStorage = function() {
    localStorage.setItem('productsDataset', JSON.stringify(window.productsDataset));
    localStorage.setItem('salesDataset', JSON.stringify(window.salesDataset));
};