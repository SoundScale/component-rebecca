const React = require('react');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const { albums } = require('./mockData.js');
const Modules = require('../client/components');

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

describe('<Albums />', () => {
  test('Should render each Related Album entry correctly and pass down corrsponding props to the sub-components from each corresponding album ', async () => {
    const wrapper = shallow(<Modules.Album album={albums[0]} />);

    const albumImage = wrapper.find(Modules.AlbumImage);
    const albumArtist = wrapper.find(Modules.AlbumArtist);
    const albumTitle = wrapper.find(Modules.AlbumTitle);
    const albumType = wrapper.find(Modules.AlbumType);

    expect(wrapper.find('div.related-track').children()).toHaveLength(2);

    expect(wrapper.find('div.related-track-info').children()).toHaveLength(3);

    expect(albumImage.props().image).toBe(albums[0].albumImage);

    expect(albumArtist.props().artist).toBe(albums[0].artist);

    expect(albumTitle.props().title).toBe(albums[0].albumTitle);

    expect(albumType.props().type).toBe(albums[0].albumType);
  });
});
