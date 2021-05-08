import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: bottom;
  width: 100%;
  height: calc(100vh - 5rem);
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    width: 50%;

    > h1 {
      font-size: 3rem;
      text-align: center;
      color: #fff;
    }
    > p {
      margin-top: 1.5rem;
      text-align: center;
      font-size: 0.9rem;
      font-weight: 300;
      color: #e9e9e9;
    }
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      > button {
        border: 0;
        margin-top: 1.5rem;
        padding: 0.8rem 2.5rem;
        font-size: 1rem;
        font-weight: bold;
        color: var(--primary);
        box-shadow: 6px 7px 0px var(--primary), 10px 12px 0px var(--secondary);
        transition: 0.3s;

        &:hover {
          background: var(--secondary);
          box-shadow: 6px 7px 0px var(--primary), 10px 12px 0px #fff;
        }
      }
    }
  }
`;
