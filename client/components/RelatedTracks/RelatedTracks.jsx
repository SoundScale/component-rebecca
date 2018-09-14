const React = require('react');
const Track = require('./Track.jsx');
const RelatedTracksTitle = require('./RelatedTracksTitle.jsx');
const Container = require('./hoverComponents/container.jsx');

class RelatedTracks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { relatedTracks } = this.props;
    return (
      <div className="related-tracks-wrapper">
        <RelatedTracksTitle />
        <div className="track-list-container">
          {relatedTracks.map((track, index) => (
            <div className="track-container" key={index}>
              <Track track={track} />
              <div className="hover-container">
                <Container />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

module.exports = RelatedTracks;
