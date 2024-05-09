import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
 padding-bottom:180px;

   .imagens{
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: space-around;
   }
img{
  width: 200px;
  height: 200px;
  border: 1px solid black;
}

 
`;
