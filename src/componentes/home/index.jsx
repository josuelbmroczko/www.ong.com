import React, { useState, useEffect, useRef } from 'react';
import StyleDiv from './style';
import { Link } from 'react-router-dom';
import { useImages } from '../../imagemProvider/imagemProvider';
import logo from '../../imagem/logo.png';

export default function Home() {
  const { imagemCart, imagemLupaPesquisa } = useImages();
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const eventType = isTouchDevice() ? 'touchend' : 'mousedown';

    if (isModalOpen) {
      document.addEventListener(eventType, handleOutsideClick);
    } else {
      document.removeEventListener(eventType, handleOutsideClick);
    }

    return () => {
      document.removeEventListener(eventType, handleOutsideClick);
    };
  }, [isModalOpen]);

  const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
  };

  const handleOutsideClick = (event) => {
    if (!modalRef.current || !modalRef.current.contains(event.target)) {
      setModalOpen(false);
    }
  };

  return (
    <StyleDiv>
      <div className="home-container">
        <div className="logo-container">
          <Link to='/'><img src={logo} alt="Logo" className="logo" /></Link>
          <button className="menu-button" onClick={toggleModal}>
          ☰
          </button>
        </div>
        <ul className="nav-list">
          <li>
            <Link to="/" onClick={handleCloseModal}>Home</Link>
          </li>
          <li>
            <Link to="/contato" onClick={handleCloseModal}>Contato</Link>
          </li>
          <li>
            <Link to="/projetos" onClick={handleCloseModal}>Projetos</Link>
          </li>
          <li>
            <Link to="/doe" onClick={handleCloseModal}>Doe</Link>
          </li>
          <li>
            <Link to="/sobre" onClick={handleCloseModal}>Sobre</Link>
          </li>
        </ul>
        {isModalOpen && (
          <div
            className="modal"
            ref={modalRef}
            role="button"
            tabIndex={0}
            onClick={handleCloseModal}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                handleCloseModal();
              }
            }}
          >
            <button className="close-button" onClick={handleCloseModal}>
              Fechar
            </button>
            <ul className="modal-nav-list">
              <li>
                <Link to="/" onClick={handleCloseModal}>Home</Link>
              </li>
              <li>
                <Link to="/contato" onClick={handleCloseModal}>Contato</Link>
              </li>
              <li>
                <Link to="/projetos" onClick={handleCloseModal}>Projetos</Link>
              </li>
              <li>
                <Link to="/doe" onClick={handleCloseModal}>Doe</Link>
              </li>
              <li>
                <Link to="/sobre" onClick={handleCloseModal}>Sobre</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </StyleDiv>
  );
}
