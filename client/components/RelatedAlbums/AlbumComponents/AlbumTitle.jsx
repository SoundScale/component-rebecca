const React = require('react');

class AlbumTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title } = this.props;
    return (<div className="track-title">{title}</div>);
  }
}

module.exports = AlbumTitle;
