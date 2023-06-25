import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

const INITIAL_STATE = {
  artistName: '',
  isLoading: false,
};

export default class Search extends Component {
  state = {
    artistName: '',
    artista: '',
    isLoading: false,
    arrayArtist: [],
  };

  onInputChange = ({ target }) => {
    this.setState({
      artistName: target.value,
    });
  };

  handleClear = () => {
    this.setState(INITIAL_STATE);
  };

  onHandleClick = async () => {
    const {
      artistName,
    } = this.state;
    const artist = {
      artistName,
    };
    this.setState({ isLoading: true, artista: artistName });
    const response = await searchAlbumsAPI(artist.artistName);
    this.setState({ arrayArtist: response });
    this.handleClear();
  };

  render() {
    const { artistName, isLoading, artista, arrayArtist } = this.state;
    const LIMIT_CARACTERES = 2;
    return (
      <div data-testid="page-search" className="flex">
        <Header />
        <div
          className="flex flex-col w-full h-screen"
        >
          <section
            className="h-1/6 border-b-2 border-b-white p-3 flex justify-center items-center"
          >
        {isLoading && <Loading />}
        {isLoading
        || (
          <form className="flex">
            <label htmlFor="artistName">
              <input
                data-testid="search-artist-input"
                id="artistName"
                name="artistName"
                type="text"
                onChange={ this.onInputChange }
                value={ artistName }
                placeholder="Nome do Artista"
                className="pl-4 p-3 h-10 w-full rounded-xl"
              />
            </label>
            <button
              data-testid="search-artist-button"
              type="button"
              disabled={ artistName.length < LIMIT_CARACTERES }
              onClick={ this.onHandleClick }
              className="w-400 h-10 mt-400 ml-440 rounded-2xl p-2 text-white w-max bg-sky-300"
            >
              Pesquisar
            </button>
          </form>)}
          </section>
          <div className="bg-slate-100 h-screen overflow-x-scroll">
        { arrayArtist && (arrayArtist.length !== 0 ? (
        <>
          <h3 className="flex justify-center text-center text-blue mt-10">
            Resultado de álbuns de:
            {' '}
            { artista }
          </h3>
          <div className="grid gap-4 grid-cols-6">
        {arrayArtist.map((element) => (
            <Link
              key={ element.collectionId }
              data-testid={ `link-to-album-${element.collectionId}` }
              to={ `/album/${element.collectionId}` }
            >
              <img src={ element.artworkUrl100 } alt={ element.collectionName } 
              className="flex items-center text-right mt-5 justify-center w-40 h-40"
              />
              <p className="font-semibold">
                {element.collectionName}
              </p>
            </Link>
        ))}
        </div>
        </>)
        : <span className="flex justify-center mt-10">Nenhum álbum foi encontrado</span>
        )}
      </div>
      </div>
      </div>
    );
  }
}
