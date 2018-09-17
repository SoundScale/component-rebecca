const React = require('react');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const { tracks } = require('./mockData.js');
const Modules = require('../client/components');

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

describe('<TrackArtist />', () => {
  test('Should render the ArtistPopUp component for the Track Artist ', async () => {
    const wrapper = shallow(<Modules.TrackArtist artist={tracks[0].artist} />);

    const artistPopUp = wrapper.find(Modules.ArtistPopUp);

    expect(wrapper.find('div').children()).toHaveLength(1);

    expect(artistPopUp.props().artist).toBe(tracks[0].artist);
  });
});
