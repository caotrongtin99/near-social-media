import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import avatar from '~/public/images/header/avatar.png'
import ImageIcon from '~/public/icons/image.svg'
import GifIcon from '~/public/icons/gif.svg'
import PollIcon from '~/public/icons/gg_poll.svg'
import SmileIcon from '~/public/icons/smile.svg'
import CalendarIcon from '~/public/icons/calendar.svg'
import MapPinIcon from '~/public/icons/map-pin.svg'

const YourMindWrap = styled.section`
  padding: 1rem;
  border-radius: 12px;
  background-color: var(--background-black);
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  .your-mind-input {
    display: flex;
    align-items: center;
    margin-bottom: 1.8rem;
  }

  .image {
    margin-right: 1rem;
  }

  .left {
    width: 3.8rem;
  }

  input {
    border: none;
    background-color: transparent;
    resize: none;
    outline: none;
    font-weight: 700;
    color: var(--text-gray);
    font-size: 1.1rem;
    font-weight: 700;
  }

  .tools {
    margin-left: 3.8rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .icon-groups {
    display: flex;
  }

  .icon {
    margin-right: 1rem;
  }

  .submit-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 28px;
    gap: 8px;
    background: linear-gradient(90deg, #9300E9 0%, #5300FF 100%);
    border-radius: 6px;
    color: white;
    font-weight: 800;
    border: unset;
  }
`

export default function YourMind() {
  return <YourMindWrap>
      <div className='your-mind-input'>
        <div className='left'>
          <Image
            src={avatar}
            alt="avatar"
            width={48}
            height={48}
          />
        </div>
        <input placeholder="What's on your mind?" />
      </div>
      <div>
      <div className='tools'>
        <div className='icon-groups'>
          <ImageIcon className='icon' />
          <GifIcon className='icon' />
          <PollIcon className='icon' />
          <PollIcon className='icon' />
          <PollIcon className='icon' />
          <SmileIcon className='icon' />
          <CalendarIcon className='icon' />
          <MapPinIcon className='icon' />
        </div>
        <button className='submit-button'>
          Say
        </button>
      </div>
      </div>
  </YourMindWrap>
}