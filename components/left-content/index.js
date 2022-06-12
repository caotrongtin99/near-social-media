import React from 'react'
import styled from 'styled-components'
import MainMenu from '../main-menu'

const LeftContentWrap = styled.section`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1400px) {
    width: 23%
  }
  width: 25%;

  .policy {
    padding: 1rem;
    div {
      margin-bottom: 0.5rem;
    }
    span {
      margin-right: 0.4rem;
      font-size: 0.7rem;
      font-weight: 700;
    }
  }

  @media only screen and (min-width: 1400px) {
    .policy {
      padding: 2rem;
    }
    span {
      margin-right: 0.5rem;
      font-size: 0.8rem;
      font-weight: 700;
    }
  }
`
export default function LeftContent() {
  return <LeftContentWrap>
    <MainMenu />
    <div className='policy'>
      <div>
        <span>Terms of Service</span>
        <span>Privacy Policy</span>
        <span>Cookie Policy</span>
      </div>
      <div>
        <span>Accessibility</span>
        <span>Ads info</span>
        <span>More</span>
      </div>
      <div>
        <span>&copy; 2022 Rep.</span>
      </div>
    </div>
  </LeftContentWrap>
}