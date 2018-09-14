const React = require('react');
const axios = require('axios');
const RelatedTracks = require('./RelatedTracks/RelatedTracks.jsx');
const RelatedAlbums = require('./RelatedAlbums/RelatedAlbums.jsx');

class RelatedComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingTracks: true,
      loadingAlbums: true,
      tracks: null,
      albums: null,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    const songId = 2;
    axios.get(`http://localhost:3002/relatedTracks/${songId}`)
      .then(({ data }) => {
        console.log('Related Tracks', data);
        this.setState({ tracks: data, loadingTracks: false });
      })
      .catch((error) => {
        console.log(error);
      });
    axios.get(`http://localhost:3002/relatedAlbums/${songId}`)
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
      return <p>Loading ...</p>;
    }
    return (
      <div>
        <RelatedTracks relatedTracks={tracks} />
        <RelatedAlbums relatedAlbums={albums} />
      </div>
    );
  }
}

module.exports = RelatedComponents;
