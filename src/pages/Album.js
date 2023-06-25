import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

export default class Album extends Component {
  state = {
    artName: '',
    albumName: '',
    artworkUrl100: '',
    musics: [],
  };

  componentDidMount() {
    this.handleAlbum();
  }

  handleAlbum = async () => {
    const { match: { params: { id } } } = this.props;
    const response = await getMusics(id);
    const newResponse = response.slice(1);
    const nameArt = response[0];
    const { artistName, collectionName, artworkUrl100 } = nameArt;
    this.setState({ artName: artistName,
      albumName: collectionName,
      artworkUrl100,
      musics: newResponse });
  };

  render() {
    const { artName, albumName, musics, artworkUrl100 } = this.state;
    return (
      <div className="flex" data-testid="page-album">
        <Header />
        <div className="flex flex-col w-full h-screen">
        <div className="h-1/6 p-3 flex justify-center items-center">
        <img
          src={ artworkUrl100 }
          alt={ albumName }
          className="flex items-center text-right mt-16 justify-center w-40 h-40 rounded-3xl shadow-2xl"
        />
        <h4
          data-testid="artist-name"
          className="text-left p-5 text-xs"
        >
          {artName}
        </h4>
        <h3
          data-testid="album-name"
          className="text-center font-bold ml-4"
        >
          {albumName}
        </h3>
        </div>
        <br/>
        <br/>
        <div className="bg-slate-100 h-screen overflow-x-scroll">
        <MusicCard
          musics={ musics }
        />
      
      </div>
      </div>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};
