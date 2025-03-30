const products = [
    { name: "Nazgul Calendario Perpetuo 3D", type: "Figuras de acción", origin: "El señor de los anillos", image: "https://m.media-amazon.com/images/I/71lv2zd1uAL._AC_SX569_.jpg", price: 30, top: 3, links: [
        "https://www.amazon.es/Calendario-perpetuo-Se%C3%B1or-los-anillos/dp/B0DCVQV2KM",
        "https://www.fnac.es/CAL-PERPETUO-3D-ESDLA-Goodies-Otro-producto-derivado/a11024766"
    ] },
    { name: '"Rechicero" editorial Debolsillo (novela Mundodisco)', type: "Libros", origin: "Terry Pratchett", image: "", price: 0, top: 1, links: [] },
    { name: '"Brujerías" editorial Debolsillo (novela Mundodisco)', type: "Libros", origin: "Terry Pratchett", image: "", price: 0, top: 1, links: [] },
    { name: '"Pirómides" editorial Debolsillo (novela Mundodisco)', type: "Libros", origin: "Terry Pratchett", image: "", price: 0, top: 1, links: [] },
    { name: 'Vivi 28cm aprox.', type: "Peluches", origin: "Final Fantasy IX", image: "", price: 0, top: 1, links: [] },
    { name: "Gen asagiri", type: "Figuras de acción", origin: "Dr. Stone", image: "", price: 0, top: 1, links: [] },
    { name: "Señor de los Nazgul / Rey Brujo", type: "Figuras de acción", origin: "El señor de los anillos", image: "", price: 0, top: 1, links: [] },
    { name: "Brook", type: "Figuras de acción", origin: "One Piece", image: "", price: 0, top: 1, links: [] },
    { name: "Suika", type: "Figuras de acción", origin: "Dr. Stone", image: "", price: 0, top: 1, links: [] },
    { name: "La herencia de la tía Ágata", type: "Juegos de mesa", origin: "Bizak", image: "", price: 0, top: 1, links: [] },
    { name: "El señor de los anillos: Aventura hacia el Monte del Destino", type: "Juegos de mesa", origin: "Devir", image: "", price: 0, top: 1, links: [] },
    { name: "Pyramid Head", type: "Figuras de acción", origin: "Silent Hill 2", image: "", price: 0, top: 1, links: [] },
    { name: "Qiqi", type: "Figuras de acción", origin: "Genshin Impact", image: "", price: 0, top: 1, links: [] },
    { name: "Vamos a pegarnos con espadas de mentira", type: "Juegos de mesa", origin: "Exploding Kittens", image: "", price: 0, top: 1, links: [] },
    { name: "Yo Soy Tu Peli", type: "Juegos de mesa", origin: "HelloFun!", image: "", price: 0, top: 1, links: [] },
    { name: "¿Quién es quién? Super Mario", type: "Juegos de mesa", origin: "¿Quién es quién?", image: "", price: 0, top: 1, links: [] },
    { name: 'Elemento electro o dendro (grande 50cm)', type: "Peluches", origin: "Genshin Impact", image: "", price: 0, top: 1, links: [] },
    { name: "Animal Crossing: New Horizons", type: "Videojuegos", origin: "Nintendo Switch", image: "", price: 0, top: 1, links: [] },
    { name: "Zelda: Breath of the wild", type: "Videojuegos", origin: "Nintendo Switch", image: "", price: 0, top: 1, links: [] },
    { name: "Street Fighter VI", type: "Videojuegos", origin: "Xbox Series X", image: "", price: 0, top: 1, links: [] },
    { name: "The Boys (Cómics de Garth Ennis y Darick Robertson)", type: "Cómics", origin: "Garth Ennis, Darick Robertson", image: "", price: 0, top: 1, links: [] },
    { name: "Piratas del Caribe: La maldición de la perla negra", type: "Blu-ray", origin: "Disney", image: "", price: 0, top: 1, links: [] },
    { name: "Piratas del Caribe: El cofre del hombre muerto", type: "Blu-ray", origin: "Disney", image: "", price: 0, top: 1, links: [] },
    { name: "Piratas del Caribe: En el fin del mundo", type: "Blu-ray", origin: "Disney", image: "", price: 0, top: 1, links: [] },
    { name: "Nintendo Switch Sports", type: "Videojuegos", origin: "Nintendo Switch", image: "", price: 0, top: 1, links: [] },
    { name: "Paper Mario: La puerta milenaria", type: "Videojuegos", origin: "Nintendo Switch", image: "", price: 0, top: 1, links: [] },
    { name: "Asesinato en el Orient Express", type: "Blu-ray", origin: "Películas de 1974", image: "", price: 0, top: 1, links: [] },
    { name: "Alan Wake II DLC", type: "Videojuegos", origin: "Xbox Series X", image: "", price: 0, top: 1, links: [] },
    { name: "Clásicos", type: "Blu-ray", origin: "Películas", image: "", price: 0, top: 1, links: [] },
    { name: "Voces en la oscuridad (manga de Junji Ito)", type: "Cómics", origin: "Junji Ito", image: "", price: 0, top: 1, links: [] },
    { name: "Black Paradox (manga de Junji Ito)", type: "Cómics", origin: "Junji Ito", image: "", price: 0, top: 1, links: [] },
    { name: "InuYasha", type: "Blu-ray", origin: "Anime", image: "", price: 0, top: 1, links: [] },
    { name: "DaVinci Resolve Studio", type: "Softwares", origin: "Licencia", image: "", price: 0, top: 1, links: [] }
];

