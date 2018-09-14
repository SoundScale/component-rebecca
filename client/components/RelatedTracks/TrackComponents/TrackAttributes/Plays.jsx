const React = require('react');

const Plays = ({ plays }) => (
  <div className="track-attribute">
    <img className="play-image" alt="play" />
    <span>{plays}</span>
  </div>
);

module.exports = Plays;
