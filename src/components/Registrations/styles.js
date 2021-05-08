import styled from 'styled-components';

export const Container = styled.div`

max-width:1080px;
margin:auto;

h2{
  color: var(--primary);
  font-weight: 900;
  font-size:1.5rem;
  margin:4rem 0 4rem 0;
  text-align: center;
}
>div{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap:3rem;
  display: flex;
  justify-content:center;
  text-align: center;
  line-height: 4.5rem;
 
  img{
  width: 5rem;
  }
  h3{
  color:#FF9657;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 3.5rem;
  }
  p{
  width:18rem; 
  font-weight: normal;
  font-size: 0.8rem;
  line-height: 1.5rem;
  display: flex;
  text-align:justify;
  
  }
}
`;
