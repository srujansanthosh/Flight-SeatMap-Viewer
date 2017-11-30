var express = require('express');
var app = express();
app.use(express.static(__dirname + '/app'));

var port = 3000;
app.listen(port,() => console.log(`API running on localhost:${port}`));
module.exports = app;
