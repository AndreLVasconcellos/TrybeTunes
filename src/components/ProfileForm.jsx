import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProfileForm extends Component {
  render() {
    const { objProfile: { name, email, image, description } } = this.props;
    return (
      <div className="flex-col w-full h-screen overflow-y-scroll">
        <div className="flex">
            <img
          src={ image }
          alt={ name }
          data-testid="profile-image"
          className="flex items-center justify-center w-40 h-40 rounded-full shadow-2xl m-auto"
        />
        </div>
        <div className="h-screen w-full bg-slate-100">
        <br/>
        <br/>
        <Link className="flex items-center text-center justify-center" to="/profile/edit">Editar perfil</Link>
        <br/>
        <br/>
        <h4 className="font-semibold text-center mt-3">Nome:</h4>
        <p className="text-center">{ name }</p>
        <br/>
        <br/>
        <h4 className="font-semibold text-center mt-3">Email:</h4>
        <p className="text-center">{ email }</p>
        <br/>
        <br/>
        <h4 className="font-semibold text-center">Description:</h4>
        <p className="text-center">{ description }</p>
      </div>
      </div>
    );
  }
}

ProfileForm.propTypes = {
  objProfile: PropTypes.objectOf(PropTypes.string),
}.isRequired;
