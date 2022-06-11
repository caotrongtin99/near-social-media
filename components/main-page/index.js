import React, { useState, useCallback, useEffect } from 'react';
import Header from '~/components/header';
import OrangeEllipse from '~/components/orange-ellipse';
import PurpleEllipse from '~/components/purple-ellipse';
import Form from '../form';
import MainMenu from '../main-menu';
import { MainPageComponent, MainPageContainer } from './styled';

export default function MainPage(props) {
  const signIn = useCallback(() => {
    if (!window?.wallet?._networkId) return;
    window?.wallet.requestSignIn(
      {contractId: nearConfig.contractName, methodNames: ['set_status']},
      "NEAR Status Message"
    );
  }, [])

  useEffect(() => {
    signIn()
  }, [signIn])

  return <MainPageComponent>
    <OrangeEllipse />
    <PurpleEllipse />
    <MainPageContainer>
      <Header />
      <MainMenu />
    </MainPageContainer>
  </MainPageComponent>
}