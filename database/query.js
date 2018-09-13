const {
  Artist,
  Song,
  Album,
} = require('../database/index.js');

// Return array of related tracks for any songId
// along with the artist info for each track
const getRelatedTracks = (songId, callback) => {
  const relatedTracksWithArtistInfo = [];
  Song.find({
    where: {
      id: songId,
    },
    include: [
      { model: Song, as: 'relatedTracks', include: [{ model: Artist }] },
    ],
  })
    .then((res) => {
      res.relatedTracks.forEach((track) => {
        relatedTracksWithArtistInfo.push(track.dataValues);
      });
      callback(relatedTracksWithArtistInfo);
    });
};

// Return Artist information for any artistId
const getArtistInfo = (artistId, callback) => {
  Artist.find({
    where: {
      id: artistId,
    },
  }).then(artist => callback(artist.dataValues));
};

// Return an array of related Albums for any songId
// along with the artist info for each album
const getRelatedAlbums = (songId, callback) => {
  const relatedAlbums = [];
  Album.findAll({
    where: {
      songId,
    },
    include: [
      { model: Artist },
    ],
  }).then((albums) => {
    albums.forEach(album => relatedAlbums.push(album.dataValues));
    callback(relatedAlbums);
  });
};

module.exports.getRelatedTracks = getRelatedTracks;
module.exports.getArtistInfo = getArtistInfo;
module.exports.getRelatedAlbums = getRelatedAlbums;
