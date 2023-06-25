import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MusicMap from './MusicMap';
import Loading from './Loading';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

export default class MusicCard extends Component {
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
    const { musics } = this.props;
    const { isLoading, favorite } = this.state;
    return (
      <div className="w-full m-4 p-5 flex flex-col items-center justify-center">
        {isLoading ? <Loading /> : musics.map((music) => (
          <MusicMap
            favorite={ favorite }
            music={ music }
            key={ music.trackId }
            handleMusics={ this.handleMusics }
          />
        ))}
      </div>
    );
  }
}

MusicCard.propTypes = {
  musics: PropTypes.arrayOf(PropTypes.shape({
    trackId: PropTypes.number,
    trackName: PropTypes.string,
    previewUrl: PropTypes.string,
  })).isRequired,
};
