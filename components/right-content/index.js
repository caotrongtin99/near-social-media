import React from 'react'
import Follow from '../follow'
import SearchBar from '../search-bar'
import Trending from '../trendings'
import { RightContentWrap } from './styled'

export default function RightContent() {
  return <RightContentWrap>
    <SearchBar />
    <Trending />
    <Follow />
  </RightContentWrap>
}