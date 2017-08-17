const React = require('react');

var About = (props) => {
  return(
  <div>
    <h1 className="text-center page-title">About</h1>
    <p>This app was built as a class project to display the power of react.js!</p>
    <p>Here are some of the resources I used:</p>
    <ul>
      <li>
        <a href="https://facebook.github.io/react/">React Website</a> - This is the JavaScript framework used.
      </li>
      <li>
        <a href="http://openweathermap.org/">Open Weather Map</a> - I used Open Wether Map to search for weather data by name.
      </li>
    </ul>
  </div>
  )
};

module.exports = About;
