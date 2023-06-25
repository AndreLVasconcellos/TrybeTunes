import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { updateUser, getUser } from '../services/userAPI';

export default class ProfileEdit extends Component {
  state = {
    name: '',
    email: '',
    image: '',
    description: '',
    isDisabled: true,
    teste: false,
    isLoading: false,
  };

  componentDidMount() {
    this.hadleGetUser();
  }

  hadleGetUser = async () => {
    const response = await getUser();
    const { name, email, image, description } = response;
    this.setState({
      name,
      email,
      image,
      description,
    }, this.handleErro);
  };

  handleErro = () => {
    const { name, email, description } = this.state;
    const errorCases = [
      !name.length,
      !email.length,
      !email.match(/^\S+@\S+$/i),
      !description.length,
    ];
    const formularioPreenchido = errorCases.every((error) => error !== true);

    this.setState({
      isDisabled: !formularioPreenchido,
    });
  };

  handleInput = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, this.handleErro);
  };

  handleSaveButton = async () => {
    const { email, name, description, image } = this.state;
    // const { history } = this.props;
    this.setState({ isLoading: true });
    await updateUser({ email, name, description, image });
    // this.handlePush();
    // history.push('/profile');
    this.setState({ teste: true });
  };

  // handlePush = () => {
  //   const { history } = this.props;
  //   history.push('/profile');
  // };

  render() {
    const {
      name,
      email,
      image,
      description,
      isDisabled,
      isLoading,
      teste,
    } = this.state;
    return (
      <div data-testid="page-profile-edit" className="flex">
        <Header />
        <div
          className="flex w-full h-screen overflow-y-scroll
        justify-center items-center"
        >
          { isLoading ? <Loading /> : (
            <div
              className="flex w-full h-screen overflow-y-scroll
                justify-center items-center"
            >
              <div
                className="bg-white h-450 w-3/6 p-20
                  px-20 rounded-2xl m-auto text-center"
              >
                <img src={ image } alt={ name } />
                <div className="flex justify-center m-5">
                  <p className="font-semibold">Imagem do Perfil:</p>
                  <input
                    name="image"
                    type="text"
                    value={ image }
                    data-testid="edit-input-image"
                    onChange={ this.handleInput }
                    placeholder="Link da imagem do perfil"
                    className="mx-2 border-solid border-2 border-blue-700 rounded-md"
                  />
                </div>
                <div className="flex justify-center m-5">
                  <h3 className="font-semibold">Nome:</h3>
                  <input
                    type="text"
                    name="name"
                    placeholder="Digite seu nome"
                    value={ name }
                    data-testid="edit-input-name"
                    onChange={ this.handleInput }
                    className="mx-2 border-solid border-2 border-blue-700 rounded-md"
                  />
                </div>
                <div className="flex justify-center m-5">
                  <h3 className="font-semibold">Email:</h3>
                  <input
                    type="email"
                    name="email"
                    value={ email }
                    data-testid="edit-input-email"
                    onChange={ this.handleInput }
                    placeholder="Digite seu e-mail"
                    className="mx-2 border-solid
                          border-2 border-blue-700 rounded-md"
                  />
                </div>
                <div className="flex justify-center m-5">
                  <h3 className="font-semibold">Description:</h3>
                  <textarea
                    value={ description }
                    name="description"
                    data-testid="edit-input-description"
                    onChange={ this.handleInput }
                    placeholder="Sobre mim"
                    className="mx-2 border-solid border-2 border-blue-700 rounded-md"
                  />
                </div>
                <div className="flex justify-center m-5">
                  <button
                    type="button"
                    data-testid="edit-button-save"
                    disabled={ isDisabled }
                    onClick={ this.handleSaveButton }
                    className="w-400 h-10 mt-400 ml 440
                        rounded-2xl p-2 text-white w-full bg-blue-700"
                  >
                    Salvar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        { teste && <Redirect to="/profile" />}
      </div>
    );
  }
}
