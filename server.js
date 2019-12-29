const express = require('express');
const app = express();
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser());
const port = process.env.port || 8000;

app.get('/', function(req, res){
res.status(200).sendFile(path.join(__dirname, "public", "index.html"));

});

app.post('/', function(req, res){
    res.end(JSON.stringify(req.body));
});

app.listen(port, function(){
    console.log("we are listening at Port 3000");
})