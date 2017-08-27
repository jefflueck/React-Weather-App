const React = require('react');
const {Link, IndexLink} = require('react-router');
const ActiveLink = require('ActiveLink');

class Nav extends React.Component {
  onSearch = (e) => {
    e.preventDefault();

    let location = this.refs.search.value;
    let encodedLocation = encodeURIComponent(location);

    if(location.length > 0) {
      this.refs.search.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
  }
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <ActiveLink to="/">Get Weather</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/about">About</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/examples">Examples</ActiveLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather by city" ref="search"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
};

module.exports = Nav;
