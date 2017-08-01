const React = require('react');
const {Link, IndexLink} = require('react-router');
const ActiveLink = require('ActiveLink');

var Nav = () => {
  return(
    <div>
      <h2>Nav Component</h2>
      <ActiveLink to="/">Get Weather</ActiveLink>
      <ActiveLink to="/about">About</ActiveLink>
      <ActiveLink to="/examples">Examples</ActiveLink>
    </div>
  );
}

module.exports = Nav;
