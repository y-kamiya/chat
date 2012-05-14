var fs = require('fs');
var path = require('path');

var httpHandler = function(req, res, filename) {
    var ext = path.extname(filename).substr(1);

    switch(ext) {
    case '':
    case 'html':
        res.setHeader('Content-Type', 'text/html');
        break;
    case 'js':
        res.setHeader('Content-Type', 'text/javascript');
        break;
    default: return;
    }

    var pathname = path.join('./', ext, filename);
    console.log('httpHandler', pathname);
    fs.readFile(pathname, function(err, data) {
        if(err) throw err;
        console.log(data);
        res.write(data);
        res.end();
    });
};

module.exports = httpHandler;
