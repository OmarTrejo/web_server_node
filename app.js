require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();

//variables de entorno para desplegar web server
const port = process.env.PORT;

// ESTE COMANDO PARA QUE SE INICIALICE LA APLICACION
// "start": "node app.js" en package.json/scripts

//TODO: require('hbs') 
//HANDLEBARS
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático sin ningun path extra
app.use( express.static('public'));

// app.get('/', (req, res) => {
//     res.send('Home page');
// });

// app.get('/hola-mundo',(req, res) => {
//     res.send('Hola mundo desde su respectiva ruta');
// });

app.get('/', (req, res) => {
    res.render('home', {
        nombre : 'Omar Trejo',
        titulo : 'Curso de node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre : 'Omar Trejo',
        titulo : 'Curso de node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre : 'Omar Trejo',
        titulo : 'Curso de node'
    });
});

// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html');
// });

// app.get('/elements', (req, res) => {
//     res.sendFile(__dirname + '/public/elements.html');
// });

// app.get('*', (req, res) => {
//     res.sendFile(__dirname + '/public/404.html');
// });

app.listen(port, () => {
    console.log(`Example app listenign at http://localhost:${port}`);
});