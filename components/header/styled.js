import styled from 'styled-components'

export const HeaderWrap = styled.div`
  width: 100%;
  padding: 1rem 0 1.2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LeftHeader = styled.div`
  width: 23%;
`

export const CenterHeader = styled.div`
  width: 50%;
  margin: 0 2%;
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

// 1046 204

export const RightHeader = styled.div`
  width: 23%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .info {
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