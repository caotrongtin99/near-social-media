import React from 'react';
import { mainMenuItems } from '~/constants/mainMenu';
import { MainMenuItem, MainMenuWrap } from './styled';

export default function MainMenu() {
  return <MainMenuWrap>
    {mainMenuItems.map(item => <MainMenuItem>
      {item.icon}
      <h5>{item.name}</h5>
    </MainMenuItem>)}
  </MainMenuWrap>
}