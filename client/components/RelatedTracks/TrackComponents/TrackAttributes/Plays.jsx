const React = require('react');
const convert = require('../../../convert.js');

const Plays = ({ plays }) => (
  <div className="track-attribute">
    <img className="play-image" alt="play" />
    <span>{convert(plays)}</span>
  </div>
);

module.exports = Plays;
