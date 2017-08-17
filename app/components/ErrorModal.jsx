const React = require('React');

class ErrorModal extends React.Component {
  getDefaultProps(){
    return {
      title: 'Error'
    };
  }
  propTypes: {
    title: React.PropTyes.string,
    message: React.PropTypes.string.isRequired
  }
  componentDidMount(){
    const modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }
  render() {
    const {title, message} = this.props;
    return(
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );
  }
};

module.exports = ErrorModal;
