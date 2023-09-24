const express = require('express');
const app = express();

// Ruta para el archivo index.html en la raíz
app.get('/', (req, res) => {
  res.sendFile('./static/index.html', {
    root: __dirname
  });
});

// Ruta para la página "Nosotros"
app.get('/nosotros', (req, res) => {
  res.sendFile('./static/nosotros.html', {
    root: __dirname
  });
});

// Ruta para la página "Catálogo"
app.get('/catalogo', (req, res) => {
  res.sendFile('./static/catalogo.html', {
    root: __dirname
  });
});

// Ruta para la página "Contactos"
app.get('/contactos', (req, res) => {
  res.sendFile('./static/contactos.html', {
    root: __dirname
  });
});

// Ruta para la página "Fashion"
app.get('/fashion', (req, res) => {
  res.sendFile('./static/fashion.html', {
    root: __dirname
  });
});
  
// Ruta para la página "Travel"
app.get('/travel', (req, res) => {
  res.sendFile('./static/travel.html', {
      root: __dirname
  });
});
  

// Ruta para la página "Holyday"
app.get('/holyday', (req, res) => {
  res.sendFile('./static/holyday.html', {
        root: __dirname
  });
});



// Datos estáticos para clientes y productos
const clientes = [
  { id: 1, nombre: 'Mariana Ramirez Centeno', email: 'mramirez@email.com', telefono: '987-456-7890' },
  { id: 2, nombre: 'Rebeca Huallpa Centeno', email: 'rhuallpa@email.com', telefono: '987-654-3210' },
  { id: 3, nombre: 'Leonardo Jesus Romero', email: 'ljesus@email.com', telefono: '903-555-5555' },
];

const productos = [
  { id: 1, nombre: 'Abrigo Brown', precio: 500.99, categoria: 'Ropa' },
  { id: 2, nombre: 'Botines Prada', precio: 2000.99, categoria: 'Calzado' },
  { id: 3, nombre: 'Reloj casio', precio: 5000.99, categoria: 'Accesorios' },
];


// Ruta para la página "Catálogo" con datos dinámicos
app.get('/productos', (req, res) => {
  res.sendFile('static/productos.html', { root: __dirname });
});

app.get('/clientes', (req, res) => {
  res.sendFile('static/clientes.html', { root: __dirname });
});

// Ruta para obtener datos de productos
app.get('/api/productos', (req, res) => {
  res.json(productos);
});

// Ruta para obtener datos de clientes
app.get('/api/clientes', (req, res) => {
  res.json(clientes);
});

// Iniciar el servidor en el puerto 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});

// Manejo de Rutas no Encontradas (404)
app.use((req, res) => {
  res.status(404).send('No se encontro tu pagina.....!!!');
});


