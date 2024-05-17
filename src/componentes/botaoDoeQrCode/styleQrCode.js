import styled from "styled-components";

export const EstiloQrCode = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  background-color: #B6E2F7;
 
  .containerBanner {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 80vh;
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
    background-color: rgba(210, 101, 0, 0.5);
    padding: 40px;
    border-radius: 50px;
    color: white;
    z-index: 2; /* Para garantir que o texto fique acima da película */
    text-align: center;
  }

  .secaoDoacao {
    margin-top: 30px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    z-index: 3;
    position: relative;
  }

  p {
    font-size: 1.4rem;
    color: #555;
    margin-bottom: 30px;
    line-height: 1.6;
  }

  .containerQrCode {
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
    color: #777;
  }

  .comoAjudar {
    text-align: left;
    max-width: 800px;
    margin: 20px;
 text-align: center;
    z-index: 3;
    position: relative;
  }

  h3 {
    font-size: 2.2rem;
    color: #333;
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
    color: #555;
    margin-bottom: 15px;
    line-height: 1.6;
  }

  li strong {
    color: #333;
  }

  @media (max-width: 768px) {
    img {
      width: 250px;
    }

    h2 {
      font-size: 2.4rem;
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

    h2 {
      font-size: 2rem;
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
