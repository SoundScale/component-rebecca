const React = require('react');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const { tracks } = require('./mockData.js');
const Modules = require('../client/components');

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

describe('<Tracks />', () => {
  test('Should render each Related Track entry correctly and pass down corrsponding props to the sub-components from each corresponding track ', async () => {
    const wrapper = shallow(<Modules.Track track={tracks[0]} />);

    const trackImage = wrapper.find(Modules.TrackImage);
    const trackArtist = wrapper.find(Modules.TrackArtist);
    const trackTitle = wrapper.find(Modules.TrackTitle);
    const trackAttributes = wrapper.find(Modules.TrackAttributes);

    expect(wrapper.find('div.related-track').children()).toHaveLength(2);

    expect(wrapper.find('div.related-track-info').children()).toHaveLength(3);

    expect(trackImage.props().songImage).toBe(tracks[0].songImage);

    expect(trackArtist.props().artist).toBe(tracks[0].artist);

    expect(trackTitle.props().songTitle).toBe(tracks[0].songTitle);

    expect(trackAttributes.props().comments).toBe(tracks[0].songNumComments);
    expect(trackAttributes.props().likes).toBe(tracks[0].songNumLikes);
    expect(trackAttributes.props().plays).toBe(tracks[0].songNumPlays);
    expect(trackAttributes.props().reposts).toBe(tracks[0].songNumReposts);
  });
});
