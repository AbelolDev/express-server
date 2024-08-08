const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Configura 'public' como el directorio de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'webs', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'webs', 'about.html'))
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'webs', 'contact.html'))
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
