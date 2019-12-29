const express = require('express');
const app = express();
var path = require('path');
var fs = require('fs');

app.set('port', process.env.PORT || 8000);
var port = app.get('port');

app.get('/', function(req, res){
res.status(200).sendFile(path.join(__dirname, "public", "index.html"));

});


app.listen(port, function(){
    console.log("we are listening at Port 8000");
})