const faker = require('faker');
const fs = require("fs");

//HELPERS
// Returns random int (1 - max)
const getRandomInt = max => Math.ceil(Math.random() * Math.floor(max));

// Returns an array of 3 related tracks that does not include the source track or repeat related tracks
const getUniqueRelatedTracks = (songId, numOfSongs) => {
  const relatedTracks = [];
  while (relatedTracks.length !== 3) {
    const newRelatedTrack = getRandomInt(numOfSongs);
    if (newRelatedTrack !== songId && !relatedTracks.includes(newRelatedTrack)) {
      relatedTracks.push(newRelatedTrack);
    }
  }
  return relatedTracks;
};

//DATA GENERATION

//Create Song table data file
const createSongDataFile = (numOfSongs, count) => {
	fs.writeFile('./data/songData.csv', 'id, songImage, songNumPlays, songNumLikes, songNumReposts, songNumComments, artistId\n', function (err) {
	  if (err) throw err;
	  console.log('Song File Created!');
	  genSongData(numOfSongs, count);
	});
}

//Generate Song table data file
const genSongData = (numOfSongs, count) => {
  let csv = '';
	for (let i=0; i < numOfSongs; i++) {
		csv += `${(count*numOfSongs)-i}, ${faker.image.avatar()},  ${getRandomInt(2000000)}, ${getRandomInt(1500000)}, ${getRandomInt(20000)}, ${getRandomInt(10000)}, ${getRandomInt(numOfSongs/3)}\n`
	};
	fs.appendFile('./data/songData.csv', csv, function (err) {
	  if (err) throw err;
	  console.log(`${numOfSongs} songs added!`);
    if (count>1) {
      genSongData(numOfSongs, --count)
    }
	});
}

//Generate Album table data file
const createAlbumDataFile = (numOfAlbums, count) => {
	fs.writeFile('./data/albumData.csv', 'id, albumTitle, albumType, albumImage, artistId, songId\n', function (err) {
	  if (err) throw err;
	  console.log('Album File Created!');
	  genAlbumData(numOfAlbums, count);
	});
}

//Generate Album table data file
let albumId = 1;
const genAlbumData = (numOfAlbums, count) => {
  let csv = '';
	for (let i=0; i < numOfAlbums; i++) {
		for (let j=0; j < 3; j++) {
			csv += `${albumId}, ${faker.commerce.productName()}, ${faker.random.word()}, ${faker.image.avatar()}, ${getRandomInt(numOfAlbums/ 3)}, ${(count*numOfAlbums)-i}\n`
			albumId++;
		};
	};
	fs.appendFile('./data/albumData.csv', csv, function (err) {
	  if (err) throw err;
	  console.log(`${numOfAlbums} albums added!`);
    if (count>1) {
      genAlbumData(numOfAlbums, --count)
    }
	});
}

//Create Artist table data file
const createArtistDataFile = (numOfArtists, count) => {
	fs.writeFile('./data/artistData.csv', 'id, artistNumFollowers, artistCity, artistCountry, artistProfileImage, artistName\n', function (err) {
	  if (err) throw err;
	  console.log('Artist File Created!');
	  genArtistData(numOfArtists, count);
	});
}

//Generate Artist table data file
const genArtistData = (numOfArtists, count) => {
  let csv = '';
	for (let i=0; i < numOfArtists; i++) {
		csv += `${(count*numOfArtists)-i}, ${getRandomInt(3000000)}, ${faker.address.city()}, ${faker.address.country()}, ${faker.image.avatar()}, ${faker.name.lastName()}\n`
	};
	fs.appendFile('./data/artistData.csv', csv, function (err) {
	  if (err) throw err;
	  console.log(`${numOfArtists} artists added!`);
    if (count>1) {
      genArtistData(numOfArtists, --count)
    }
	});
}

//Create RelatedSongs table data file
const createRelatedSongsDataFile = (numOfRelated, count) => {
	fs.writeFile('./data/relatedSongsData.csv', 'songId, relatedTrackId\n', function (err) {
	  if (err) throw err;
	  console.log('Related Data File Created!');
	  genRelatedSongsData(numOfRelated, count)
	});
}

//Generate RelatedSongs table data file
const genRelatedSongsData = (numOfRelated, count) => {
  let csv = '';
	for (let i = 0; i < numOfRelated; i++) {
		const tracks = getUniqueRelatedTracks(i, 10000000);
		tracks.forEach((track) => {
			csv += `${(count*numOfRelated) - i}, ${track}\n`;
		})
	};
	fs.appendFile('./data/relatedSongsData.csv', csv, function (err) {
	  if (err) throw err;
	  console.log(`${numOfRelated} related songs added!`);
    if (count>1) {
      genRelatedSongsData(numOfRelated, --count)
    }
	});
}

//Create RelatedSongs table data file - UPDATED SCHEMA FOR MONGO. RELATED TRACKS STORED AS ARRAY.
const createRelatedSongsDataFileMongo = (numOfRelated, count) => {
	fs.writeFile('./data/relatedSongsData-Mongo.csv', 'songId, relatedTrackId\n', function (err) {
	  if (err) throw err;
	  console.log('Related Data File Created!');
	  genRelatedSongsDataMongo(numOfRelated, count);
	});
}

//Generate RelatedSongs table data file
const genRelatedSongsDataMongo = (numOfRelated, count) => {
  let csv = '';
	for (let i=0; i < numOfRelated; i++) {
		const tracks = getUniqueRelatedTracks(i, numOfRelated);
		csv += `${(count*numOfRelated)-i}, ${JSON.stringify(tracks)}\n`
	};
	fs.appendFile('./data/relatedSongsData-Mongo.csv', csv, function (err) {
	  if (err) throw err;
	  console.log(`${numOfRelated} related songs added!`);
    if (count>1) {
      genRelatedSongsData(numOfRelated, --count)
    }
	});
}

//BUILD DATA

const buildData = (numOfData, noOfChunks) => {
	let chunkSize = numOfData/noOfChunks;
  // createSongDataFile(chunkSize, noOfChunks);
  // createArtistDataFile(Math.floor(chunkSize/3), noOfChunks);
  // createAlbumDataFile(chunkSize, noOfChunks);
  createRelatedSongsDataFile(chunkSize, noOfChunks);
  // createRelatedSongsDataFileMongo(chunkSize, noOfChunks);
}

buildData(10000000, 1000);
