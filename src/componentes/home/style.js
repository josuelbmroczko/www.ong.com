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
  }

  .nav-list {
    display: flex;
    justify-content: space-around;
    list-style: none;
    align-items: center;
  }

  li {
    display: flex;
  }

  .logo {
    width: 80px;
  }

  .cart {
    width: 15px;
  }

  a {
    text-decoration: none;
    color: ${Cores.preto};
  }

  button {
    background-color: transparent;
    border: none;
  }

  .lupaPesquisa {
    width: 18px;
  }
.logoTexto{
  color:#005011;
  font-size: 30px;
  font-weight: bold;
 }
  .menu-options {
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    align-items: center;
    width: 100%;
    height: 60px;
    
  }
  .menu-options img{
    max-width: 90px;
    width: 100%;
  }

  #pesquisa {
    background-color: ${Cores.cinzaClaro};
    border: 1px solid;
    border-radius: 3px 9px;
  }

  .logoMobile {
    display: none;
  }

  @media screen and (max-width: 600px) {
    top: -15px;
    .nav-list {
      position: fixed;
      justify-content: space-around;
      background-color: ${Cores.brancoTransparente};
      padding-left: 30px;

       
      width: 100%;
      left: -30px;
      flex-direction: column-reverse;
      align-items: center;
    }

    .logo {
      display: none;
    }

    .logoMobile {
      display: block;
      position: relative;
      left: 10px;
      width: 100%;
      max-width: 70px;
      top: -30px;
    }
li{
  padding-top: 20px;
 
}
    a {
      height: 20px;
    }
    .menu-options{
      position: relative;
      top: -5px;
      
    }
    .logoTexto{
      font-size: 12px;
      width: 50px;
    }
    .menu-options img{
      width: 60px;
    }
  }

`;

export default StyleDiv;
