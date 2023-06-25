import React, { Component } from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

export default class Favorites extends Component {
  state = {
    isLoading: false,
    favorite: [],
  };

  componentDidMount() {
    this.handleSaveFavorite();
  }

  componentDidUpdate(prevProps, prevState) {
    const { favorite } = this.state;
    if (prevState.favorite !== favorite) {
      this.handleSaveFavorite();
    }
  }

  handleSaveFavorite = async () => {
    this.handleIsLoading();
    const response = await getFavoriteSongs();
    this.setState({ favorite: response });
    this.handleIsLoading();
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
