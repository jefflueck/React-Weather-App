const React = require('react');
const{IndexLink} = require('react-router');

class ActiveLink extends React.Component {
  render() {
    return(
      <IndexLink to={this.props.to} activeClassName="active" activeStyle={{fontWeight: "bold"}}>{this.props.children}</IndexLink>
    )
  }
};

module.exports = ActiveLink;
