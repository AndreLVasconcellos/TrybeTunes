import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser } from '../services/userAPI';
import ProfileForm from '../components/ProfileForm';

export default class Profile extends Component {
  state = {
    objProfile: {},
    isLoading: true,
  };

  componentDidMount() {
    this.handleProfileUser();
  }

  handleProfileUser = async () => {
    const response = await getUser();
    this.setState({ objProfile: response, isLoading: false });
  };

  render() {
    const { objProfile, isLoading } = this.state;
    return (
      <div data-testid="page-profile" className="flex">
        <Header />
        <div className="flex-col w-full h-screen overflow-y-scroll">
          { isLoading ? <Loading />
            : <ProfileForm objProfile={ objProfile } /> }
        </div>
      </div>
    );
  }
}
