import React from 'react';
import { mainMenuItems } from '~/constants/mainMenu';
import { MainMenuItem, MainMenuWrap, MainMenuContainer } from './styled';

export default function MainMenu() {
  return <MainMenuWrap>
    <MainMenuContainer>
      {mainMenuItems.map(item => <MainMenuItem key={item.name}>
        {item.icon}
        <h5>{item.name}</h5>
      </MainMenuItem>)}
    </MainMenuContainer>
  </MainMenuWrap>
}