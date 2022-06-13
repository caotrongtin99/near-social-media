import styled from 'styled-components'

export const NewFeedsWrap = styled.section`
  @media only screen and (min-width: 1400px) {
    width: 50%
  }
  width: 46%;
  margin: 0 2%;
`

export const PostWrap = styled.div`
  padding: 1rem 1rem 1.5rem 1rem;
  border-radius: 12px;
  background-color: var(--background-black);
  margin-bottom: 1rem;

  .head {
    display: flex;
  }

  .left {
    width: 3.8rem;
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .user-info {
    font-size: 1rem;
    font-weight: 800;
    margin-right: 1rem;
  }

  .date {
    font-size: 0.8rem;
  }

  .bottom {
    margin-left: 3.8rem;
    display: flex;
    flex-direction: column;
  }

  .image {
    width: 100%;
    margin: 1rem 0;

    img {
      width: 100%;
    }
  }

  .resource {
    width: 100% !important;
    margin-top: 1rem;
  }

  .interaction {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .item {
      display: flex;
      align-items: center;
    }

    .number {
      margin-left: 0.6rem;
      font-weight: 700;
    }

    .liked {
      color: #FE8668;
    }
  }
`