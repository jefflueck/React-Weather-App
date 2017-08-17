const React = require('react');

class WeatherForm extends React.Component {
   onFormSubmit = (e) => {
      e.preventDefault();

      const location = this.location.value;

      if(location.length > 0) {
        this.location.value = ' ';
        this.props.onSearch(location);
    }
  }
  render(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="search" ref={(ref) => this.location = ref} placeholder="Search weather by city"/>
          <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    )
  }
};

module.exports = WeatherForm;
