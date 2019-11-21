var http = require('http');
http.createServer(function (req, res)
{
    res.writehead(200, {'content-Type': 'application/json; charset=utf-8'});

    res.end('Hola mundo Node JS Rep GIT - Rivera Sánchez Ricardo Isaac \n');

}).listen(8081);
console.log('Server Runing on Port 8081');