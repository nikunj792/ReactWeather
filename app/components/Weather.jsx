var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherAPI =require('openWeatherAPI');
var Weather = React.createClass({
	getInitialState :function(){
		return {
		 isLoading :false
		};
	},
	handleSearch: function(location){
		var that =this;
		this.setState({isLoading:true});
		openWeatherAPI.getTemp(location).then(function(temp){
			that.setState({
			location:location,
			temp:temp,
			isLoading:false
		})
		},function(err){
			alert('Error Message,City Not Found');
			that.setState({isLoading :false});
		});
	},	
	render: function(){
		//ES6 destructuring.
		var {isLoading,location , temp} = this.state;
		function renderMessage(){
			if(isLoading){
				return <h1>Fetching Weather...</h1>
			}else if(temp && location){
				return <WeatherMessage location={location} temp={temp}/>
			}
		}
		return (
			<div>
			<h2>Weather Component</h2>
			<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		);
	}
});
module.exports = Weather;