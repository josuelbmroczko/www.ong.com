import styled from 'styled-components';
import criancas from './criancas.png'

export const FooterContainer = styled.footer`
  display: flex;
  align-items: baseline;
  text-align: center;
  justify-content: space-around;
  padding: 10px;
  border: 1px solid gray;
  flex-wrap: wrap;
   background-color: rgba(10,100,100,0.5);
    background-image: url(${criancas});
 align-items: center;
  a {
    text-decoration: none;
    color: white;
  }
  
  ul {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    background-color: rgba(0,122,254,0.5);
    height: 250px;
    max-width: 545px;
    width: 100%;
    color: white;
    border-radius: 20px;
    margin-top: 10px;
  }

  li {
    list-style: none;
    line-height: 2px;
    
  }

  img {
    width: 100px;
    align-items: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const Direitos = styled.div`

  width: 80%;
  color: rgb(250,250,250);
  position: relative;
  font-size: 14px;
p{
   color: rgb(250,250,250);
  align-items: center;
   
}
  @media (max-width: 768px) {
    margin-top: 10px;
  }

  @media (max-width: 550px) {
    font-size: 12px;
  }
`;
