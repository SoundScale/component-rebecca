--Enter into psql:
-- \i '/Users/rebeccayip/Dropbox (Personal)/hackreactor102/soundscale/component-rebecca-relatedLists/database/postgres/schema.sql'

DROP TABLE IF EXISTS SongDir CASCADE;

CREATE TABLE SongDir (
  id int NOT NULL,
  songTitle text
);

-- \copy SongDir FROM '/Users/rebeccayip/Dropbox (Personal)/hackreactor102/soundscale/component-rebecca-relatedLists/database/data/names.csv' DELIMITER ',' CSV;


DROP TABLE IF EXISTS Artist CASCADE;

CREATE TABLE Artist (
  id int NOT NULL primary key,
  artistNumFollowers text,
  artistCity text,
  artistCountry text,
  artistProfileImage text,
  artistName text
);

-- \copy Artist(id, artistNumFollowers, artistCity, artistCountry, artistProfileImage, artistName) FROM '/Users/rebeccayip/Dropbox (Personal)/hackreactor102/soundscale/component-rebecca-relatedLists/database/data/artistData.csv' DELIMITER ',' CSV HEADER;

DROP TABLE IF EXISTS Song CASCADE;

CREATE TABLE Song (
  id int NOT NULL primary key,
  songImage text,
  songNumPlays int,
  songNumLikes int,
  songNumReposts int,
  songNumComments int,
  artistId int references Artist(id)
);

CREATE INDEX ON Song(id);
-- \copy Song(id, songImage, songNumPlays, songNumLikes, songNumReposts, songNumComments, artistId) FROM '/Users/rebeccayip/Dropbox (Personal)/hackreactor102/soundscale/component-rebecca-relatedLists/database/data/songData.csv' DELIMITER ',' CSV HEADER;


DROP TABLE IF EXISTS Album;

CREATE TABLE Album (
  id int NOT NULL primary key,
  albumTitle text,
  albumType text,
  albumImage text,
  artistId int references Artist(id),
  songId int references Song(id)
);

CREATE INDEX ON Album(songId);
-- \copy Album(id, albumTitle, albumType, albumImage, artistId, songId) FROM '/Users/rebeccayip/Dropbox (Personal)/hackreactor102/soundscale/component-rebecca-relatedLists/database/data/albumData.csv' DELIMITER ',' CSV HEADER;

DROP TABLE IF EXISTS RelatedSongs;

CREATE TABLE RelatedSongs (
  songId int NOT NULL references Song(id),
  relatedTrackId int NOT NULL references Song(id)
);

CREATE INDEX ON relatedSongs(songId);
-- \copy RelatedSongs(songId, relatedTrackId) FROM '/Users/rebeccayip/Dropbox (Personal)/hackreactor102/soundscale/component-rebecca-relatedLists/database/data/relatedSongsData.csv' DELIMITER ',' CSV HEADER;


