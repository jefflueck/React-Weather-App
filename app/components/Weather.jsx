const React = require ('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');
const ErrorModal = require('ErrorModal');

class Weather extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false
    }
  };
  handleSearch = (location) => {
    const that = this;
    that.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(location).then((temp) => {
      that.setState ({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  }
  componentDidMount() {
    let location = this.props.location.query.location;

    if (location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }
  // Recieve props
  componentWillRecieveProps(newProps) {
    let location = newProps.location.query.location;

    if (location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }
  render(){
    // ES6 Destructuring
    let {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage () {
        if (isLoading) {
          return<h3 className="text-center">Fetching Weather...</h3>
      } else if (temp && location) {
          return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }
    return(
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
};

module.exports = Weather;
