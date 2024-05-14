import React from 'react';
import StyleDiv from './style';
 
import { Link } from 'react-router-dom';
import { useImages } from '../../imagemProvider/imagemProvider';
import logo from '../../imagem/logo.png'
export default function Home() {
  const { imagemCart, imagemLupaPesquisa } = useImages();

  return (
    <StyleDiv>
      <div className="home-container">
        <ul className="nav-list">
          <React.Fragment>
      
 

            <li className="menu-options">
            <img src={logo} alt="" />
              {/*  <Link to='/' className='logoTexto'>System Loquaz</Link>*/}
              <Link to="/">Home</Link>
              <Link to="/contato">Contato</Link>
              <Link to="/projetos">Projetos</Link>
              <Link to="/doe">Doe</Link>
              <Link to="/sobre">Sobre</Link>


              
            </li>
          </React.Fragment>
        </ul>
      </div>
    </StyleDiv>
  );
}
