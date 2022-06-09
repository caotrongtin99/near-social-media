import styled from 'styled-components'

export const HeaderWrap = styled.div`
  padding: 1rem 0 1.2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LeftHeader = styled.div`
  width: 20%;
  margin-right: 1.5rem;
`

export const CenterHeader = styled.div`
  width: 60%;
  margin: 0 -1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    font-weight: 700;
    font-size: 1.3rem;
  }

  .tabs {
    b {
      margin-right: 1.5rem;
      font-weight: 800;
    }
  }
`

export const RightHeader = styled.div`
  width: 20%;
  margin-left: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .info {
    margin: -10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    .item {
      margin: 1rem;
    }

    p {
      padding: 0;
      margin: 0;
    }
  }
`