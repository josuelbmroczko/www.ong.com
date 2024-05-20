import styled from 'styled-components';
import Cores from '../../utils/cores/cores';

const StyleDiv = styled.div`
  position: fixed;
  z-index: 999;
  background-color: ${Cores.brancoTransparente};
  width: 100%;
  left: 0px;
  top: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  .home-container {
    width: 100%;
    height: 120px;
  }

  .logo-container {
    width: 100%;
    display: flex;
    justify-content: space-between; /* Alteração aqui */
    align-items: center;
    padding: 0 20px; /* Espaçamento interno para separar a logo do canto */
  }

  .logo {
    position: relative;
    width: 120px;
    background-color: white;
 
  
    top: 5px;
  }

  .menu-button {
    position: relative;
    display: none;
    background-color: #007AFE;
    color: ${Cores.branco};
    padding: 10px;
    margin-right: 50px;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }

  .nav-list {
    position: relative;
    display: flex;
    left: 120px;
    list-style: none;
    align-items: center;
    width: 80%;
    bottom: 70px;
  }

  .nav-list li {
    display: flex;
    width: 100%;
    margin: 5px;
  }

  .nav-list a {
    text-decoration: none;
    color: ${Cores.preto};
    background-color: #007AFE;
    text-align: center;
    padding: 5px;
    width: 100%;
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(200, 200, 200, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-nav-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .close-button {
    position: absolute;
    left: 350px;
    top: 30px;
    color: white;
    background-color: #007AFE;
  }

  .modal-nav-list li {
    margin: 10px 0;
  }

  .modal-nav-list a {
    text-decoration: none;
    color: ${Cores.branco};
    background-color: #007AFE;
    padding: 10px;
    width: 200px;
    padding-bottom: 2px;
    text-align: center;
    border-radius: 5px;
  }

  .modal-nav-list a:hover {
    background-color: blue;
  }

  @media screen and (max-width: 600px) {
    .nav-list {
      display: none;
    }

    .menu-button {
      display: block;
    }
  }

  @media screen and (min-width: 601px) {
    .modal {
      display: none;
    }

    .menu-button {
      display: none;
    }

    .logo-container {
      justify-content: flex-start; /* Ajuste para alinhar a logo no canto esquerdo */
    }
  }
`;

export default StyleDiv;
