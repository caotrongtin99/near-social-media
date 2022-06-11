import React from 'react'
import Image from 'next/image'
import { CenterHeader, HeaderWrap, LeftHeader, RightHeader } from './styled'
import logo from '~/public/images/logo.png'
import noti from '~/public/images/header/noti.png'
import avatar from '~/public/images/header/avatar.png'
import moreHorizontal from '~/public/images/header/more-horizontal.png'

export default function  Header() {
  return <HeaderWrap>
    <LeftHeader>
      <Image
        src={logo}
        alt='logo'
      />
    </LeftHeader>
    <CenterHeader>
      <h4>Home</h4>
      <div className='tabs'>
        <b>Trending</b>
        <b>New</b>
        <b>Hot</b>
      </div>
    </CenterHeader>
    <RightHeader>
      <div className='left'>
        <Image 
          src={noti}
          alt='noti'
        />
      </div>
      <div className='right'>
        <Image
          src={moreHorizontal}
          alt='more-horizontal'
        />
        <div className='info' >
          <div className='item'>
            <b>Habib Ahmed</b>
            <p>@habibahm83</p>
          </div>
          <div className='item'>
            <Image 
              src={avatar}
              alt="avatar"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </RightHeader>
  </HeaderWrap>
}
