var express = require('express');

//create Our App.

var app = express();
const PORT = process.env.PORT || 3000;
app.use(function(req,resp,next){
	if(req.header['x-forwarded-proto']==='http'){
		next();
	}else{
		res.redirect('http://'+req.hostname + req.url);
	}
});
app.use(express.static('public'));
app.listen(PORT,function(){
	console.log("Server is UP"+PORT);
})