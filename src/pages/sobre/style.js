import styled from 'styled-components';

export const StyledDiv = styled.div`
  text-align: center;
  font-size: 18px;
 
  background-color: #0178FE;
padding: 100px;
padding-top: 100px;
padding-bottom: 120px;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f9f9f9;
    border-radius: 4px;
  }

  h1 {
    color:white;
    margin-bottom: 20px;
  }
  mark{
    background-color: transparent;
    color:white;
    font-weight: bold;
  }
  h2 {
    color:white;
    margin-top: 30px;
    margin-bottom: 10px;
  }

  p {
    color:white;
    margin-bottom: 20px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: auto; /* Centraliza a lista */
    width: fit-content; /* Ajusta a largura da lista ao conteúdo */
    text-align: left;
  }

  li {
    color:white;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 600px){
    font-size: 14px;
    padding: 20px;
    padding-top: 100px;
  }
`;
