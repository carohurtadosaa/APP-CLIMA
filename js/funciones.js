function buscarLugar(id) {
  return lugares.find(lugar => lugar.id === id);
}
function calcularEstadisticas(pronostico) {
  const temps = pronostico.map(dia => dia.temp);
  const min = Math.min(...temps);
  const max = Math.max(...temps);
  const promedio = temps.reduce((a,b) => a+b, 0) / temps.length;

  const conteoEstados = {};
  pronostico.forEach(dia => {
    conteoEstados[dia.estado] = (conteoEstados[dia.estado] || 0) + 1;
  });

  return { min, max, promedio, conteoEstados };
}
function generarResumen(estados) {
  if (estados["Lluvia"]) {
    return "Se esperan días lluviosos, lleva paraguas.";
  } else if (estados["Soleado"] > estados["Nublado"]) {
    return "Predominan los días soleados, ideal para actividades al aire libre.";
  } else {
    return "Semana variada con nubes y sol.";
  }
}
