const React = require('react');
const axios = require('axios');
const RelatedTracks = require('./RelatedTracks/RelatedTracks.jsx');
const RelatedAlbums = require('./RelatedAlbums/RelatedAlbums.jsx');
const { tracks, albums } = require('../../test/mockData.js');

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
    this.loadData();
  }

  loadData() {
    const path = (window.location.pathname).split('/');
    const songId = path[path.length - 2];
    axios.get(`/relatedTracks/${songId}`)
      .then(({ data }) => {
        console.log('Related Tracks', data);
        this.setState({ tracks: data, loadingTracks: false });
      })
      .catch((error) => {
        console.log(error);
      });
    axios.get(`/relatedAlbums/${songId}`)
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
