const React = require('react');
const ToolTip = require('react-portal-tooltip').default;
const ArtistProfile = require('./ArtistProfile.jsx');

class ArtistPopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTooltipActive: false,
    };
  }

  showTooltip() {
    this.setState({ isTooltipActive: true })
  }

  hideTooltip() {
    this.setState({ isTooltipActive: false })
  }

  render() {
    const { artist } = this.props;
    const parent = `#${artist.artistName}`;
    return (
      <div
        onMouseEnter={this.showTooltip.bind(this)}
        onMouseLeave={this.hideTooltip.bind(this)}
        id={artist.artistName}
        className="track-artist attribute-hover"
      >
        {artist.artistName}
        <ToolTip
          active={this.state.isTooltipActive}
          position="bottom"
          arrow="center"
          parent={parent}
          tooltipTimeout={100}
        >
          <div className="artist-tool-tip">
            <ArtistProfile artist={artist} />
          </div>
        </ToolTip>
      </div>
    );
  }
}

module.exports = ArtistPopUp;
