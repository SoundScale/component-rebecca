// const {
//   Artist,
//   Song,
//   Album,
// } = require('../database/index.js');
const Sequelize = require('sequelize');

const DATABASE = 'relatedListsComponent';

const USER = 'root';

const PASSWORD = 'test';

const hostDb = 'mysql';

const db = new Sequelize(DATABASE, USER, PASSWORD, {
  host: hostDb,
  dialect: 'mysql',
  logging: false,
});

// Model Definition
const Artist = db.define('artist', {
  artistNumFollowers: {
    type: Sequelize.INTEGER,
  },
  artistCity: {
    type: Sequelize.STRING,
  },
  artistCountry: {
    type: Sequelize.STRING,
  },
  artistProfileImage: {
    type: Sequelize.STRING,
  },
  artistVerified: {
    type: Sequelize.BOOLEAN,
  },
  artistName: {
    type: Sequelize.STRING,
  },
});

const Song = db.define('song', {
  songTitle: {
    type: Sequelize.STRING,
  },
  songImage: {
    type: Sequelize.STRING,
  },
  songLength: {
    type: Sequelize.STRING,
  },
  songGenre: {
    type: Sequelize.STRING,
  },
  songPostedDate: {
    type: Sequelize.STRING,
  },
  songNumPlays: {
    type: Sequelize.INTEGER,
  },
  songNumLikes: {
    type: Sequelize.INTEGER,
  },
  songNumReposts: {
    type: Sequelize.INTEGER,
  },
  songNumComments: {
    type: Sequelize.INTEGER,
  },
});

const Album = db.define('album', {
  albumTitle: {
    type: Sequelize.STRING,
  },
  albumType: {
    type: Sequelize.STRING,
  },
  albumImage: {
    type: Sequelize.STRING,
  },
});

const RelatedSongs = db.define('relatedSongs', {});

// Establish Song/Artist relationship - Each Song will have a foreign key referencing its Artist
Song.belongsTo(Artist);
Artist.hasMany(Song, { as: 'tracks' });

// Establish Related Tracks relationship where one song has many songs (3 related tracks)
Song.belongsToMany(Song, { as: 'relatedTracks', through: RelatedSongs });

// Establish Album relationships - Each Song belongs to 3 unique Albums,
// an Album belongs to an Artist, and an Artist has many Albums
Album.belongsTo(Song);
Album.belongsTo(Artist);
Artist.hasMany(Album);


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

const getSongs = (callback) => {
  Song.findAll()
  .then((res) => {
    callback(res);
  });
};

const getSong = (songId, callback) => {
  Song.findAll({
    where: {
      id: songId
    }
  })
  .then((res) => {
    callback(res);
  });
};

//Assumes receives object containing {songTitle, songImage, 
//songNumPlays, songNumLikes, songNumReposts, songNumComments, artistId}
const createSong = (songObj, callback) => {
  Song.create(songObj)
  // .then(()=>{
    //INSERT FUNCTION THAT GETS NUMBER OF IDS IN SONG TABLE, SETS THAT
    //AS SONG ID, THEN ADDS {SONGID, RELATED TRACKS: RANDOM NUMBER} THREE TIMES IN DATABASE
  // })
  .then(()=> {
    callback();
  })
};

const updateSong = (songObj, callback) => {
  Song.update(songObj, {
    where: {
      id: songId}
  })
  .then(()=>{
    callback();
  })
};

const deleteSong = (songId, callback) => {
  Song.destroy({
    where: {
      id: songId
    }
  })
  .then(RelatedSongs.destroy({
    where: {
      songId
    }
  })
  .then((res) => {
    callback(res);
  });
};


module.exports.getRelatedTracks = getRelatedTracks;
// module.exports.getArtistInfo = getArtistInfo;
module.exports.getRelatedAlbums = getRelatedAlbums;
module.exports.getSongs = getSongs;
module.exports.getSong = getSong;
module.exports.createSong = createSong;
module.exports.updateSong = updateSong;
module.exports.deleteSong = deleteSong;



