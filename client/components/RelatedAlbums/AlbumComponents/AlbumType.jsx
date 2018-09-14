const React = require('react');

class AlbumType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { type } = this.props;
    return (<div className="album-type">{type}</div>);
  }
}

module.exports = AlbumType;
