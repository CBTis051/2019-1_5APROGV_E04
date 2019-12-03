var http = require('http');
http.createServer(function (req, res){

    res.writeHead(200, {'content-Type': 'application/json; charset=utf-8'});

    var objeto = {
        mensaje : 'Hola mundo Node JS Repo GIT - Cota Gutiérrez Gustavo\n'
    };

    var json = JSON.stringify(objeto);
    
     res.end(json);

}).listen(8081);
console.log('Server running on port 8081');
