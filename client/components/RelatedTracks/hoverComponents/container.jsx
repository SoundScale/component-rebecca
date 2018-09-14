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
      </div>
    );
  }
}

module.exports = Container;
