import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import imagem1 from '../imagensBlog/imagem1.jpg';
import imagem2 from '../imagensBlog/imagem2.jpg';
import imagem3 from '../imagensBlog/imagem11.jpg';
import imagem4 from '../imagensBlog/imagem4.jpg';
import imagem5 from '../imagensBlog/imagem5.jpg';
import imagem6 from '../imagensBlog/imagem6.jpg';
import imagem7 from '../imagensBlog/imagem7.jpg';

import imagem10 from '../imagensBlog/imagem10.jpg';
import imagem11 from '../imagensBlog/imagem11.jpg';
import imagem12 from '../imagensBlog/imagem12.jpg';
 

 
import imagem16 from '../imagensBlog/imagem16.jpg';
import imagem17 from '../imagensBlog/imagem17.jpg';

import imagem22 from '../imagensBlog/imagem22.jpg';
import imagem23 from '../imagensBlog/imagem23.jpg';
import imagem25 from '../imagensBlog/imagem25.jpg';
import imagem26 from '../imagensBlog/imagem26.jpg';

import { BlogContainer, CarouselContainer, Container, Image, NextButton, PrevButton } from '../styles';
import Home from '../../home';
import Footer from '../../footer/footer';


export default function Blog1() {
  const images = [
    imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7,
    imagem10, imagem11, imagem12,  imagem16, imagem17, 
     imagem22, imagem23,imagem25, imagem26,
  ];
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollAmount = 300; // Ajuste este valor conforme necessário

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft - scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Home />
      <BlogContainer>
        <h2>Blog Ong</h2>
        <p>Um pedacinho da gente para vocês!</p>
        <CarouselContainer ref={containerRef}>
          {images.map((src, i) => (
            <Image key={i} src={src} alt={`imagem${i + 1}`} />
          ))}
        </CarouselContainer>
        <PrevButton onClick={handlePrev}>🠔</PrevButton>
        <NextButton onClick={handleNext}>⟶</NextButton>
      </BlogContainer>
      <Footer />
    </>
  );
}
