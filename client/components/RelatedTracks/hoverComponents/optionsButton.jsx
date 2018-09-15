const React = require('react');
const Popup = require('reactjs-popup');

class OptionsButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  optionsClick() {
    this.setState(prevState => ({ clicked: !prevState.clicked }));
  }

  render() {
    const { clicked } = this.state;
    if (clicked) {
      return <button type="button" className="sc-hover-button options-button-clicked" onClick={this.optionsClick.bind(this)} />;
      <Popup trigger={<button> Trigger</button>} position="right center">
        <div>Popup content here !!</div>
      </Popup>
    }
    return <button type="button" className="sc-hover-button options-button" onClick={this.optionsClick.bind(this)} />;
  }
}

module.exports = OptionsButton;
