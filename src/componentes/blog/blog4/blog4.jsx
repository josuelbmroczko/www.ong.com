import React, { useEffect } from 'react';
import { Container } from '.././styles';
 
 
import Home from './../../home/index';
import Footer from './../../footer/footer';

const Blog4 = () => {
  useEffect(()=>{
    window.scroll(0,0);
  },[])
  return (
    <>
    <Home/>

    <Container>
      
      <h2>Blog Ong</h2>
      <p>Um pedacinho da gente para voces !</p>
    
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

export default Blog4;
