const React = require ('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');

class Weather extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      location: 'Hyderabad',
      temp: 40
    };
  }

  handleSearch = (locaton) => {
    this.setState({
      location: locaton,
      temp: 45
    });
  };
  render(){
    return(
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage location={this.state.location} temp={this.state.temp}/>
      </div>
    );
  }
};

module.exports = Weather;
