const React = require('react');

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
    };
  }

  render() {
    return (
      <div>
        <span className="sc-button-play" />
        <button type="button" className="sc-hover-button like-button" />
        <button type="button" className="sc-hover-button options-button" />
      </div>
    );
  }
}

module.exports = Container;