let viewType = 'grid'; // Default view type

const sortedByPopularity = [...products].sort((a, b) => b.top - a.top);

// Función para renderizar productos
function renderProducts(filteredProducts) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Limpiar lista de productos

    filteredProducts.forEach(product => {
        let productCard;
        
        if (viewType === 'grid') {
            // Vista en Grid (tarjetas)
            productCard = `
                <div class="col mb-4 product-card product-grid-view">
                    <div class="card">
                        <img src="${product.image || 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.origin}</p>
                            <p class="card-text">${product.price}€ aprox.</p>
                            <a onclick="viewProductDetail('${product.name}')" class="btn btn-primary" target="_blank">Ver</a>
                        </div>
                    </div>
                </div>
            `;
        } else if (viewType === 'list') {
            // Vista en Lista
            productCard = `
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-center">
                            <img src="${product.image || 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'}" class="me-3" style="width: 50px; height: 50px; object-fit: cover;" alt="${product.name}">
                            <div>
                                <h5 class="mb-1">${product.name}</h5>
                                <p class="mb-1">${product.origin}</p>
                                <small>${product.price}€ aprox.</small>
                            </div>
                        </div>
                        <a onclick="viewProductDetail('${product.name}')" class="btn btn-outline-primary btn-sm">Ver</a>
                    </li>
                </ul>
            `;
        }

        productList.innerHTML += productCard;
    });
}


function viewProductDetail(productName) {
    window.location.href = `detalle.html?name=${encodeURIComponent(productName)}`;
}

// Función para cambiar la vista (lista o grid)
function changeView(type) {
    viewType = type;
    renderProducts(products);
}

// Función para generar los filtros dinámicamente basados en los tipos de productos
function renderFilters() {
    const filtersList = document.getElementById("filters-list");
    const uniqueTypes = [...new Set(products.map(product => product.type))]; // Obtener tipos únicos de productos

    uniqueTypes.forEach(type => {
        const filterItem = `
            <li class="list-group-item">
                <input type="checkbox" class="form-check-input" id="filter-${type}" onchange="filterProducts()"> ${type}
            </li>
        `;
        filtersList.innerHTML += filterItem;
    });
}

// Función para filtrar productos
function filterProducts() {
    const selectedFilters = [...document.querySelectorAll('.form-check-input:checked')].map(checkbox => checkbox.id.replace('filter-', ''));

    const filteredProducts = products.filter(product => {
        return selectedFilters.length === 0 || selectedFilters.includes(product.type);
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

// Función para cargar dinámicamente los géneros
function renderGenres() {
    const genresDropdown = document.getElementById("genres-dropdown");
    const uniqueGenres = [...new Set(products.map(product => product.origin))]; // Obtener géneros únicos

    uniqueGenres.forEach(genre => {
        const genreItem = `<li><a class="dropdown-item" href="#">${genre}</a></li>`;
        genresDropdown.innerHTML += genreItem;
    });
}

// Función para cargar los filtros desde la URL (si los hay)
function loadFiltersFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const filtersParam = urlParams.get('filters');
    
    if (filtersParam) {
        const filters = JSON.parse(decodeURIComponent(filtersParam));
        filters.forEach(filter => {
            const checkbox = document.getElementById(`filter-${filter}`);
            if (checkbox) {
                checkbox.checked = true;
            }
        });
        filterProducts(); // Aplicar los filtros al cargar
    }
}

// Función para guardar los filtros seleccionados
function saveFilters() {
    const selectedFilters = [...document.querySelectorAll('.form-check-input:checked')].map(checkbox => checkbox.id.replace('filter-', ''));
    localStorage.setItem('selectedFilters', JSON.stringify(selectedFilters)); // Guardar filtros en localStorage
}

// Modificar la función de filtro para guardar filtros al cambiar
function filterProducts() {
    saveFilters(); // Guardar filtros al aplicar cambios

    const selectedFilters = [...document.querySelectorAll('.form-check-input:checked')].map(checkbox => checkbox.id.replace('filter-', ''));

    const filteredProducts = products.filter(product => {
        return selectedFilters.length === 0 || selectedFilters.includes(product.type);
    });
    renderProducts(filteredProducts);
}

// Inicialización: Primero renderizamos los filtros, géneros y productos
loadFiltersFromURL(); // Cargar filtros desde la URL
renderFilters();
renderGenres();
renderProducts(sortedByPopularity);