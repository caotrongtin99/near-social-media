import React, { useState, useCallback, useEffect } from 'react';
import Header from '~/components/header';
import OrangeEllipse from '~/components/orange-ellipse';
import PurpleEllipse from '~/components/purple-ellipse';
import { viewState } from '~/config/nearUtils';
import Form from '../form';
import MainMenu from '../main-menu';
import Newfeeds from '../newfeeds';
import RightContent from '../right-content';
import { MainContentWrap, MainPageComponent, MainPageContainer } from './styled';

export default function MainPage(props) {
  const [posts, setPosts] = useState([])
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


  useEffect(() => {
    if (window?.walletConnection && window.walletConnection.isSignedIn()) {
      viewState()
      .then(returnedValue => {
        console.log({ returnedValue })
        setPosts(returnedValue)
      })
      .catch(err => {
        console.log({ err })
      })
    }
  }, [])

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