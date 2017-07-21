const React = require ('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

class Weather extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      location: 'Hyderabad',
      temp: 40
    };
  }

  handleSearch = (location) => {
    let that = this;
    openWeatherMap.getTemp(location).then((temp) => {
      that.setState ({
        location: location,
        temp: temp
      });
    }, ((errorMessage) => {
      alert(errorMessage);
    })
  )
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
