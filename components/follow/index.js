import React from 'react'
import styled from 'styled-components'
import { faker } from '@faker-js/faker';
import Image from 'next/image'
import avatar from '~/public/images/header/avatar.png'

const FollowWrap = styled.section`
  padding: 1rem 1rem 1.2rem 1rem;
  border-radius: 12px;
  background-color: var(--background-black);

  h4 {
    margin-bottom: 1.7rem;
    font-size: 1.3rem;
    font-weight: 700;
  }

  .people {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;

    .info {
      display: flex;
      align-items: center;
    }

    .name {
      font-size: 0.8rem;
      font-weight: 800;
      margin-bottom: 3px;
    }

    .username {
      font-size: 0.6rem;
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

  .follow-btn {
    background: linear-gradient(90deg, #9300E9 0%, #5300FF 100%);
    border-radius: 6px;
    padding: 8px 16px;
    color: white;
    font-weight: 800;
    font-size: 1rem;
    border: unset;
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

export default function Follow() {
  return <FollowWrap>
    <h4>Who to follow</h4>
    {Array(6).fill(0).map(() => (
      <div className='people'>
        <div className='info'>
          <Image
            className='image'
            src={avatar}
            height={48}
            width={48}
            alt='avatar'
          />
          <div style={{ marginLeft: '0.5rem', display: 'flex', flexDirection: 'column', height: '48px' }}>
            <p className='name'>{faker.name.firstName()}</p>
            <p className='username'>@{faker.internet.userName()}</p>
          </div>
        </div>
        <button className='follow-btn'>
          Follow
        </button>
      </div>
    ))}
    <div className='viewmore'>
      <a>View more</a>
    </div>
  </FollowWrap>
}