var http = require('http');
http.createServer(function (req, res)
{
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});

    var objeto = 
    {
        mensaje : 'Hola mundo Node JS Rep GIT - Rivera Sánchez Ricardo Isaac \n'
    };

    var json = JSON.stringify(objeto);

    res.end(json)

}).listen(8081);
console.log('Server Runing on Port 8081');