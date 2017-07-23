var axios =require('axios');

const Open_Weather_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=ac51f5882c81a464dd41cc48c6eaf037&units=imperial';


module.exports ={
	getTemp: function(location){
		//Template String.
		var encodedLocation = encodeURIComponent(location);
		var requestURL = `${Open_Weather_MAP_URL}&q=${encodedLocation}`;
		
		return axios.get(requestURL).then(function(res){
			if(res.data.cod && res.data.message){
				throw new Error(res.data.message);
			}
			else{
				return res.data.main.temp;
			}
		},function(res){
			throw new Error(res.data.message);
		});
	}
}