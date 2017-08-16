const React = require('react');

var WeatherMessage = (props) => {
  return(
    <h3 className="text-center">It is {props.temp} F in {props.location}</h3>
  )
};

module.exports = WeatherMessage;
