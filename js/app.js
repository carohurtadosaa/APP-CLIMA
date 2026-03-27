// app.js
class WeatherApp {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://api.openweathermap.org/data/2.5";
  }

  async getWeather(ciudad) {
    try {
      const res = await fetch(`${this.baseUrl}/weather?q=${ciudad}&appid=${this.apiKey}&units=metric&lang=es`);
      if (!res.ok) throw new Error("Error al obtener datos");
      return await res.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  renderHome(lugares) {
    const contenedor = document.getElementById("lista-lugares");
    contenedor.innerHTML = "";
    lugares.forEach(lugar => {
      const card = `
        <div class="col-12 col-md-4 mb-3">
          <div class="card h-100">
            <div class="card-body text-center">
              <h5 class="card-title">${lugar.name}</h5>
              <p class="card-text">Temp actual: ${lugar.main.temp}°C</p>
              <a href="detalle.html?ciudad=${lugar.name}" class="btn btn-primary">Ver detalle</a>
            </div>
          </div>
        </div>`;
      contenedor.insertAdjacentHTML("beforeend", card);
    });
  }
}

// Instancia y carga de datos
const app = new WeatherApp("fd9f57f046b43140d735458ed195b2fb"); // reemplaza con tu clave real
const ciudades = ["Santiago"];

(async () => {
  const resultados = [];
  for (const ciudad of ciudades) {
    const data = await app.getWeather(ciudad);
    if (data) resultados.push(data);
  }
  app.renderHome(resultados);
})();
