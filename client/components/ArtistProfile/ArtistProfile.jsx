const React = require('react');
const convert = require('./../convert.js');
const FollowButton = require('./FollowButton.jsx');

const ArtistProfile = ({ artist }) => (
  <div>
    <img src={artist.artistProfileImage} className="artist-image" alt="pic" />
    <p className="artist-name-tooltip">{artist.artistName}</p>
    <div className="artist-attribute">
      <img className="followers-image" alt="followers" />
      <span className="number-followers attribute-hover">{convert(artist.artistNumFollowers)}</span>
    </div>
    <div className="number-followers artist-location">
      {`${artist.artistCity}, ${artist.artistCountry}`}
    </div>
    <FollowButton />
  </div>
);

module.exports = ArtistProfile;
