const React = require('react');
const ViewAll = require('./../ViewAll.jsx');

class RelatedAlbumsTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="related-tracks-title">
        <img className="in-albums-title-image" alt="square" />
        In albums
        <ViewAll />
      </div>
    );
  }
}

module.exports = RelatedAlbumsTitle;
