var express = require('express');
var request = require('request');

const router = express.Router();

//Using express POST method to posting data to the server.
router.post('/', function(req, res, next) {
	console.log('********************', req.body);
	//Can get access to req.body.lat & req.body.lng information from geocode API; it is through using body-parser.
	var URL = `https://api.darksky.net/forecast/554adc11a1aa2fe0969a25c0a24ef7eb/${req.body.lat},${req.body.lng}`
	request(URL, (err, response, body) => {
		//Get weather information from Dark Sky API and set it to weather variable
		var weather = JSON.parse(body)
		//Send JSON response; convert object into JSON data format =
		res.json(weather)
	})
})

module.exports = router;
