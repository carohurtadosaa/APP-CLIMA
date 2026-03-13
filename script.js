// script.js

// Datos simulados de clima
const datosClima = {
  "Santiago": {
    temperatura: "25°C",
    estado: "Soleado",
    humedad: "40%",
    viento: "15 km/h",
    pronostico: [
      { dia: "Lunes", clima: "☀️ Soleado", temp: "26°C" },
      { dia: "Martes", clima: "🌤️ Parcialmente nublado", temp: "24°C" },
      { dia: "Miércoles", clima: "☁️ Nublado", temp: "22°C" },
      { dia: "Jueves", clima: "🌧️ Lluvia", temp: "20°C" },
      { dia: "Viernes", clima: "⛅ Soleado", temp: "25°C" },
      { dia: "Sábado", clima: "🌦️ Chubascos", temp: "21°C" },
      { dia: "Domingo", clima: "☀️ Soleado", temp: "27°C" }
    ]
  },
  "Valparaiso": {
    temperatura: "20°C",
    estado: "Parcialmente nublado",
    humedad: "55%",
    viento: "10 km/h",
    pronostico: [
      { dia: "Lunes", clima: "🌤️ Parcialmente nublado", temp: "20°C" },
      { dia: "Martes", clima: "☁️ Nublado", temp: "19°C" },
      { dia: "Miércoles", clima: "🌧️ Lluvia", temp: "18°C" },
      { dia: "Jueves", clima: "🌦️ Chubascos", temp: "19°C" },
      { dia: "Viernes", clima: "⛅ Soleado", temp: "21°C" },
      { dia: "Sábado", clima: "☀️ Soleado", temp: "22°C" },
      { dia: "Domingo", clima: "🌤️ Parcialmente nublado", temp: "20°C" }
    ]
  }
  // Agrega más ciudades aquí...
};

// Función para mostrar detalle de ciudad
function mostrarDetalle() {
  const params = new URLSearchParams(window.location.search);
  const ciudad = params.get("ciudad");

  if (ciudad && datosClima[ciudad]) {
    const data = datosClima[ciudad];

    // Mostrar datos básicos
    document.getElementById("ciudad-nombre").textContent = ciudad;
    document.getElementById("ciudad-temp").textContent = data.temperatura;
    document.getElementById("ciudad-estado").textContent = data.estado;
    document.getElementById("ciudad-humedad").textContent = "Humedad: " + data.humedad;
    document.getElementById("ciudad-viento").textContent = "Viento: " + data.viento;

    // Mostrar pronóstico semanal
    const pronosticoContainer = document.getElementById("pronostico");
    pronosticoContainer.innerHTML = ""; // limpiar antes
    data.pronostico.forEach(dia => {
      const item = document.createElement("li");
      item.className = "list-group-item";
      item.textContent = `${dia.dia}: ${dia.clima} - ${dia.temp}`;
      pronosticoContainer.appendChild(item);
    });
  } else {
    document.getElementById("ciudad-nombre").textContent = "Ciudad no encontrada";
  }
}

// Ejecutar solo en detalle.html
if (window.location.pathname.includes("detalle.html")) {
  mostrarDetalle();
}
