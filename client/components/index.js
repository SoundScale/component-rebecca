const RelatedComponents = require('./RelatedComponents.jsx');
const ViewAll = require('./ViewAll.jsx');
const convert = require('./convert.js');
const RelatedTracks = require('./RelatedTracks/RelatedTracks.jsx');
const RelatedAlbums = require('./RelatedAlbums/RelatedAlbums.jsx');
const Track = require('./RelatedTracks/Track.jsx');
const Album = require('./RelatedAlbums/Album.jsx');
const TrackArtist = require('./RelatedTracks/TrackComponents/TrackArtist.jsx');
const TrackAttributes = require('./RelatedTracks/TrackComponents/TrackAttributes.jsx');
const TrackImage = require('./RelatedTracks/TrackComponents/TrackImage.jsx');
const TrackTitle = require('./RelatedTracks/TrackComponents/TrackTitle.jsx');
const AlbumArtist = require('./RelatedAlbums/AlbumComponents/AlbumArtist.jsx');
const AlbumType = require('./RelatedAlbums/AlbumComponents/AlbumType.jsx');
const AlbumImage = require('./RelatedAlbums/AlbumComponents/AlbumImage.jsx');
const AlbumTitle = require('./RelatedAlbums/AlbumComponents/AlbumTitle.jsx');
const ArtistPopUp = require('./ArtistProfile/ArtistPopUp.jsx');
const ArtistProfile = require('./ArtistProfile/ArtistProfile.jsx');
const FollowButton = require('./ArtistProfile/FollowButton.jsx');

module.exports = {
  RelatedComponents,
  ViewAll,
  convert,
  RelatedTracks,
  RelatedAlbums,
  Track,
  Album,
  TrackArtist,
  TrackAttributes,
  TrackImage,
  TrackTitle,
  AlbumArtist,
  AlbumType,
  AlbumImage,
  AlbumTitle,
  ArtistPopUp,
  ArtistProfile,
  FollowButton,
};
