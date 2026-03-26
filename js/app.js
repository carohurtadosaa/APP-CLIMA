// app.js

const contenedor = document.getElementById("lista-lugares");

// Recorremos el arreglo de lugares definido en data.js
lugares.forEach(lugar => {
  const card = document.createElement("div");
  card.className = "col-12 col-md-4 mb-3";

  card.innerHTML = `
    <div class="card h-100">
      <div class="card-body text-center">
        <h5 class="card-title">${lugar.nombre}</h5>
        <p class="card-text">Temp actual: ${lugar.tempActual}°C</p>
        <a href="detalle.html?id=${lugar.id}" class="btn btn-primary">Ver detalle</a>
      </div>
    </div>
  `;

  contenedor.appendChild(card);
});
