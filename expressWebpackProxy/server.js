var express = require('express');
var app = express();

var PORT = process.env.PORT || 3100;


app.all('/*',  function(req, res){
	
	res.send('\
		<html>\
		<head></head>\
		<body>\
			<script src="bundle.js"></script>\
			</body>\
			</html>\
	');
});


app.listen(PORT, function(){
	console.log("server running on " + PORT);
});