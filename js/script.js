// script.js

// Obtener el id desde la URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

// Buscar el lugar en el arreglo (función definida en funciones.js)
const lugar = buscarLugar(id);

if (lugar) {
  // Elementos del DOM
  const nombre = document.getElementById("ciudad-nombre");
  const temp = document.getElementById("ciudad-temp");
  const estado = document.getElementById("ciudad-estado");
  const humedad = document.getElementById("ciudad-humedad");
  const viento = document.getElementById("ciudad-viento");
  const pronostico = document.getElementById("pronostico");
  const resumen = document.getElementById("resumen");

  // Datos actuales
  nombre.textContent = lugar.nombre;
  temp.textContent = `${lugar.tempActual} °C`;
  estado.textContent = lugar.pronosticoSemanal[0].estado;

  // Calcular estadísticas
  const stats = calcularEstadisticas(lugar.pronosticoSemanal);
  humedad.textContent = `Min: ${stats.min}°C | Max: ${stats.max}°C`;
  viento.textContent = `Promedio: ${stats.promedio.toFixed(1)}°C`;

  // Renderizar pronóstico semanal
  lugar.pronosticoSemanal.forEach(dia => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = `${dia.dia}: ${dia.temp}°C - ${dia.estado}`;
    pronostico.appendChild(li);
  });

  // Resumen textual
  resumen.textContent = generarResumen(stats.conteoEstados);

} else {
  document.getElementById("ciudad-nombre").textContent = "Error al cargar datos";
}
