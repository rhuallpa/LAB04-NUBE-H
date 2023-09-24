[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/gTB7zC5o)


# Mi Proyecto de Blog de Moda

Este proyecto es un blog de moda en línea desarrollado con Node.js y Express. Proporciona información sobre las últimas tendencias en moda y productos de moda, y ademas contiene los html de producto y clientes y la lista de estos.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes:

- [Node.js](https://nodejs.org/): Puedes descargar Node.js desde el sitio web oficial.
Ademas necesitas tener express instalado y nodemon como dependencias del desarrollo de la aplicacion.

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/Tecsupsoft/lab04-microservicios-rhuallpa.git


Ve al directorio del proyecto:

cd la04-microservicios
Instala las dependencias del proyecto usando npm:

npm install
## Inicia la aplicación:


npm start
Esto iniciará la aplicación en el puerto 3000 por defecto. Puedes acceder a ella en tu navegador visitando http://localhost:3000.

Uso de Nodemon
Hemos configurado nodemon como una dependencia de desarrollo. Nodemon es una herramienta que reiniciará automáticamente la aplicación cuando se realicen cambios en el código. Para iniciar la aplicación con nodemon, utiliza el siguiente comando:


npm run dev

### Estructura del Proyecto

En esta sección, explicaremos la estructura de nuestro proyecto y cómo se organizan los archivos y directorios principales.

- `index.js`: Este archivo es el punto de entrada principal de nuestra aplicación Node.js. Aquí definimos las rutas, configuramos el servidor Express y manejamos la lógica principal de la aplicación.

- `static/`: Este directorio contiene las vistas HTML de nuestra aplicación. Aquí encontrará varios archivos HTML que representan diferentes páginas de nuestro sitio web, como `producto.html`, `clientes.html`, `index.html`, y más.

- `package.json`: Este archivo es la configuración de npm y contiene las dependencias y scripts necesarios para ejecutar y construir nuestro proyecto.

#### Desarrollo de index.js

En `index.js`, manejamos la lógica principal de nuestra aplicación. Aquí están algunas de las tareas que realizamos en este archivo:

- Configuramos y ejecutamos un servidor Express.
- Definimos las rutas para manejar las solicitudes HTTP, como las rutas para productos y clientes.
- Conectamos nuestra aplicación a una base de datos (si es aplicable).
- Implementamos la lógica para procesar las solicitudes y enviar respuestas.
- Configuramos middleware, como body parsers y cors (si es necesario).

#### Desarrollo de HTML en el directorio static/

Dentro del directorio `static/`, encontrará varios archivos HTML que representan diferentes partes de nuestro sitio web. A continuación, describiremos algunos de estos archivos:

- `producto.html`: Esta página muestra información sobre productos. Aquí se pueden agregar detalles sobre cómo se muestran los productos y cómo se obtienen los datos.

- `clientes.html`: Esta página muestra información sobre clientes. Puede explicar la estructura de la página y cómo se accede a los datos de los clientes.

- `index.html`: Esta es la página de inicio de nuestro sitio web. Puede mencionar qué contenido se muestra en la página de inicio y cómo se relaciona con otras partes de la aplicación.

A medida que desarrolles más funcionalidad en tu proyecto, puedes continuar agregando detalles y explicaciones adicionales sobre cómo funciona cada parte en esta sección de tu README.md. Esto ayudará a los colaboradores y usuarios a comprender mejor tu proyecto y cómo contribuir a él.

## Crea un fork del repositorio.
Crea una nueva rama para tu contribución: git checkout -b mi-contribucion.
Realiza tus cambios y asegúrate de seguir las guías de estilo.
Haz commit de tus cambios: git commit -m "Agrega nueva característica".
Haz push de la rama: git push origin mi-contribucion.
Abre una solicitud de extracción en GitHub.