import React from "react";
import "./SongSelector.css"

const SongSelector = props => {
  const options = props.songs.map(song => {
    return (
      <option
        value={song.id.attributes["im:id"]}
        key={song.id.attributes["im:id"]}
      >
        {song.title.label}
      </option>
    );
  });

  function handleChange(event) {
    props.onSongSelected(event.target.value);
  }

  return (
    <select onChange={handleChange} defaultValue="default">
      <option disabled value="default">
        Select a song
      </option>
      {options}
    </select>
  );
};

export default SongSelector;
