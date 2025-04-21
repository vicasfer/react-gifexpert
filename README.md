# GifExpertApp

## Descripción | Description

### 🇪🇸 Español

GifExpertApp es una aplicación web desarrollada con React que permite a los usuarios buscar y visualizar GIFs relacionados con palabras clave. La aplicación utiliza la API de Giphy para obtener los resultados y mostrar hasta 10 GIFs por cada término de búsqueda.

La interfaz es sencilla e intuitiva: el usuario introduce una palabra o frase en el campo de búsqueda y la aplicación muestra instantáneamente los GIFs relacionados, organizados en una cuadrícula visualmente atractiva.

### 🇬🇧 English

GifExpertApp is a React-based web application that allows users to search for and display GIFs related to keywords. The application uses the Giphy API to fetch results and display up to 10 GIFs for each search term.

The interface is simple and intuitive: the user enters a word or phrase in the search field, and the application instantly displays related GIFs, organized in a visually appealing grid.

## Características principales | Main Features

### 🇪🇸 Español

- **Búsqueda instantánea**: Introduce cualquier término y obtén GIFs relacionados.
- **Visualización en cuadrícula**: Los resultados se muestran en un formato atractivo y fácil de explorar.
- **Múltiples categorías**: Puedes añadir varias categorías de búsqueda y ver todos los resultados simultáneamente.
- **Prevención de duplicados**: La aplicación evita añadir categorías duplicadas.
- **Indicador de carga**: Muestra un mensaje mientras se cargan los GIFs.

### 🇬🇧 English

- **Instant search**: Enter any term and get related GIFs.
- **Grid display**: Results are shown in an attractive and easy-to-explore format.
- **Multiple categories**: You can add several search categories and view all results simultaneously.
- **Duplicate prevention**: The application prevents adding duplicate categories.
- **Loading indicator**: Displays a message while GIFs are loading.

## Tecnologías utilizadas | Technologies Used

- React
- Vite
- JavaScript (ES6+)
- CSS
- Giphy API

## Instalación y uso | Installation and Usage

### 🇪🇸 Español

1. Clona este repositorio
2. Instala las dependencias con `npm install`
3. Ejecuta la aplicación en modo desarrollo con `npm run dev`
4. Abre tu navegador en la URL indicada (normalmente http://localhost:5173)
5. ¡Comienza a buscar GIFs!

### 🇬🇧 English

1. Clone this repository
2. Install dependencies with `npm install`
3. Run the application in development mode with `npm run dev`
4. Open your browser at the indicated URL (usually http://localhost:5173)
5. Start searching for GIFs!

## Estructura del proyecto | Project Structure

```
src/
├── components/         # Componentes de la aplicación
│   ├── AddCategory.jsx # Componente para añadir nuevas categorías
│   ├── GifGrid.jsx     # Componente para mostrar la cuadrícula de GIFs
│   └── GifItem.jsx     # Componente para mostrar un GIF individual
├── helpers/            # Funciones auxiliares
│   └── getGifs.js      # Función para obtener GIFs de la API
├── hooks/              # Custom hooks
│   └── useFetchGifs.js # Hook para gestionar la carga de GIFs
├── GifExpertApp.jsx    # Componente principal de la aplicación
└── main.jsx           # Punto de entrada de la aplicación
```

---

### 🇪🇸 Español

Esta aplicación fue desarrollada como parte de un curso de React y sirve como ejemplo práctico de cómo construir aplicaciones web interactivas utilizando componentes, hooks y consumo de APIs externas.

### 🇬🇧 English

This application was developed as part of a React course and serves as a practical example of how to build interactive web applications using components, hooks, and external API consumption.
