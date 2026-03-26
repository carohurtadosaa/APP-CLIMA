}# WeatherApp - APP CLIMA 🌦️

Proyecto académico desarrollado en el **Módulo 3 - Frontend Trainee SENCE**, cuyo objetivo es construir una aplicación web que muestre información del clima en distintas localidades de Chile, utilizando **HTML5, Bootstrap, SASS y JavaScript**.

---

## 🚀 Alcance del MVP
- **Vista de Inicio (index.html):** tarjetas dinámicas con información básica del clima en 10 ciudades.
- **Vista de Detalle (detalle.html):** información ampliada de cada ciudad, incluyendo temperatura, estado, humedad, viento y pronóstico semanal.
- **Componentes consistentes:** header (navbar) y footer en todas las vistas.
- **Guía de estilos coherente:** colores, tipografía y espaciado definidos en SASS.

---

## 🎨 Metodología de Estilos
Se implementó la metodología **BEM (Block, Element, Modifier)** para mantener consistencia en las clases CSS.

Ejemplo:
```html
<header class="header">
  <nav class="header__navbar">
    <a class="header__logo">WeatherApp</a>
  </nav>
</header>
```

## 📂 Estructura de archivos SASS y CSS

```plaintext
scss/
  ├── _variables.scss   // Colores, tipografías, breakpoints
  ├── _mixins.scss      // Mixins reutilizables (ej: estilos de tarjetas)
  ├── _header.scss      // Estilos del header
  ├── _footer.scss      // Estilos del footer
  ├── _detalle.scss     // Estilos específicos de la vista detalle
  └── style.scss        // Archivo principal que importa todos los parciales

css/
  style.css         // CSS compilado final

```

```
{
  id: 1,
  nombre: "Playa Reñaca",
  tempActual: 22,
  pronosticoSemanal: [
    { dia: "Lunes", temp: 20, estado: "Soleado" },
    { dia: "Martes", temp: 18, estado: "Nublado" },
    ...
  ]
}
```

## 📊 Estadísticas calculadas
La aplicación procesa el pronóstico semanal de cada lugar usando ciclos y condicionales en JavaScript.
Se generan automáticamente:

- Temperatura mínima de la semana.

- Temperatura máxima de la semana.

- Promedio de temperaturas.

- Conteo de estados del clima (ej. cuántos días soleados, nublados o lluviosos).

- Resumen textual automático según el estado predominante (ej. “Predominan los días soleados, ideal para actividades al aire libre.”).

## 🚀 Navegación
En index.html se muestran las tarjetas de los lugares disponibles.

Cada tarjeta incluye un botón que lleva a detalle.html?id=....

En detalle.html se despliega el pronóstico semanal, las estadísticas y el resumen generado dinámicamente.

## 🔧 Instalación y ejecución
Clona el repositorio:
```
bash
git clone https://github.com/carohurtadosaa/APP-CLIMA
```
- Abre la carpeta del proyecto en VS Code.

- Instala la extensión Live Server.

- Haz clic derecho en index.html → Open with Live Server.

- Navega entre las vistas:

- Inicio: http://127.0.0.1/index.html

- Detalle: http://127.0.0.1/detalle.html?id=1 (o cualquier id válido).

## GITHUB 

https://github.com/carohurtadosaa/APP-CLIMA
