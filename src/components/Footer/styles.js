import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  background: var(--primary);
  margin-top: 5rem;
  > img {
      margin-top: 1rem;
      width: 10%;
      border-radius: 1rem;
  }

  >div{
      padding: 2rem 0;
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 3rem;
      justify-content:center;
      align-items:center;

      >div{

          >div{
            margin-top: .4rem;
              strong{
                  color: #FF9657;
              }
              span{
                  color: #fff;
                  font-weight: 300;
              }
          }
      }
  }
`;
