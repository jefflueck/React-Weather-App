const React = require('React');

class ErrorModal extends React.Component {
  componentDidMount(){
    const modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }
  render() {
    return(
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>Some Title</h4>
        <p>Our error message</p>
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
