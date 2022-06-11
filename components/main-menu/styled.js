import styled from 'styled-components'

export const MainMenuWrap = styled.nav`
  width: 23%;
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

  &:hover {
    color: #4269F2;

    svg {
      color: #4269F2;
    }
  }

  h5 {
    font-size: 1rem;
    font-weight: 800;
  }
`

export const MainMenuContainer = styled.div`
  padding: 1rem 2.2rem;
`