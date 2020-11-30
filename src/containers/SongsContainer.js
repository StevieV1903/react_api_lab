import React, { Component } from "react";
import SongSelector from "../components/SongSelector";
import SongDetail from "../components/SongDetail";
import "./SongsContainer.css"

export default class SongsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      selectedSongId: ""
    };
    this.handleSongSelected = this.handleSongSelected.bind(this);
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

  handleSongSelected(songId) {
    this.setState({ selectedSongId: songId });
  }

  getSelectedSong() {
    const selectedSong = this.state.songs.find(song => {
      return song.id.attributes["im:id"] === this.state.selectedSongId;
    });

    return selectedSong;
  }

  getChartPosition() {
    const selectedSong = this.state.songs.find(song => {
      return song.id.attributes["im:id"] === this.state.selectedSongId;
    });
    let chartPosition = this.state.songs.indexOf(selectedSong);
    return (chartPosition += 1);
  }

  render() {
    return (
      <div className="app-container">
        <h1>Music Charts</h1>
        <SongSelector
          songs={this.state.songs}
          onSongSelected={this.handleSongSelected}
        />
        <SongDetail
          song={this.getSelectedSong()}
          chartPosition={this.getChartPosition()}
        />
      </div>
    );
  }
}
