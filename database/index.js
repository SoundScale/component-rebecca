const sequelize = require('sequelize');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// let Song = sequelize.define('song', {
//   id: {
//     // Primary Key
//   },
//   songTitle: {
//     type: sequelize.STRING,
//   },
//   songImage: {
//     type: sequelize.STRING,
//   },
//   songLength: {
//     type: sequelize.STRING,
//   },
//   songGenre: {
//     type: sequelize.STRING,
//   },
//   songPostedDate: {
//     type: sequelize.STRING,
//   },
//   songNumPlays: {
//     type: sequelize.NUMBER,
//   },
//   songNumLikes: {
//     type: sequelize.NUMBER,
//   },
//   songNumReposts: {
//     type: sequelize.NUMBER,
//   },
//   songNumComments: {
//     type: sequelize.NUMBER,
//   },
//   artist_id: { // Foreign Key
//     type: sequelize.NUMBER,
//   },
// });

// Song = {};
