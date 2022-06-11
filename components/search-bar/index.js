import React from 'react'
import styled from 'styled-components'
import SearchIcon from '~/public/icons/search.svg'

const SearchBarWrap = styled.div`
  display: flex;
  align-items:center;
  padding: 1rem;
  border-radius: 12px;
  background-color: var(--background-black);

  .search-icon {
    margin-right: 1rem;
  }

  input {
    border: none;
    background-color: transparent;
    resize: none;
    outline: none;
    font-weight: 700;
    color: var(--text-gray);
}
`

export default function SearchBar() {
  return <SearchBarWrap>
    <SearchIcon className='search-icon' />
    <input placeholder='Search Rep' />
  </SearchBarWrap>
}