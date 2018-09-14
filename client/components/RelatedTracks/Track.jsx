const React = require('react');
const TrackImage = require('./TrackComponents/TrackImage.jsx');
const TrackArtist = require('./TrackComponents/TrackArtist.jsx');
const TrackTitle = require('./TrackComponents/TrackTitle.jsx');
const TrackAttributes = require('./TrackComponents/TrackAttributes.jsx');

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: true,
    };
  }

  render() {
    const {
      songTitle,
      songImage,
      songNumComments,
      songNumLikes,
      songNumPlays,
      songNumReposts,
      artist,
    } = this.props.track;
    return (
      <div>
        <div>
          <div className="related-track">
            <TrackImage songImage={songImage} />
            <div className="related-track-info">
              <TrackArtist artist={artist} />
              <TrackTitle songTitle={songTitle} />
              <TrackAttributes
                comments={songNumComments}
                likes={songNumLikes}
                plays={songNumPlays}
                reposts={songNumReposts}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Track;
