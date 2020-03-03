import React from "react";
import "./SongDetail.css"

const SongDetail = props => {
  if (!props.song) return null;

  return (
    <article>
      <h3>Artist: {props.song["im:artist"].label}</h3>
      <h3>Title: {props.song["im:name"].label}</h3>
      <h3>Chart Position: Number {props.chartPosition}</h3>

      <img src={props.song["im:image"][2].label}/>
    </article>
  );
};

export default SongDetail;
