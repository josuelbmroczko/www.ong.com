import React, { useEffect } from 'react';
import { Container } from '.././styles';
import Home from './../../home/index';
import Footer from './../../footer/footer';

const Blog1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Faz a página rolar para o topo quando o componente é montado
  }, []);

  return (
    <>
      <Home/>
     
      <Container>
        <h2>Blog Ong</h2>
        <p>Um pedacinho da gente para vocês!</p>
        <div className='imagens'>
          <img src="" alt="imagem " />
          <img src="" alt="imagem " />
          <img src="" alt="imagem " />
          <img src="" alt="imagem " />
          <img src="" alt="imagem " />
          <img src="" alt="imagem " />
          <img src="" alt="imagem " />
          <img src="" alt="imagem " />
          <img src="" alt="imagem " />
        </div>
      </Container>
      <Footer/>
    </>
  );
}

export default Blog1;
