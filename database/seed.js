const faker = require('faker');
const Promise = require('bluebird');
const Sequelize = require('sequelize');

const DATABASE = 'relatedLists';

const USER = 'root';

const PASSWORD = 'blooper2010';

const dbInit = new Sequelize('', USER, PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});


// Returns random int (1 - max)
const getRandomInt = max => Math.ceil(Math.random() * Math.floor(max));

// Returns an array of 3 related tracks that does
// not include the source track or repeat related tracks
const getUniqueRelatedTracks = (songIndex, numOfSongs) => {
  const relatedTracks = [];
  while (relatedTracks.length !== 3) {
    const newRelatedTrack = getRandomInt(numOfSongs);
    if (newRelatedTrack !== songIndex && !relatedTracks.includes(newRelatedTrack)) {
      relatedTracks.push(newRelatedTrack);
    }
  }
  return relatedTracks;
};

// Build Data entries that are added into database by promises (ensure correct order of addition)
const buildData = (numOfSongs) => {
  const songs = [];
  const artists = [];
  const albums = [];
  const relatedTracks = [];

  for (let i = 1; i <= numOfSongs / 2; i += 1) {
    artists.push({
      artistNumFollowers: getRandomInt(3000000),
      artistCity: faker.address.city(),
      artistCountry: faker.address.country(),
      artistProfileImage: faker.image.avatar(),
      artistVerified: Math.random() >= 0.5,
      artistName: faker.name.lastName(),
    });
  }
  for (let i = 1; i <= numOfSongs; i += 1) {
    songs.push({
      songTitle: faker.name.jobTitle(),
      songImage: faker.image.avatar(),
      songLength: `${getRandomInt(4)}:${getRandomInt(59)}`,
      songGenre: faker.lorem.word(),
      songPostedDate: `${getRandomInt(9)} years ago`,
      songNumPlays: getRandomInt(2000000),
      songNumLikes: getRandomInt(1500000),
      songNumReposts: getRandomInt(20000),
      songNumComments: getRandomInt(10000),
      artistId: getRandomInt(numOfSongs / 2),
    });
  }
  for (let j = 1; j <= numOfSongs; j += 1) {
    for (let i = 1; i <= 3; i += 1) {
      albums.push({
        albumTitle: faker.commerce.productName(),
        albumType: faker.random.word(),
        albumImage: faker.image.avatar(),
        artistId: getRandomInt(numOfSongs / 2),
        songId: j,
      });
    }
    // For each songId, getUniqueRelatedTracks and add each as related tracks to the source songId
    const tracks = getUniqueRelatedTracks(j, numOfSongs);
    for (let k = 0; k < tracks.length; k += 1) {
      relatedTracks.push({
        songId: j,
        relatedTrackId: tracks[k],
      });
    }
  }
  return {
    artists,
    songs,
    albums,
    relatedTracks,
  };
};


// syncs the data base and drops any pre-existing tables
const sync = (db) => db.sync({ force: true });

// Create arrays of data, sync the database with the schema, and create table entries with the data
// const seed = (db) => {
//   const {
//     artists,
//     songs,
//     albums,
//     relatedTracks,
//   } = buildData(100);
//   sync(db)
//     .then(() => Promise.each(artists, artist => Artist.create(artist)))
//     .then(() => Promise.each(songs, song => Song.create(song)))
//     .then(() => Promise.each(albums, album => Album.create(album)))
//     .then(() => Promise.each(relatedTracks, relatedTrack => RelatedSongs.create(relatedTrack)));
// };

// Search for Databae and Create it if none exists
dbInit.query(`CREATE DATABASE IF NOT EXISTS ${DATABASE}`)
  .then(() => {
    console.log(`Database ${DATABASE} created`);

    const db = new Sequelize(DATABASE, USER, PASSWORD, {
      host: 'localhost',
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

    const {
      artists,
      songs,
      albums,
      relatedTracks,
    } = buildData(100);
    sync(db)
      .then(() => Promise.each(artists, artist => Artist.create(artist)))
      .then(() => Promise.each(songs, song => Song.create(song)))
      .then(() => Promise.each(albums, album => Album.create(album)))
      .then(() => Promise.each(relatedTracks, relatedTrack => RelatedSongs.create(relatedTrack)));
  });
