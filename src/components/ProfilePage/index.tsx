import React from 'react';

import Feed from '../Feed';
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  Location,
  CakeIcon,
  CalendarIcon,
  Follow,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Fernando</h1>
        <h2>@codder404</h2>
        <p>Don't cry, say fuck you and smile!</p>
        <ul>
          <li>
            <Location />
            Luanda City
          </li>
          <li>
            <CakeIcon />
            Born April 3, 1996
          </li>
          <li>
            <CalendarIcon />
            Joined August 2016
          </li>
        </ul>

        <Follow>
          <span>
            seguindo <strong>160</strong>
          </span>
          <span>
            <strong>79 </strong> seguidores
          </span>
        </Follow>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;
