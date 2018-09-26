const express = require('express');
const cors = require('cors');
const {
  getRelatedTracks,
  getRelatedAlbums,
} = require('../database/query.js');

const app = express();

app.use(cors());

app.use('/songs/:id', express.static('public'));

app.get('/:id', (req, res) => {
  res.send('Hello World!');
});

app.get('/relatedTracks/:id', (req, res) => {
  getRelatedTracks(req.params.id, data => res.json(data));
});

app.get('/relatedAlbums/:id', (req, res) => {
  getRelatedAlbums(req.params.id, data => res.json(data));
});

app.post('/song/:id', (req, res) => {

});

app.post('/relatedAlbums/:id', (req, res) => {

});

app.put('/relatedTracks/:id', (req, res) => {

});

app.put('/relatedAlbums/:id', (req, res) => {

});

app.delete('/relatedTracks/:id', (req, res) => {
	deleteRelatedTracks(req.params.id, data => res.send());
});

app.delete('/relatedAlbums/:id', (req, res) => {
	deleteRelatedAlbums(req.params.id, data => res.send());
});

app.listen(3002, () => console.log('Example app listening on port 3002!'));
