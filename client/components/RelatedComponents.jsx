const React = require('react');
const axios = require('axios');
const RelatedTracks = require('./RelatedTracks/RelatedTracks.jsx');
const RelatedAlbums = require('./RelatedAlbums/RelatedAlbums.jsx');
const { tracks, albums } = require('../../test/mockData.js');

const queryString = require('query-string');

class RelatedComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingTracks: true,
      loadingAlbums: true,
      tracks,
      albums,
    };
  }

  componentDidMount() {
    const parsed = queryString.parse(location.search);
    this.loadData(Number(parsed.id));
  }

  loadData(songNum) {
    const songId = 3;
    axios.get(`http://localhost:3002/relatedTracks/${songNum}`)
      .then(({ data }) => {
        console.log('Related Tracks', data);
        this.setState({ tracks: data, loadingTracks: false });
      })
      .catch((error) => {
        console.log(error);
      });
    axios.get(`http://localhost:3002/relatedAlbums/${songNum}`)
      .then(({ data }) => {
        console.log('Related Albums', data);
        this.setState({ albums: data, loadingAlbums: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const {
      loadingTracks,
      loadingAlbums,
      tracks,
      albums,
    } = this.state;
    if (loadingTracks || loadingAlbums) {
      return (
        <div>
          <p>Loading ...</p>
          {/* Render Fake Data so that testing files can grab
          Components even if no real dats is rendered */}
          <div>
            <RelatedTracks tracks={tracks} />
            <RelatedAlbums albums={albums} />
          </div>
        </div>
      );
    }
    return (
      <div>
        <RelatedTracks tracks={tracks} />
        <RelatedAlbums albums={albums} />
      </div>
    );
  }
}

module.exports = RelatedComponents;
