var url = require('url');
var path = require('path');
var httpHandler = require('./httpHandler');

var router = function(req, res) {
    var parsedUrl = url.parse(req.url);
    var basename = path.basename(parsedUrl.pathname);
    console.log(parsedUrl);

    httpHandler(req, res, basename);
};

module.exports = router;
