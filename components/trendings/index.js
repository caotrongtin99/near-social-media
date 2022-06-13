import React from 'react'
import styled from 'styled-components'
import MoreIcon from '~/public/icons/more-horizontal.svg'

const TrendingWrap = styled.section`
  padding: 1rem 1rem 1.2rem 1rem;
  border-radius: 12px;
  background-color: var(--background-black);
  margin-bottom: 1rem;

  h4 {
    margin-bottom: 1.7rem;
    font-size: 1.3rem;
    font-weight: 700;
  }

  .trending-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;


    .trending {
      font-size: 0.9rem;
    }
    .category {
      font-size: 0.9rem;
      font-weight: 800;
    }

    .say {
      font-size: 0.8rem;
    }
  }

  .viewmore {
    text-align: right;
    cursor: pointer;
    margin-top: 1rem;
    a {
      color: #CBCBD4;
      font-weight: 800;
      display: inline-block;
      border-bottom:1px solid #CBCBD4;
      padding-bottom:3px;
      font-size: 0.8rem;
    }
  }
`

export default function Trending() {
  return <TrendingWrap>
    <h4>Trending for you</h4>
    <div className='trending-item'>
      <div>
        <p className='trending'>Trending in canada</p>
        <p className='category'>Help Desk Technician</p>
        <p className='say'>1,0253 Say</p>
      </div>
      <MoreIcon />
    </div>
    <div className='trending-item'>
      <div>
        <p className='trending'>Trending in canada</p>
        <p className='category'>Help Desk Technician</p>
        <p className='say'>1,0253 Say</p>
      </div>
      <MoreIcon />
    </div>
    <div className='trending-item'>
      <div>
        <p className='trending'>Trending in canada</p>
        <p className='category'>Help Desk Technician</p>
        <p className='say'>1,0253 Say</p>
      </div>
      <MoreIcon />
    </div>
    <div className='trending-item'>
      <div>
        <p className='trending'>Trending in canada</p>
        <p className='category'>Help Desk Technician</p>
        <p className='say'>1,0253 Say</p>
      </div>
      <MoreIcon />
    </div>
    <div className='trending-item'>
      <div>
        <p className='trending'>Trending in canada</p>
        <p className='category'>Help Desk Technician</p>
        <p className='say'>1,0253 Say</p>
      </div>
      <MoreIcon />
    </div>
    <div className='trending-item'>
      <div>
        <p className='trending'>Trending in canada</p>
        <p className='category'>Help Desk Technician</p>
        <p className='say'>1,0253 Say</p>
      </div>
      <MoreIcon />
    </div>
    <div className='viewmore'>
      <a>View more</a>
    </div>
  </TrendingWrap>
}