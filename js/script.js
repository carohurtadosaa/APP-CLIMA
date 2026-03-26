const apiKey = "TU_API_KEY"; // Reemplaza con tu clave de OpenWeatherMap
const params = new URLSearchParams(window.location.search);
const ciudad = params.get("ciudad");

// Elementos del DOM
const nombre = document.getElementById("ciudad-nombre");
const temp = document.getElementById("ciudad-temp");
const estado = document.getElementById("ciudad-estado");
const humedad = document.getElementById("ciudad-humedad");
const viento = document.getElementById("ciudad-viento");
const pronostico = document.getElementById("pronostico");

// Datos actuales
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`)
  .then(res => res.json())
  .then(data => {
    nombre.textContent = data.name;
    temp.textContent = `${data.main.temp} °C`;
    estado.textContent = data.weather[0].description;
    humedad.textContent = `Humedad: ${data.main.humidity}%`;
    viento.textContent = `Viento: ${data.wind.speed} m/s`;
  })
  .catch(err => {
    nombre.textContent = "Error al cargar datos";
    console.error(err);
  });

// Pronóstico semanal (5 días cada 3 horas)
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`)
  .then(res => res.json())
  .then(data => {
    const dias = {};
    data.list.forEach(item => {
      const fecha = new Date(item.dt_txt).toLocaleDateString("es-CL", { weekday: "long" });
      if (!dias[fecha]) {
        dias[fecha] = item;
      }
    });

    for (const [dia, info] of Object.entries(dias)) {
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = `${dia}: ${info.main.temp}°C - ${info.weather[0].description}`;
      pronostico.appendChild(li);
    }
  })
  .catch(err => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = "Error al cargar pronóstico.";
    pronostico.appendChild(li);
    console.error(err);
  });
