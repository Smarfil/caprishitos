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

// detalle.js
// Obtener parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('name'); // Suponiendo que pasas el nombre del producto como parámetro

const product = products.find(p => p.name === productName);

if (product) {
    const productDetail = `
        <div class="card">
            <img src="${product.image || 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.origin}</p>
                <p class="card-text">${product.price}€</p>
                <p class="card-text">Detalles completos del producto aquí...</p>
                <a href="${product.links[0]}" class="btn btn-primary" target="_blank">Comprar</a>
            </div>
        </div>
    `;
    document.getElementById('product-detail').innerHTML = productDetail;
}

// Función para volver a la lista de productos
function goBackToList() {
    const filters = JSON.parse(localStorage.getItem('selectedFilters')) || []; // Obtener filtros almacenados

    let queryString = '';
    if (filters.length > 0) {
        queryString = `?filters=${encodeURIComponent(JSON.stringify(filters))}`;
    }

    window.location.href = `index.html${queryString}`; // Redirigir a la lista con filtros aplicados
}
