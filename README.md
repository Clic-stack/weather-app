## 🌦️Weather App: 

Esta aplicación fue desarrollada como parte de un proyecto de aprendizaje con el objetivo de construir adecuadamente una aplicación web en React usando Vite.js y que a su vez consumiera la API de OpenWeatherMap haciendo uso de una APIkey para mostrar la información del clima en tiempo real según la ubicación del usuario.

## 🚀Demo en línea  
**🔗**

## 🎯 Objetivo del proyecto

Construir una aplicación web interactiva utilizando **React** y **Vite.js**, que consuma la API de **OpenWeatherMap** para mostrar información del clima en tiempo real basada en la ubicación del usuario o en ciudades ingresadas manualmente.  

Este proyecto tiene como finalidad reforzar el uso de herramientas clave como:
- `fetch` para realizar peticiones HTTP a servicios externos.
- Hooks de React como `useState` y `useEffect` para gestionar estado y efectos.
- Funcionalidades del navegador como la geolocalización.
- Manejo de errores, diseño responsivo y condiciones visuales dinámicas.  
Todo esto se integra para ofrecer una experiencia fluida y personalizada al usuario.

## ⚛️Tecnologías usadas⚡

### Tecnologías principales

| Herramienta / Lenguaje | Uso principal |
|------------------------|---------------|
| **React**              | Construcción de la interfaz basada en componentes reutilizables. |
| **Vite.js**            | Empaquetador moderno y rápido para proyectos React. |
| **JavaScript (ES6+)**  | Lógica de aplicación e interacción con APIs. |
| **SCSS / Sass**        | Estilos avanzados, modulares y estructurados con variables y anidamiento. |
| **HTML / JSX**         | Estructura del contenido visual dentro de componentes. |
| **Axios**              | Cliente HTTP para consumir la API de OpenWeatherMap. |
| **React Icons**        | Íconos personalizables y semánticos. |
| **ESLint + Plugins**   | Liting para calidad y consistencia del código. |

### APIs y funcionalidades externas

| Tecnología / API              | Funcionalidad |
|-------------------------------|---------------------------|
| **OpenWeatherMap API**        | Datos del clima en tiempo real. |
| **Geolocalización del navegador** | Detecta ubicación del usuario automáticamente. |

### Lógica y estructura con React

- **`useState`**: Manejo de estado de clima, error, búsqueda, unidad de temperatura, etc.
- **`useEffect`**: Peticiones a la API, geolocalización, fondo dinámico según el clima.
- **Componentes personalizados.**: `WeatherData`, `WeatherCity`, `WeatherContent`, `WeatherDetails`, `WeatherButton`...
- **Renderizado condicional.**: Muestra loader, errores o contenido según el estado.
- **Cambio de fondo dinámico.**: Según el código de clima usando `GetBackGroundImages`.
- **Consumo de API externa(axios).**
- **Geolocalización / Entradas controladas.**

### Experiencia del usuario

- Loader animado mientras carga la app.
- Mensajes de error claros y visuales.
- Cambio de temperatura entre °C y °F.
- Estética dinámica con animaciones y fondo climatológico.
- Diseño responsivo para dispositivos móviles y desktop.


## 🗂️Estructura del proyecto

```bash
📁 S02E02/
├── 📁 node_modules/
├── 📁 public/
|    |___ 📁 images/
│         └── atmosphere.jpg
│         └── clear.jpg
|         └── clouds.jpg
│         └── drizzle.jpg
|         └── Rain.jpg
│         └── Snow.jpg
|         └── thunderstorm.jpg
├── 📁 src/
│   └── 📁 assets/
│   └── 📁 components/
│   |    └── Coords.jsx
│   |    └── ErrorsInput.jsx
|   |    └── GetBackGroundImages.jsx
│   |    └── Loading.jsx
|   |    └── WeatherButton.jsx
│   |    └── WeatherCity.jsx
|   |    └── WeatherContent.jsx
│   |    └── WeatherData.jsx
|   |    └── WeatherDetails.jsx
│   |    └── WeatherTitle.jsx
│   └── 📁 helpers/
|        └── lib.js
│   └── 📁 styles/
│        └── App.scss
│        └── Error.scss
|        └── ErrorsInput.scss
│        └── Loading.scss
|        └── WeatherButton.scss
│        └── WeatherContent.scss
|        └── WeatherData.scss
├── App.jsx
├── index.css
└── main.jsx
```

## 🧠Funcionalidades principales

- Pantalla de carga animada mientras se obtienen los datos.
- Detección automática de la ubicación.  
- Solicitud de permiso para acceder a la ubicación del dispositivo.
- Visualización de:

    * *Input controlado y botón para la obtención de Ciudad y País solicitado por el usuario.*
    * *Ciudad y País.*
    * *Estado del Clima.*
    * *Velocidad del Viento.*
    * *Porcentaje de nubes.*
    * *Temperatura actual(°C / °F).*
    * *Presión atmosférica.*
    * *Botón de cambio en la temperatura de °C / °F.*

- Cambio dinámico en el fondo según el clima.
- Manejo de errores amigablemente.
- Estructura clara y funcional en el código con más de tres componentes funcionales y reutilizables.  
- Diseños y estilos personalizados para cada componente.
- Diseño responsivo para los diferentes tamaños de pantalla en los dispositivos.  

