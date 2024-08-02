![Logo proyecto](assets/images/Logo.jpg)

# Do Re Mi Piano School: Landing Page para Escuela de Música Especializada en Piano

## 1. Descripción General del Proyecto

**Do Re Mi Piano School**: Landing Page Escuela de Música Especializada en Piano

**Descripción**: 
Este proyecto consiste en la creación de una landing page destinada a una escuela de música especializada en la enseñanza de piano. La página ofrece información sobre los cursos disponibles y las ventajas de aprender piano en esta escuela.

Lo anterior en el marco del desarrollo del programa [Talento Tech](https://talentotech.gov.co/portal/), por lo cual todo lo anterior se hace con fines educativos 

**Tecnología Principal Utilizada**:
- HTML
- CSS
- JavaScript (mínimo)


## 2. Estructura del Proyecto

**Estructura de Directorios y Archivos**:

```
/root
│ index.html 
│ README.md
└───CSS
    └───style.css
└───js
    └───Script.js
└───assets
    └───images
    └───fonts
    └───Icons

```


## 3. Configuración del Entorno de Desarrollo

**Requisitos Previos**:
- Editor de código (por ejemplo, Visual Studio Code)
- Navegador web moderno (por ejemplo, Chrome, Firefox)

**Pasos para Configurar el Entorno de Desarrollo**:
1. Clona el repositorio:
    ```bash
    git clone <URL del repositorio>
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd nombre-del-proyecto
    ```

## 4. Guía de Uso

**Cómo Iniciar el Proyecto**:
- Abre el archivo `index.html` en tu navegador web para ver la landing page.

**Explicación de las Funcionalidades Principales**:
- La landing page incluye un carrusel de cursos, información sobre la propuesta de valor y las caracteristicas de los cursos y la escuela, información de contacto, preguntas frecuentes y demás información relevenate para el proyecto.

**Ejemplos de Uso**:
- Al abrir `index.html`, se puede navegar por las secciones, obtener los detalles de los cursos e iniciar el proceso de inscripción.

## 5. Pruebas

**Descripción de las Pruebas Existentes**:
- Dado que el proyecto es principalmente HTML y CSS, las pruebas manuales de la interfaz son fundamentales.

**Cómo Ejecutar las Pruebas**:
- Abre `index.html` en diferentes navegadores y dispositivos para asegurar la compatibilidad.

## 6. Despliegue

**Pasos para Desplegar el Proyecto en GitHub Pages**:
1. Asegúrate de que todos los cambios están confirmados (committed) y empujados (pushed) al repositorio principal en GitHub.
2. En el repositorio de GitHub, ve a la sección de "Settings" (Configuración).
3. Desplázate hasta la sección "GitHub Pages".
4. En "Source" (Fuente), selecciona la rama que contiene tu archivo `index.html` (generalmente `main` o `master`).
5. Haz clic en "Save" (Guardar).
6. GitHub generará un enlace donde tu sitio estará disponible. 

**Configuración del Entorno de Producción**:
- Verifica que todos los enlaces y recursos externos estén accesibles en la URL proporcionada por GitHub Pages.

## 7. Implementación de Glider.js

**Descripción de Glider.js**:
Glider.js es una biblioteca ligera de JavaScript que se utiliza para crear carruseles y deslizadores (sliders) responsivos y accesibles. Es conocida por su facilidad de uso y por no tener dependencias, lo que la hace ideal para proyectos que buscan minimizar la cantidad de código y dependencias externas.

**Incluir Glider.js**:

Usando CDN:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/glider-js/1.7.7/glider.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/glider-js/1.7.7/glider.min.js"></script>
``` 
Usando archivos locales:
```html
<link rel="stylesheet" href="glider.min.css">
<script src="glider.min.js"></script>
``` 
**Estructura HTML:**
```HTML
<div class="glider-contain">
  <div class="glider">
    <div>Slide 1</div>
    <div>Slide 2</div>
    <div>Slide 3</div>
    <!-- Agrega más slides según sea necesario -->
  </div>

  <button role="button" aria-label="Previous" class="glider-prev">«</button>
  <button role="button" aria-label="Next" class="glider-next">»</button>
  <div role="tablist" class="dots"></div>
</div>
```
**Inicializar glider.js:**
```HTML
<script>
  document.addEventListener('DOMContentLoaded', function(){
    new Glider(document.querySelector('.glider'), {
      slidesToShow: 1,
      dots: '.dots',
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      }
    });
  });
</script>
```
**Opciones de configuración:**

Glider.js ofrece varias opciones de configuración que puedes ajustar según tus necesidades:

- slidesToShow: Número de slides a mostrar al mismo tiempo.
- slidesToScroll: Número de slides a desplazar en cada acción.
- draggable: Habilitar o deshabilitar la capacidad de arrastrar los slides.
- dots: Selector para los indicadores de navegación (dots).
- arrows: Objetos que contienen los selectores de los botones prev y next.
- responsive: Configuraciones responsivas para diferentes tamaños de pantalla.

**Ejemplo de configuración con opciones adicionales:**

```HTML
<script>
  document.addEventListener('DOMContentLoaded', function(){
    new Glider(document.querySelector('.glider'), {
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      dots: '.dots',
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      },
      responsive: [
        {
          breakpoint: 775,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]
    });
  });
</script>
```

## 8. Implementación de normalize.css
**Descripción de normalize.css:**

normalize.css es una pequeña biblioteca CSS que hace que los navegadores rendericen todos los elementos de forma más consistente y en línea con los estándares modernos. Es una alternativa al CSS reset.

**Incluir normalize.css:**

Usando CDN:
````html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
````
Usando archivos locales:
```html
<link rel="stylesheet" href="./normalize.css">
```
**Uso de normalize.css:**

Asegúrate de incluir normalize.css antes de tu archivo de estilos principal.

```html
<head>
  <link rel="stylesheet" href="normalize.css">
  <link rel="stylesheet" href="styles.css">
</head>
```

## 9. Referencias y Recursos Adicionales

**Documentación Adicional**:
- [Documentación de HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [Documentación de CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Documentación de JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Documentación de glider.js](https://github.com/NickPiscitelli/Glider.js/blob/master/README.md)
- [Documentación de GitHub Pages](https://docs.github.com/en/pages)

**Recursos Útiles**:
- [W3Schools](https://www.w3schools.com)
- [CSS-Tricks](https://css-tricks.com)
