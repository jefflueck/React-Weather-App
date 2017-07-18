const React = require('react');
const Nav = require('Nav');

class Main extends React.Component {
  constructor(props){
    super(props);
    console.info(props)
  }
  render(){
    return(
      <div>
        <Nav/>
        <h2>Main Component</h2>
        {this.props.children}
      </div>
    );
  }
};

module.exports = Main;
