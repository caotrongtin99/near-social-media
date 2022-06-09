import React from 'react';
import Header from '~/components/header';
import OrangeEllipse from '~/components/orange-ellipse';
import PurpleEllipse from '~/components/purple-ellipse';
import MainMenu from '../main-menu';
import { MainPageComponent, MainPageContainer } from './styled';

export default function MainPage() {
  return <MainPageComponent>
    <OrangeEllipse />
    <PurpleEllipse />
    <MainPageContainer>
      <Header />
      <MainMenu />
    </MainPageContainer>
  </MainPageComponent>
}