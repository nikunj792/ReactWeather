var React = require('react');

var WeatherMessage = React.createClass({
	render : function(){
		var {location,temp} = this.props;
		return (
		<div id="message">its {temp} in {location}</div>
		);
	}
});
module.exports = WeatherMessage;