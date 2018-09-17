const React = require('react');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const { albums } = require('./mockData.js');
const Modules = require('../client/components');

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

describe('<AlbumArtist />', () => {
  test('Should render the ArtistPopUp component for the album Artist ', async () => {
    const wrapper = shallow(<Modules.AlbumArtist artist={albums[0].artist} />);

    const artistPopUp = wrapper.find(Modules.ArtistPopUp);

    expect(wrapper.find('div').children()).toHaveLength(1);

    expect(artistPopUp.props().artist).toBe(albums[0].artist);
  });
});
