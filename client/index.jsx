const React = require('react');
const ReactDOM = require('react-dom');
const RelatedTracks = require('./components/RelatedTracks/RelatedTracks.jsx');
const RelatedAlbums = require('./components/RelatedAlbums/RelatedAlbums.jsx');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: ['RT one', 'RT two', 'RT three'],
      albums: ['Album one', 'Album two', 'Album three'],
    };
  }

  // componentDidMount() {
  //   const songId = 1;
  //   this.fetchData(`http://localhost:3002/relatedTracks/${songId}`, (data) => {
  //     this.setState({
  //       relatedTracks: data,
  //     });
  //     console.log(data);
  //   });
  // }

  fetchData(url, callback) {
    axios.get(url)
      .then(({ data }) => {
        callback(data);
      });
  };

  render() {
    return (
      <div>
        <RelatedTracks relatedTracks={this.state.tracks} />
        <RelatedAlbums relatedAlbums={this.state.albums} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
