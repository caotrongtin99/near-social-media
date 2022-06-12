import React from 'react'
import YourMind from '../your-mind'
import Post from './post'
import { NewFeedsWrap } from './styled'

export default function Newfeeds() {
  return <NewFeedsWrap>
    <YourMind />
    <Post />
  </NewFeedsWrap>
}