var http = require('http');
http.createserver(function(req, res){
    res.writehead(200, {'content-type': 'application/json; charset=utf-8'});

    res.end('Hola mundu Node JS Repo GIT - Iturralde Ibarra Daniel Roberto\n');
}).listen(8081);
console.log('Server running on port 8081');
