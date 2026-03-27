// script.js
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

  async getForecast(ciudad) {
    try {
      const res = await fetch(`${this.baseUrl}/forecast?q=${ciudad}&appid=${this.apiKey}&units=metric&lang=es`);
      if (!res.ok) throw new Error("Error al obtener pronóstico");
      return await res.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  renderDetalle(data, forecast) {
    document.getElementById("ciudad-nombre").textContent = data.name;
    document.getElementById("ciudad-temp").textContent = `${data.main.temp} °C`;
    document.getElementById("ciudad-estado").textContent = data.weather[0].description;
    document.getElementById("ciudad-humedad").textContent = `Humedad: ${data.main.humidity}%`;
    document.getElementById("ciudad-viento").textContent = `Viento: ${data.wind.speed} m/s`;

    const pronostico = document.getElementById("pronostico");
    pronostico.innerHTML = "";
    forecast.list.slice(0, 5).forEach(item => {
      const fecha = new Date(item.dt_txt).toLocaleDateString("es-CL", { weekday: "long" });
      const li = `<li class="list-group-item">${fecha}: ${item.main.temp}°C - ${item.weather[0].description}</li>`;
      pronostico.insertAdjacentHTML("beforeend", li);
    });

    // Estadísticas simples
    const temps = forecast.list.map(d => d.main.temp);
    const min = Math.min(...temps);
    const max = Math.max(...temps);
    const promedio = temps.reduce((a, b) => a + b, 0) / temps.length;

    const resumen = document.getElementById("resumen");
    resumen.textContent = `Min: ${min}°C | Max: ${max}°C | Promedio: ${promedio.toFixed(1)}°C`;

    // Alerta lógica
    if (max > 30) {
      resumen.textContent += " ⚠️ Alerta: semana con altas temperaturas.";
    } else if (min < 5) {
      resumen.textContent += " ⚠️ Alerta: semana con bajas temperaturas.";
    }
  }
}

// Instancia y carga de datos
const params = new URLSearchParams(window.location.search);
const ciudad = params.get("ciudad");

const app = new WeatherApp("fd9f57f046b43140d735458ed195b2fb"); // reemplaza con tu clave real

(async () => {
  const data = await app.getWeather(ciudad);
  const forecast = await app.getForecast(ciudad);
  if (data && forecast) {
    app.renderDetalle(data, forecast);
  } else {
    document.getElementById("ciudad-nombre").textContent = "Error al cargar datos";
  }
})();
