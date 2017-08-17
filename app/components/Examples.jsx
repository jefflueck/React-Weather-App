const React = require('react');
const {IndexLink} = require('react-router');

var Examples = (props) => {
    return(
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here a few example locations to try out:</p>
      <ol>
        <li>
          <IndexLink to="/?location=Green Bay">Green Bay, WI</IndexLink>
        </li>
        <li>
          <IndexLink to="/?location=Chicago">Chicago, IL</IndexLink>
        </li>
      </ol>
    </div>
    )
  };

module.exports = Examples;
