var express = require('express');
var apiRouter = require('./api.route.js');
var bodyParser = require('body-parser');

// Using express; using PORT 3000 to host my web.
var app = express();
const PORT = process.env.PORT || 3000;

//configure to use HTTPS and also redirect HTTP calls to HTTPS.
//Need this configuration for Heroku uploads
app.use(function(req, res, next) {
	if(req.headers['x-forwarded-proto'] === 'https') {
		res.redirect('http://' + req.hostname + req.url);
	} else {
		next();
	}
});

//Using body-parser to extract the entire body portion of an incoming request and expose it on req.body.
//Req.body is much easier to interface with other components.
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(express.static('public'));

//use darksky api from api.router.js file
app.use('/api/darksky', apiRouter);

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
