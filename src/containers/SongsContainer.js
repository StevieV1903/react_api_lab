import React, { Component } from "react";
import SongSelector from "../components/SongSelector";
import SongDetail from "../components/SongDetail";

export default class SongsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      selectedSongId: ""
    };
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

    fetch(url)
      .then(response => response.json())
      .then(result => result.feed)
      .then(entries => entries.entry)
      .then(songs => this.setState({ songs: songs }))
      .catch(error => console.error);
  }

  render() {
    return (
      <div>
        <h2>Top 20 Songs on Itunes</h2>
        <SongSelector songs={this.state.songs} />
      </div>
    );
  }
}
