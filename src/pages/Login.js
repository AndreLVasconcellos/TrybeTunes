import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';
import Form from '../components/Form';
import logo from '../assets/logo.svg';
import group6 from '../assets/Group-6.svg';
import group5 from '../assets/Group5.svg';

export default class Login extends Component {
  state = {
    name: '',
    isEnterButtonDisabled: true,
    isLoading: false,
    teste: false,
  };

  onInputChange = ({ target }) => {
    this.setState({
      name: target.value,
    }, this.validationFields);
  };

  onSaveButtonClick = async () => {
    const {
      name,
    } = this.state;
    const newUser = {
      name,
    };
    this.setState({ isLoading: true });
    await createUser(newUser);
    this.setState({ teste: true });
  };

  validationFields = () => {
    const { name } = this.state;
    const LIMIT_CARACTERES = 3;
    const testImput = name.length >= LIMIT_CARACTERES;
    this.setState({
      isEnterButtonDisabled: !testImput,
    });
  };

  render() {
    const { isLoading, teste, isEnterButtonDisabled } = this.state;
    return (
      <div
        data-testid="page-login"
        className="flex items-center justify-center w-auto h-screen mx-2.5 px-20"
      >
        <img
          alt="logo2"
          src={ group6 }
          className="align-top left-0 absolute top-0 w-2/12"
        />
        <img
          alt="logo3"
          src={ group5 }
          className="rigth-0 absolute bottom-0 right-0 w-2/12"
        />
        <div
          className="bg-white
        h-450 w-3/6
        p-20 px-20 rounded-2xl ml-265 mb-20
        text-center"
        >
          <img
            alt="logo"
            src={ logo }
            className="flex items-center justify-center w-6/12 m-auto"
          />
          <br />
          <br />
          { isLoading && <Loading />}
          { isLoading
        || <Form
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          formState={ this.state }
          disabled={ isEnterButtonDisabled }
        /> }
          { teste && <Redirect to="/search" /> }
        </div>
      </div>
    );
  }
}
