const React = require('react');
const SVG = require('react-inlinesvg');
const KeyImage = require('./image.svg');
const ViewAll = require('./../ViewAll.jsx');

class RelatedTracksTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="related-tracks-title">
        <img className="related-tracks-title-image" alt="wave" />
        {/* <SVG src={KeyImage} /> */}
        Related tracks
        <ViewAll />
      </div>
    );
  }
}

module.exports = RelatedTracksTitle;
