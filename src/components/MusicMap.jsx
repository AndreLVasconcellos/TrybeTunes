import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AiFillHeart } from 'react-icons/ai';

export default class MusicMap extends Component {
  state = {
    checked: false,
  };

  componentDidMount() {
    const { music, favorite } = this.props;
    const IsCheck = favorite.some((e) => e.trackId === music.trackId);
    if (IsCheck) {
      this.setState({
        checked: true,
      });
    }
  }

  handleFavoriteMusics = () => {
    const { music, handleMusics } = this.props;
    const { checked } = this.state;
    this.setState({
      checked: !checked,
    }, () => {
      handleMusics(!checked, music);
    });
  };

  render() {
    const { music } = this.props;
    const { checked } = this.state;
    return (
      <div className="w-full m-4 p-5 flex items-center justify-center">
        <h2 className="uppercase font-bold flex mr-4">{music.trackName}</h2>
        <audio
          data-testid="audio-component"
          src={ music.previewUrl }
          controls
        >
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
        <label htmlFor={ music.trackId }>
          <input
            type="checkbox"
            name="checkbox"
            id={ music.trackId }
            data-testid={ `checkbox-music-${music.trackId}` }
            onChange={ this.handleFavoriteMusics }
            checked={ checked }
            className="hidden peer"
          />
          <AiFillHeart className="peer-checked:text-red-600 mx-6" />
        </label>
      </div>
    );
  }
}

MusicMap.propTypes = {
  music: PropTypes.shape({
    trackId: PropTypes.number,
    trackName: PropTypes.string,
    previewUrl: PropTypes.string,
  }),
  handleMusics: PropTypes.func,
  favorite: PropTypes.arrayOf(PropTypes.number),
}.isRequired;
