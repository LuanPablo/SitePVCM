import styled from "styled-components";

export const Container = styled.div`
  background: #ffc187;
  height: 4rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1080px;
  margin: 0 auto;

  > img {
    width: 9%;
  }
  > div {
      display: flex;
      margin-top: -.4rem;
      gap: 1.5rem;

      >a{
          text-decoration: none;
          font-weight: bold;
      }
  }
`;
