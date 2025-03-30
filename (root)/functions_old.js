const products = [
    { name: "Nazgul Calendario Perpetuo 3D", type: "Figura de acción", origin: "El señor de los anillos", image: "", links: [] },
    { name: '"Rechicero" editorial Debolsillo (novela Mundodisco)', type: "Libro", origin: "Terry Pratchett", image: "", links: [] },
    { name: '"Brujerías" editorial Debolsillo (novela Mundodisco)', type: "Libro", origin: "Terry Pratchett", image: "", links: [] },
    { name: '"Pirómides" editorial Debolsillo (novela Mundodisco)', type: "Libro", origin: "Terry Pratchett", image: "", links: [] },
    { name: 'Vivi 28cm aprox.', type: "Peluche", origin: "Final Fantasy IX", image: "", links: [] },
    { name: "Gen asagiri", type: "Figura de acción", origin: "Dr. Stone", image: "", links: [] },
    { name: "Señor de los Nazgul / Rey Brujo", type: "Figura de acción", origin: "El señor de los anillos", image: "", links: [] },
    { name: "Brook", type: "Figura de acción", origin: "One Piece", image: "", links: [] },
    { name: "Suika", type: "Figura de acción", origin: "Dr. Stone", image: "", links: [] },
    { name: "La herencia de la tía Ágata", type: "Juego de mesa", origin: "Bizak", image: "", links: [] },
    { name: "El señor de los anillos: Aventura hacia el Monte del Destino", type: "Juego de mesa", origin: "Devir", image: "", links: [] },
    { name: "Pyramid Head", type: "Figura de acción", origin: "Silent Hill 2", image: "", links: [] },
    { name: "Qiqi", type: "Figura de acción", origin: "Genshin Impact", image: "", links: [] },
    { name: "Vamos a pegarnos con espadas de mentira", type: "Juego de mesa", origin: "Exploding Kittens", image: "", links: [] },
    { name: "Yo Soy Tu Peli", type: "Juego de mesa", origin: "HelloFun!", image: "", links: [] },
    { name: "¿Quién es quién? Super Mario", type: "Juego de mesa", origin: "¿Quién es quién?", image: "", links: [] },
    { name: 'Elemento electro o dendro (grande 50cm)', type: "Peluche", origin: "Genshin Impact", image: "", links: [] },
    { name: "Animal Crossing: New Horizons", type: "Videojuego", origin: "Nintendo Switch", image: "", links: [] },
    { name: "Zelda: Breath of the wild", type: "Videojuego", origin: "Nintendo Switch", image: "", links: [] },
    { name: "Street Fighter VI", type: "Videojuego", origin: "Xbox Series X", image: "", links: [] },
    { name: "The Boys (cómic de Garth Ennis y Darick Robertson)", type: "Cómic", origin: "Garth Ennis, Darick Robertson", image: "", links: [] },
    { name: "Piratas del Caribe: La maldición de la perla negra", type: "Blu-ray", origin: "Película", image: "", links: [] },
    { name: "Piratas del Caribe: El cofre del hombre muerto", type: "Blu-ray", origin: "Película", image: "", links: [] },
    { name: "Piratas del Caribe: En el fin del mundo", type: "Blu-ray", origin: "Película", image: "", links: [] },
    { name: "Nintendo Switch Sports", type: "Videojuego", origin: "Nintendo Switch", image: "", links: [] },
    { name: "Paper Mario: La puerta milenaria", type: "Videojuego", origin: "Nintendo Switch", image: "", links: [] },
    { name: "Asesinato en el Orient Express", type: "Blu-ray", origin: "Película de 1974", image: "", links: [] },
    { name: "Alan Wake II DLC", type: "Videojuego", origin: "Xbox Series X", image: "", links: [] },
    { name: "Clásicos", type: "Blu-ray", origin: "Película", image: "", links: [] },
    { name: "Voces en la oscuridad (manga de Junji Ito)", type: "Cómic", origin: "Junji Ito", image: "", links: [] },
    { name: "Black Paradox (manga de Junji Ito)", type: "Cómic", origin: "Junji Ito", image: "", links: [] },
    { name: "InuYasha", type: "Blu-ray", origin: "Anime", image: "", links: [] },
    { name: "Yu Yu Hakusho", type: "Blu-ray", origin: "Anime", image: "", links: [] },
    { name: "Ranma 1/2", type: "Blu-ray", origin: "Anime", image: "", links: [] },
    { name: "Slam Dunk", type: "Blu-ray", origin: "Anime", image: "", links: [] },
    { name: "Sakura Card Captor", type: "Blu-ray", origin: "Anime", image: "", links: [] },
    { name: "Utena", type: "Blu-ray", origin: "Anime", image: "", links: [] },
    { name: "Another", type: "Blu-ray", origin: "Anime", image: "", links: [] },
    { name: "DaVinci Resolve Studio", type: "Software", origin: "Licencia", image: "", links: [] }
];

const typeFilter = document.getElementById("typeFilter");
const originFilter = document.getElementById("originFilter");
const productList = document.getElementById("productList");
const noResultsMessage = document.getElementById("noResultsMessage");

// Populate filter options dynamically
function populateFilters() {
    const types = new Set(products.map(product => product.type));
    const origins = new Set(products.map(product => product.origin));

    types.forEach(type => {
        const option = document.createElement("option");
        option.value = type;
        option.textContent = type;
        typeFilter.appendChild(option);
    });

    origins.forEach(origin => {
        const option = document.createElement("option");
        option.value = origin;
        option.textContent = origin;
        originFilter.appendChild(option);
    });
}

// Display products based on filters
function displayProducts() {
    const type = typeFilter.value;
    const origin = originFilter.value;

    productList.innerHTML = "";

    const filteredProducts = products.filter(product => {
        return (type === "all" || product.type === type) &&
               (origin === "all" || product.origin === origin);
    });

    if (filteredProducts.length === 0) {
        noResultsMessage.style.display = "block";
    } else {
        noResultsMessage.style.display = "none";
        filteredProducts.forEach(product => {
            const li = document.createElement("li");

            let productText = product.name;
            if (type === "all") {
                productText = `${product.type}: ${productText}`;
            }
            if (origin === "all") {
                productText = `${productText} (${product.origin})`;
            }

            li.textContent = productText;
            productList.appendChild(li);
        });
    }
}

// Initialize the app
function init() {
    populateFilters();
    displayProducts();
    
    typeFilter.addEventListener("change", displayProducts);
    originFilter.addEventListener("change", displayProducts);
}

init();