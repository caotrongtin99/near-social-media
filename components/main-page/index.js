import React, { useState, useCallback, useEffect } from 'react';
import Header from '~/components/header';
import OrangeEllipse from '~/components/orange-ellipse';
import PurpleEllipse from '~/components/purple-ellipse';
import MainMenu from '../main-menu';
import Newfeeds from '../newfeeds';
import RightContent from '../right-content';
import { MainContentWrap, MainPageComponent, MainPageContainer } from './styled';

export default function MainPage(props) {
  return <MainPageComponent>
    <OrangeEllipse />
    <PurpleEllipse />
    <MainPageContainer>
      <Header />
      <MainContentWrap>
        <MainMenu />
        <Newfeeds />
        <RightContent />
      </MainContentWrap>
    </MainPageContainer>
  </MainPageComponent>
}