import React from 'react';
import OrangeEllipse from '../orange-ellipse';
import PurpleEllipse from '../purple-ellipse';
import { MainPageComponent, MainPageContainer } from './styled';

export default function MainPage() {
  return <MainPageComponent>
    <OrangeEllipse />
    <PurpleEllipse />
    <MainPageContainer>
      aLLOOOO
    </MainPageContainer>
  </MainPageComponent>
}