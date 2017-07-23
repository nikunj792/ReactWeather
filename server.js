var express = require('express');

//create Our App.

var app = express();
app.use(express.static('public'));
app.listen(3000,function(){
	console.log("Server is UP");
})