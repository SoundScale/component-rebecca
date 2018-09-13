const React = require('react');
const axios = require('axios');
const RelatedTracks = require('./components/RelatedTracks/RelatedTracks.jsx');
const RelatedAlbums = require('./components/RelatedAlbums/RelatedAlbums.jsx');

class RelatedComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      tracks: null,
      albums: ['Album one', 'Album two', 'Album three'],
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    const songId = 2;
    const self = this;
    axios.get(`http://localhost:3002/relatedTracks/${songId}`)
      .then(({ data }) => {
        console.log('Related Tracks', data);
        this.setState({ tracks: data, loading: false });
      })
      .catch((error) => {
        console.log(error);
      });
    axios.get(`http://localhost:3002/relatedAlbums/${songId}`)
      .then(({ data }) => {
        console.log('Related Albums', data);
        this.setState(() => ({
          albums: data,
          loading: false,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { loading, tracks, albums } = this.state;
    if (loading) {
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
