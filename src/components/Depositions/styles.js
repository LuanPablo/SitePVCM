import styled from "styled-components";
import backgroundImg from "../../assets/background2.svg";

export const Container = styled.div`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: bottom;
  width: 100%;
  height: calc(100vh);
  object-fit: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h3 {
    font-size: 1.8rem;
    color: var(--primary);
  }

  > div {
    display: flex;
    margin-top: 3rem;
    > button {
      padding: 0;
      margin: 0;
      border: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      border-radius: 50%;
      color: var(--primary);
      font-size: 3.5rem;
    }
    > div {
      display: flex;
      align-items: flex-end;
      padding: 0 2rem;

      > div {
        display: flex;
        flex-direction: column;
        background: #fff;
        padding: 2rem;
        width: 40vw;
        border-radius: 3.5rem;
        margin-left: 1rem;

        > p {
          text-align: justify;
        }
      }
    }
  }
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h4 {
    margin-top: 1rem;
    font-size: 1.1rem;
    color: #000;
  }
  > img {
    width: 5rem;
    height: 5rem;
    border: 5px solid #fff;
    border-radius: 50%;
  }
`;
