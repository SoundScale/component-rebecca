const React = require('react');
const ViewAll = require('./ViewAll.jsx');

class RelatedTracksTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="related-tracks-title">
        Related tracks
      <ViewAll />
      </div>
    );
  }
}

module.exports = RelatedTracksTitle;
