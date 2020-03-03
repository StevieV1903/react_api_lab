import React from "react";

const SongDetail = props => {
  if (!props.song) return null;

  return (
    <article>
      <h3>Artist: {props.song["im:artist"].label}</h3>
      <h3>Title: {props.song["im:name"].label}</h3>
      <h3>Chart Position: Number {props.chartPosition}</h3>
    </article>
  );
};

export default SongDetail;
