import styled from "styled-components";

export const EstiloQrCode = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  background-color: #0178FE;
 
  .containerBanner {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 80vh;
    padding: 0 20px; /* Adiciona padding para evitar que o conteúdo fique muito próximo das bordas */
    box-sizing: border-box; /* Inclui padding na largura e altura do elemento */
  }

  .containerBanner img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .sobreposicao {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* 50% de opacidade */
    z-index: 1;
  }

  .containerBanner h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #0178FE;
    padding: 20px 30px; /* Reduzido o padding para ajustar em telas menores */
    border-radius: 50px;
    color: white;
    z-index: 2;
    text-align: center;
    font-size: 2rem; /* Ajustado para melhor responsividade */
  }

  .secaoDoacao {
    margin-top: 30px;
    max-width: 800px;
    width: 90%; /* Ajusta o tamanho em relação à tela */
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    z-index: 3;
    position: relative;
  }

  p {
    font-size: 1.4rem;
    color: white;
    margin-bottom: 30px;
    line-height: 1.6;
  }

  .containerQrCode {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 300px;
    margin-bottom: 30px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.05);
  }

  span {
    font-size: 1.4rem;
    color: white;
  }

  .comoAjudar {
    text-align: left;
    max-width: 800px;
    width: 90%; /* Ajusta o tamanho em relação à tela */
    margin: 20px auto; /* Centraliza a seção */
    text-align: center; /* Corrige a centralização do texto */
    z-index: 3;
    position: relative;
  }

  h3 {
    font-size: 2.2rem;
    color: white;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    font-size: 1.4rem;
    color: white;
    margin-bottom: 15px;
    line-height: 1.6;
  }

  li strong {
    color: white;
  }

  @media (max-width: 768px) {
    img {
      width: 250px;
    }

    .containerBanner h2 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.2rem;
    }

    h3 {
      font-size: 2rem;
    }

    li {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 200px;
    }

    .containerBanner h2 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1rem;
    }

    h3 {
      font-size: 1.8rem;
    }

    li {
      font-size: 1rem;
    }
  }
`;

export const CopyButton = styled.button`
  padding: 10px 20px;
  background-color: #0056b3;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: aqua;
  }
`;
