import React from "react";

const SongSelector = props => {
  const options = props.songs.map(song => {
    return (
      <option value={song.id.attributes["im:id"]}>{song.title.label}</option>
    );
  });

  return (
    <select>
      <option>Choose a song</option>
      {options}
    </select>
  );
};

export default SongSelector;
