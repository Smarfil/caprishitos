const products = [
    { name: "Nazgul Calendario Perpetuo 3D", type: "Figura de acción", origin: "El señor de los anillos", image: "", price: 30, top: 1, links: [
        "https://www.amazon.es/Calendario-perpetuo-Se%C3%B1or-los-anillos/dp/B0DCVQV2KM",
        "https://www.fnac.es/CAL-PERPETUO-3D-ESDLA-Goodies-Otro-producto-derivado/a11024766"
    ] },
    // Agregar más productos aquí...
];

let viewType = 'grid'; // default view type

// Función para renderizar productos
function renderProducts(filteredProducts) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    filteredProducts.forEach(product => {
        const productCard = `
            <div class="col mb-4 product-card ${viewType === 'grid' ? 'product-grid-view' : 'product-list-view'}">
                <div class="card">
                    <img src="${product.image || 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.origin}</p>
                        <p class="card-text">${product.price}€ aprox.</p>
                        <a href="${product.links[0]}" class="btn btn-primary" target="_blank">Comprar</a>
                    </div>
                </div>
            </div>
        `;
        productList.innerHTML += productCard;
    });
}

// Función para cambiar la vista (lista o grid)
function changeView(type) {
    viewType = type;
    renderProducts(products);
}

// Filtro de productos
function filterProducts() {
    const actionFigures = document.getElementById("action-figures").checked;
    const books = document.getElementById("books").checked;

    const filteredProducts = products.filter(product => {
        return (actionFigures && product.type === "Figura de acción") || (books && product.type === "Libro");
    });
    renderProducts(filteredProducts);
}

// Ordenación de productos
function sortProducts(event) {
    const sortType = event.target.value;
    let sortedProducts;

    if (sortType === "price-asc") {
        sortedProducts = [...products].sort((a, b) => a.price - b.price);
    } else if (sortType === "price-desc") {
        sortedProducts = [...products].sort((a, b) => b.price - a.price);
    } else if (sortType === "top") {
        sortedProducts = [...products].sort((a, b) => b.top - a.top);
    }

    renderProducts(sortedProducts);
}

// Inicialización
renderProducts(products);
