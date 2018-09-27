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
//Generate Album table data file
const createAlbumDataFile = () => {
	fs.writeFile('./data/albumData.csv', 'id, albumTitle, albumType, albumImage, artistId, songId\n', function (err) {
	  if (err) throw err;
	  console.log('Album File Created!');
	});
}

//Generate Album table data file
let albumId = 1;
const genAlbumData = (numOfAlbums, count) => {
  let csv = '';
	for (let i=0; i < numOfAlbums; i++) {
		for (let j=0; j < 3; j++) {
			csv += `${albumId}, ${faker.commerce.productName()}, ${faker.random.word()}, ${faker.image.avatar()}, ${getRandomInt(numOfAlbums/ 3)}, ${i}\n`
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

//Create Song table data file
const createSongDataFile = () => {
	fs.writeFile('./data/songData.csv', 'id, songImage, songNumPlays, songNumLikes, songNumReposts, songNumComments, artistId\n', function (err) {
	  if (err) throw err;
	  console.log('Song File Created!');
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

//Create Artist table data file
const createArtistDataFile = () => {
	fs.writeFile('./data/artistData.csv', 'id, artistNumFollowers, artistCity, artistCountry, artistProfileImage, artistName\n', function (err) {
	  if (err) throw err;
	  console.log('Artist File Created!');
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
const createRelatedSongsDataFile = () => {
	fs.writeFile('./data/relatedSongsData.csv', 'songId, relatedTrackId\n', function (err) {
	  if (err) throw err;
	  console.log('Related Data File Created!');
	});
}

//Generate RelatedSongs table data file
const genRelatedSongsData = (numOfRelated, count) => {
  let csv = '';
	for (let i=0; i < numOfRelated; i++) {
		const tracks = getUniqueRelatedTracks(i, numOfRelated);
		tracks.forEach((track)=>{
			csv += `${(count*numOfRelated)-i}, ${track}\n`
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
const buildData = (numOfData, noOfChunks) => {
	let chunkSize = numOfData/noOfChunks;
  createSongDataFile();
  genSongData(chunkSize, noOfChunks);
  createArtistDataFile();
  genArtistData(Math.floor(chunkSize/3), noOfChunks);
  createAlbumDataFile();
  genAlbumData(Math.floor(chunkSize/3), noOfChunks);
  createAlbumDataFile();
  genAlbumData(nchunkSize, noOfChunks);
  createRelatedSongsDataFile();
  genRelatedSongsData(chunkSize, noOfChunks);
}

buildData(10000000, 1000);
