import React from "react";
import "./SongDetail.css"

const SongDetail = props => {
  if (!props.song) return null;

  return (
    <article>
      <h2>I-Chart Position: Number {props.chartPosition}</h2>
      <img src={props.song["im:image"][2].label}/>
      <h3>Song Title: {props.song["im:name"].label}</h3>
      <h3>Artist Name: {props.song["im:artist"].label}</h3>
      <h3>Release Date: {props.song["im:releaseDate"].attributes.label} </h3>
      <h3>Download Price: {props.song["im:price"].label} </h3>
    </article>
  );
};

export default SongDetail;