## 🛠️Instalación local

1. Clona este repositorio:

```bash
git clone https://github.com/Clic-stack/weather-app.git
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo .env y agrega tu API key:

```bash
VITE_API_KEY=tu_clave_aquí
```

4. Inicia el proyecto:
```bash
npm run dev
```

## 🎨Autor  
Desarrollado por Clio Salgado como parte de un proyecto de React para Academlo con la intención de fortalecer los fundamentos del desarrollo frontend.

---

🔽 **English version below** 🔽

## 🌦️ Weather App

This application was developed as part of a learning project with the goal of building a web application using React and Vite.js, consuming the OpenWeatherMap API with an API key to display real-time weather information based on the user's current location.

## 🚀 Live Demo
**🔗**

## 🎯 Project Objective
Build an interactive web application using React and Vite.js that fetches real-time weather data from OpenWeatherMap, based on either the user's geolocation or manual city input.

This project aims to strengthen key development skills such as:

- Using fetch to perform HTTP requests to external services.
- React hooks like useState and useEffect to manage state and side effects.
- Browser geolocation features.
- Error handling, responsive design, and dynamic visual behaviors.

All integrated to offer a smooth, personalized user experience.

## ⚛️ Technologies Used ⚡
### Core Technologies

| Tool/Language          |    Purpose    |
|------------------------|---------------|
| **React**              | Build a modular, component-based user interface. |
| **Vite.js**            | Fast development build tool for React apps. |
| **JavaScript (ES6+)**  | Application logic and API integration. |
| **SCSS / Sass**        | Advanced, maintainable styling with nesting and variables. |
| **HTML / JSX**         | Page structure within components. |
| **Axios**              | HTTP client for consuming the OpenWeatherMap API. |
| **React Icons**        | Customizable and semantic icon library used to enhance the visual interface. |
| **ESLint + Plugins**   | Enforces code quality and consistency throughout the project. |

### External APIs & Features

|           Tool / API          | Functionality |
|-------------------------------|---------------------------|
| **OpenWeatherMap API**        | Real-time weather data. |
| **Browser Geolocation**       | Detects user location automatically. |

### React Logic & Structure

- **`useState`**: Manages state for weather, errors, location input, temperature units, etc.
- **`useEffect`**: Handles side effects like API requests, geolocation, and background changes.
- **Custom components**: `WeatherData`, `WeatherCity`, `WeatherContent`, `WeatherDetails`, `WeatherButton`...
- **Conditional rendering**: Displays loader, errors, or content based on app state.
- **Dynamic background images**: Changes visuals based on weather code using `GetBackGroundImages`.
- **Consumes external APIs using Axios.**
- **Geolocation / Controlled inputs.**

### User Experience Features

- Animated loader during data fetch.
- Clear, helpful error messages.
- Temperature toggle between °C and °F.
- Dynamic UI with animations and weather-based visuals.
- Fully responsive design for mobile and desktop devices.

## 🗂️ Project Structure

```bash
📁 S02E02/
├── 📁 node_modules/
├── 📁 public/
|    |___ 📁 images/
│         └── atmosphere.jpg
│         └── clear.jpg
|         └── clouds.jpg
│         └── drizzle.jpg
|         └── Rain.jpg
│         └── Snow.jpg
|         └── thunderstorm.jpg
├── 📁 src/
│   └── 📁 assets/
│   └── 📁 components/
│   |    └── Coords.jsx
│   |    └── ErrorsInput.jsx
|   |    └── GetBackGroundImages.jsx
│   |    └── Loading.jsx
|   |    └── WeatherButton.jsx
│   |    └── WeatherCity.jsx
|   |    └── WeatherContent.jsx
│   |    └── WeatherData.jsx
|   |    └── WeatherDetails.jsx
│   |    └── WeatherTitle.jsx
│   └── 📁 helpers/
|        └── lib.js
│   └── 📁 styles/
│        └── App.scss
│        └── Error.scss
|        └── ErrorsInput.scss
│        └── Loading.scss
|        └── WeatherButton.scss
│        └── WeatherContent.scss
|        └── WeatherData.scss
├── App.jsx
├── index.css
└── main.jsx
```

## 🧠 Key Features

- Animated splash screen while data loads.
- Automatic location detection.
- Prompt for location permission.
- Display of:

    * *Controlled input and search button.*
    * *City and Country.*
    * *Weather status.*
    * *Wind speed.*
    * *Cloud percentage.*
    * *Current temperature (°C / °F).*
    * *Atmospheric pressure.*
    * *Temperature unit switch (°C ↔ °F).*

- Weather-dependent background image.
- Friendly error handling.
- Clean component-based architecture with reusable logic.  
- Custom styles for each component.
- Fully responsive layout across devices.

## 🛠️Local Setup

1. Clone this repo:

```bash
git clone https://github.com/Clic-stack/weather-app.git
```

2. Install dependencies:

```bash
npm install
```

3. Create a .env file and add your API key:

```bash
VITE_API_KEY=tu_clave_aquí
```

4. Start the project:
```bash
npm run dev
```

## 🎨 Author
Developed by Clio Salgado as part of a React project for Academlo to reinforce frontend development fundamentals.
