const React = require('react');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const { albums } = require('./mockData.js');
const Modules = require('../client/components');

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

describe('<RelatedTracks />', () => {
  test('Should render Related-Albums-Wrapper and 3 Album Components', async () => {
    const wrapper = shallow(<Modules.RelatedAlbums albums={albums} />);

    expect(wrapper.find('div.related-albums-wrapper').children()).toHaveLength(4);
  });
});
