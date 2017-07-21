const axios = require('axios');

const  OPEN_WEATHER_MAP_URL = 'http://samples.openweathermap.org/data/2.5/weather?appid=5d0a2ef2cca550311d7015dc03763d54&units=imperial';

module.exports = {
  getTemp(location) {
    var encodedLocation = encodedURIComponent(location);
    var requestUrl = `${OPEN.WEATHER_MAP_URL}&q=${encodedLocation}`;

    axios.get(requestUrl).then((res) => {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message)
      } else {
        return res.data.main.temp;
      }
      ((res) => {
        throw new Error(res.data.message);
      })
    })
  }
};
