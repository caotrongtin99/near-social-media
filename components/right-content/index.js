import React from 'react'
import SearchBar from '../search-bar'
import Trending from '../trendings'
import { RightContentWrap } from './styled'

export default function RightContent() {
  return <RightContentWrap>
    <SearchBar />
    <Trending />
  </RightContentWrap>
}