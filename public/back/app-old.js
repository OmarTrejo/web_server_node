const http = require('http');

http.createServer((req, res) => {
    
    res.write('HOLA MUNDO');

    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.writeHead(200, {'Content-Type': 'application/json'});
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'});

    // res.write('id, nombre\n');
    // res.write('1, omar\n');
    // res.write('2, juan\n');
    // res.write('3, rafael\n');
    // res.write('4, arturo\n');
    // res.write('5, elias\n');

    // const persona = {
    //     id: 1,
    //     nombre : 'Omar'
    // };

    // res.write('404 | Page not found');
    // res.write(JSON.stringify(persona));

    res.end();
})
.listen( 8080 );

console.log('Escuchando el puerto ', 8080 );