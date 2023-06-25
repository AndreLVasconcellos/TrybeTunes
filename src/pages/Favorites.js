import React, { Component } from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import { addSong, removeSong, getFavoriteSongs } from '../services/favoriteSongsAPI';

export default class Favorites extends Component {
  state = {
    isLoading: false,
    favorite: [],
  };

  componentDidMount() {
    this.handleSaveFavorite();
  }

  handleSaveFavorite = async () => {
    this.handleIsLoading();
    const response = await getFavoriteSongs();
    this.setState({ favorite: response });
    this.handleIsLoading();
  };

  handleAddSongs = async (music) => {
    await addSong(music);
    this.handleSaveFavorite();
    this.handleIsLoading();
  };

  handleRomoveSong = async (music) => {
    await removeSong(music);
    this.handleSaveFavorite();
    this.handleIsLoading();
  };

  handleMusics = (checked, music) => {
    this.handleIsLoading();
    if (checked) this.handleAddSongs(music);
    else this.handleRomoveSong(music);
  };

  handleIsLoading = () => {
    this.setState((prev) => ({
      isLoading: !prev.isLoading,
    }));
  };

  render() {
    const { favorite } = this.state;
    return (
      <div className="flex" data-testid="page-favorites">
        <Header />
        <div className="flex flex-col w-full h-screen">
        <h1 className="font-bold mt-11 mb-11 text-center">Favorite Songs</h1>
        <div className="bg-slate-100 h-screen overflow-x-scroll">
           <MusicCard
          musics={ favorite }
        />
        </div>
        </div>
        </div>
    );
  }
}
