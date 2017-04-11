var axios = require('axios');

//take address from user input to output lat, lng, and neighborhood info
// function geocodeCall(req, res, next) {
// 	//need to somehow bring location information into here
// 	const address = this.refs.location.value;
// 	//*****************
// 	// const address = req.body.address;
//   	axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.MAP_KEY}`)
//   	.then((info) => {
// 	    //store user location data returned from api call in res.locals
// 	    res.locals.lat = info.data.results[0].geometry.location.lat;
// 	    res.locals.lng = info.data.results[0].geometry.location.lng;
// 	    res.locals.city = info.data.results[0].address_components[3].long_name;
// 	    res.locals.neighborhood = info.data.results[0].address_components[2].long_name;

// 	    return next();
// 	  	}).catch((err) => {
// 	    console.log(err);
//   	});
// }


// //use data from geocodeCall funtion to plug into darksky api to get weather data for user's inputted location.
// function darkSkyCall (req, res, next) {
//   axios.get(`https://api.darksky.net/forecast/${process.env.WEATHER_KEY}/${res.locals.lat},${res.locals.lng}`)
//   .then((weather) => {
//     //store data returned from api call in res.locals
//     //round temp to get rid of decimals for UX
//       res.locals.temp = Math.round(weather.data.currently.temperature);
//       res.locals.summary = weather.data.currently.summary;
//       res.locals.forecast = weather.data.daily.data;
//       return next();
//      }).catch((err) => {
//       console.log(err);
//   });
// }

// module.exports = {
// 	geocodeCall,
// 	darkSkyCall
// }













