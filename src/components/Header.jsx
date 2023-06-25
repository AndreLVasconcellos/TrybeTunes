import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { AiOutlineStar } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import Loading from './Loading';
import { getUser } from '../services/userAPI';
import logo from '../assets/logo.svg';

export default class Header extends Component {
  state = {
    name: '',
    isloading: false,
  };

  componentDidMount() {
    this.setState({ isloading: true }, async () => {
      const user = await getUser();
      this.setState({ name: user.name, isloading: false });
    });
  }

  render() {
    const { name, isloading } = this.state;
    return (
      <header data-testid="header-component" className="bg-slate-50">
        {isloading ? <Loading /> : (
          <>
            <img
              alt="logo"
              src={ logo }
              className="flex flex-col bg-slate-50w-3/4
              align-top left-0 relative inset-0 mt-4p-5 items-center"
            />
            <h3
              data-testid="header-user-name"
              className="uppercase text-center text-2xl font-semibold text-gray-600 m-4"
            >
              {name}
            </h3>
          </>
        )}
        <nav>
          <ul className="flex flex-col justify-between items-center h-52 mt-20">
            <Link
              data-testid="link-to-search"
              to="/search"
              className="flex"
            >
              <HiMagnifyingGlass className="items-center mr-2" />
              Search
            </Link>
            <Link
              data-testid="link-to-favorites"
              to="/favorites"
              className="flex"
            >
              <AiOutlineStar className="mr-2" />
              Favorites
            </Link>
            <Link data-testid="link-to-profile" to="/profile" className="flex">
              <CgProfile className="mr-2" />
              Profile
            </Link>
          </ul>
        </nav>
      </header>
    );
  }
}
