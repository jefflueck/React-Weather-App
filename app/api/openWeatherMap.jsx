const axios = require('axios');

const  OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=5d0a2ef2cca550311d7015dc03763d54&units=imperial';

module.exports = {
    getTemp(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then((res) => {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message)
      } else {
        return res.data.main.temp;
      }
      ((err) => {
        throw new Error(res.data.message);
      })
    })
  }
};
