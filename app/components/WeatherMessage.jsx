const React = require('react');

class WeatherMessage extends React.Component {
  render(){
    return(
      <h3>It is {this.props.temp} F in {this.props.location}</h3>
    );
  }
};

module.exports = WeatherMessage;
