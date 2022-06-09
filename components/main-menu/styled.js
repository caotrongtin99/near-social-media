import styled from 'styled-components'

export const MainMenuWrap = styled.div`
  width: 20%;
  padding: 2.2rem;
  display: flex;
  flex-direction: column;
  background-color: var(--background-black);
`

export const MainMenuItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    margin-right: 1.7rem;
  }
`