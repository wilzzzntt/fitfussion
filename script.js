const productos = [
  {
    nombre: "Proteína Whey",
    descripcion: "Alta calidad para aumentar masa muscular.",
    precio: 150000,
    imagen: "prote.jpg",
  },
  {
    nombre: "Creatina Monohidratada",
    descripcion: "Mejora el rendimiento físico y la fuerza.",
    precio: 120000,
    imagen: "crea.jpg",
  },
  {
    nombre: "BCAA Recovery",
    descripcion: "Aminoácidos esenciales para recuperación muscular.",
    precio: 90000,
    imagen: "bcaa.jpg",
  },
  {
    nombre: "Omega 3",
    descripcion: "En la actualidad existen diferentes suplementosgsg.",
    precio: 90000,
    imagen: "omega.jpg",
  },
];

const numeroWhatsApp = "595975946636";

function mostrarProductos(filtrados) {
  const contenedor = document.getElementById("productos-container");
  contenedor.innerHTML = "";

  if (filtrados.length === 0) {
    contenedor.innerHTML = "<p>No se encontraron productos.</p>";
    return;
  }

  filtrados.forEach(producto => {
    const card = document.createElement("div");
    card.classList.add("producto");

    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h2>${producto.nombre}</h2>
      <p>${producto.descripcion}</p>
      <p class="precio">Gs ${producto.precio.toLocaleString()}</p>
      <a class="btn-whatsapp" 
         href="https://wa.me/${numeroWhatsApp}?text=Hola, estoy interesado en el producto ${encodeURIComponent(producto.nombre)}" 
         target="_blank" rel="noopener noreferrer">
        Comprar por WhatsApp
      </a>
    `;

    contenedor.appendChild(card);
  });
}

function cargarProductos() {
  mostrarProductos(productos);
}

document.addEventListener("DOMContentLoaded", () => {
  cargarProductos();

  const inputBuscador = document.getElementById("buscador");
  inputBuscador.addEventListener("input", () => {
    const valor = inputBuscador.value.toLowerCase();

    const filtrados = productos.filter(p =>
      p.nombre.toLowerCase().includes(valor) ||
      p.descripcion.toLowerCase().includes(valor)
    );

    mostrarProductos(filtrados);
  });
});
