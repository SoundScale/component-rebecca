const React = require('react');
const Popup = require('reactjs-popup').default;
const OptionsWindow = require('./OptionsWindow.jsx');

class OptionsButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  optionsClick() {
    this.setState(prevState => ({ clicked: !prevState.clicked }));
  }

  render() {
    const { setModalSong, track } = this.props;
    const { clicked } = this.state;
    const click = this.optionsClick.bind(this);
    let button;
    if (clicked) {
      button = <button type="button" className="sc-hover-button options-button-clicked" onClick={this.optionsClick.bind(this)} />;
    } else {
      button = <button type="button" className="sc-hover-button options-button border-hover" />;
    }
    return (
      <Popup
        key={track.songTitle}
        trigger={() => (
          button
        )}
        on="click"
        closeOnDocumentClick
        mouseLeaveDelay={1}
        arrow={false}
        onOpen={click}
        onClose={click}
        contentStyle={{ width: "150px", padding: "0px", border: "none" }}
      >
        <OptionsWindow setModalSong={setModalSong} track={track} key={track.songTitle} />
      </Popup>
    );
  }
}

module.exports = OptionsButton;
