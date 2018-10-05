require('newrelic');
const express = require('express');
const cors = require('cors');
const {
  getRelatedTracks,
  getRelatedAlbums,
  getSongs,
  getSong,
  // createSong,
  // updateSong,
  // deleteSong,
} = require('../database/query.js');

const app = express();

app.use(cors());

app.use('/songs/:id', express.static('public'));

// app.get('/:id', (req, res) => {
//   res.send('Hello World!');
// });

app.get('/relatedTracks/:id', (req, res) => {
  console.log('related tracks endpoint hit');
  getRelatedTracks(req.params.id, data => res.json(data));
});

app.get('/relatedAlbums/:id', (req, res) => {
  console.log('related albums endpoint hit');
  getRelatedAlbums(req.params.id, data => res.json(data));
});

app.get('/api/songs/', (req, res) => {
  getSongs(req.params.id, data => res.json(data));
});

app.get('/api/songs/:id', (req, res) => {
  getSong(req.params.id, data => res.json(data));
});


// app.post('/api/songs/:id', (req, res) => {
//   createSong(req.params.id, () => res.send());
// });


// app.put('/api/songs/:id', (req, res) => {
//   updateSong(req.params.id, () => res.send());
// });

// app.delete('/api/songs/:id', (req, res) => {
//   deleteSong(req.params.id, () => res.send());
// });

app.listen(3002, () => console.log('Example app listening on port 3002!'));
