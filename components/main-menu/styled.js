import styled from 'styled-components'

export const MainMenuWrap = styled.nav`
  @media only screen and (min-width: 1400px) {
    width: 23%
  }
  width: 25%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: var(--background-black);
  box-shadow: 0px 0px 7px 4px rgba(0, 0, 0, 0.27);
  border-radius: 12px;
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