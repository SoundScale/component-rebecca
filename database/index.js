const Sequelize = require('sequelize');

const DATABASE = 'relatedListsCom';

const USER = 'root';

const PASSWORD = '';

const dbInit = new Sequelize('', USER, PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

dbInit.query(`CREATE DATABASE IF NOT EXISTS ${DATABASE}`)
  .then(() => {
    console.log(`Database ${DATABASE} created`);
    const db = new Sequelize(DATABASE, USER, PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      logging: false,
    });
  });


const db = new Sequelize(DATABASE, USER, PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  insecureAuth: true,
  logging: false,
});


// Model Definition
const ArtistSchema = db.define('artist', {
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

const SongSchema = db.define('song', {
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

const AlbumSchema = db.define('album', {
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

const RelatedSongsSchema = db.define('relatedSongs', {});

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


const artist = (sequelize) => {
  const Artist = sequelize.define('artist', ArtistSchema, { timestamps: false });
  return Artist;
};

const song = (sequelize) => {
  const Song = sequelize.define('artist', SongSchema, { timestamps: false });
  return Song;
};

const album = (sequelize) => {
  const Album = sequelize.define('artist', AlbumSchema, { timestamps: false });
  return Album;
};

const relatedSong = (sequelize) => {
  const RelatedSongs = sequelize.define('artist', RelatedSongsSchema, { timestamps: false });
  return RelatedSongs;
};

module.exports = model;

module.exports = {
  db,
  Artist,
  Song,
  Album,
  RelatedSongs,
};
