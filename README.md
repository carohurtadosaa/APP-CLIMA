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

GITHUB
[APP CLIMA](https://github.com/carohurtadosaa/APP-CLIMA)
