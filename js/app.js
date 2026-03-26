const apiKey = "TU_API_KEY"; // Reemplaza con tu clave de OpenWeatherMap
const ciudades = [
  "Santiago", "Valparaiso", "Concepcion", "Antofagasta", "La Serena",
  "Temuco", "Puerto Montt", "Iquique", "Rancagua", "Arica"
];
const row = document.querySelector(".row");

ciudades.forEach(ciudad => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`)
    .then(res => res.json())
    .then(data => {
      const card = `
        <div class="col-12 col-md-4 col-lg-3 mb-3">
          <article class="card weather-card text-center">
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" class="card-img-top" alt="Clima">
            <div class="card-body">
              <h5 class="card-title">${data.name}</h5>
              <p class="card-text">${data.main.temp}°C - ${data.weather[0].description}</p>
              <a href="detalle.html?ciudad=${data.name}" class="btn btn-primary">Ver detalle</a>
            </div>
          </article>
        </div>`;
      row.innerHTML += card;
    })
    .catch(err => console.error("Error:", err));
});
