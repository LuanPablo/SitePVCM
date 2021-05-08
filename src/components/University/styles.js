import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h3 {
    font-size: 1.8rem;
    color: var(--primary);
    width: 30%;
    text-align: center;
  }

  >div{
    display: grid;
    grid-template-columns: .5fr 1fr;
    justify-content: center;
    margin-top: 3rem;
    width: 60%;

    >img{
      width: 100%;
    }
    >div{
      margin-left: 2rem;

      >h3{
        font-size: 1.5rem;
        color: #FF9657;
      }
      >p{
        text-align: justify;
        margin-top: 1rem;
      }
      >button{
        border: 0;
        margin-top: 1.5rem;
        padding: 0.8rem 2.5rem;
        font-size: 1rem;
        font-weight: bold;
        background: var(--secondary);
        color: var(--primary);
        box-shadow: 6px 7px 0px #fff, 10px 12px 0px var(--secondary);
        transition: 0.3s;

        &:hover {
          background: var(--secondary);
          box-shadow: 6px 7px 0px var(--primary), 10px 12px 0px #fff;
        }
      }
    }
  }
`;
