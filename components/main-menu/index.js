import React from 'react';
import { mainMenuItems } from '~/constants/mainMenu';
import { MainMenuItem, MainMenuWrap, MainMenuContainer } from './styled';
import MoonIcon from '~/public/icons/moon.svg'

export default function MainMenu() {
  return <MainMenuWrap>
    <MainMenuContainer>
      {mainMenuItems.map(item => <MainMenuItem key={item.name}>
        {item.icon}
        <h5>{item.name}</h5>
      </MainMenuItem>)}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '1.8rem 0'}}>
        <button className='say-button'>
          Say
        </button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem'}}>
        <MoonIcon />
      </div>
    </MainMenuContainer>
  </MainMenuWrap>
}