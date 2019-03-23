var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname+'/www')).listen(8081);
console.log("Running on port 8081");