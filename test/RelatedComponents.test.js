const React = require('react');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const { tracks, albums } = require('./mockData.js');
const Modules = require('../client/components');

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

describe('<RelatedComponents />', () => {
  test('Should pass down correct props to children components', async () => {
    const wrapper = shallow(<Modules.RelatedComponents />);
    await wrapper.setState({
      tracks,
      albums,
    });

    const relatedTracks = wrapper.find(Modules.RelatedTracks);
    const relatedAlbums = wrapper.find(Modules.RelatedAlbums);

    expect(relatedTracks.props().tracks).toBe(tracks);
    expect(relatedAlbums.props().albums).toBe(albums);
  });
});
