import styled from 'styled-components'

export const MainMenuWrap = styled.nav`

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

  path: {
    stroke: white !important;
  }

  svg {
    margin-right: 1.7rem;
    color: white;
  }

  &:hover {
    color: #4269F2;
    svg {
      path { stroke: #4269F2; }
    }
  }

  h5 {
    font-size: 1rem;
    font-weight: 800;
  }
`

export const MainMenuContainer = styled.div`
  padding: 1rem 2.2rem;

  .say-button {
    text-align: center;
    padding: 12px 60px;
    gap: 8px;
    background: linear-gradient(90deg, #9300E9 0%, #5300FF 100%);
    border-radius: 6px;
    color: white;
    font-weight: 800;
    border: unset;
    font-size: 1rem;
  }
`