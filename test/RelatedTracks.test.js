const React = require('react');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const { tracks } = require('./mockData.js');
const Modules = require('../client/components');

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

describe('<RelatedTracks />', () => {
  test('Should render Related-Tracks-Wrapper and Track-List-Container', async () => {
    const wrapper = shallow(<Modules.RelatedTracks tracks={tracks} />);

    expect(wrapper.find('div.related-tracks-wrapper').children()).toHaveLength(2);
  });
});
