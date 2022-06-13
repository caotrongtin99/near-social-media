import React from 'react';
import Header from '~/components/header';
import MasterLayout from '~/layouts/masterLayout';
import LeftContent from '../left-content';
import Newfeeds from '../newfeeds';
import RightContent from '../right-content';
import { MainContentWrap, MainPageComponent, MainPageContainer } from './styled';

export default function MainPage(props) {
  return <MasterLayout>
    <MainPageContainer>
      <Header />
      <MainContentWrap>
        <LeftContent />
        <Newfeeds />
        <RightContent />
      </MainContentWrap>
    </MainPageContainer>
  </MasterLayout>
}