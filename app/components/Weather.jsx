const React = require ('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

class Weather extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false
    }
  };
  handleSearch = (location) => {
    let that = this;

    that.setState({isLoading: true});

    openWeatherMap.getTemp(location).then((temp) => {
      that.setState ({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, ((errorMessage) => {
      that.setState({isLoading: false});
      alert("That is not a valid city, please try again.");
    })
  )
};
  render(){
    // ES6 Destructuring
    var {isLoading, temp, location} = this.state;

    function renderMessage() {
        if (isLoading) {
          return<h3>Fetching Weather...</h3>
      } else if (temp && location) {
          return <WeatherMessage temp={temp} location={location}/>;
      }
    };
    return(
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
};

module.exports = Weather;
