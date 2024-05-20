import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import imagem1 from '../imagensBlog/imagem1.png';
import imagem2 from '../imagensBlog/imagem2.png';
import imagem3 from '../imagensBlog/imagem11.png';
import imagem4 from '../imagensBlog/imagem4.png';
import imagem5 from '../imagensBlog/imagem5.png';
import imagem6 from '../imagensBlog/imagem6.png';
import imagem7 from '../imagensBlog/imagem7.png';
import imagem8 from '../imagensBlog/imagem8.png';
import imagem9 from '../imagensBlog/imagem9.png';

import imagem10 from '../imagensBlog/imagem10.png';
import imagem11 from '../imagensBlog/imagem11.png';
import imagem12 from '../imagensBlog/imagem12.png';
import imagem13 from '../imagensBlog/imagem13.png';
import imagem14 from '../imagensBlog/imagem14.png';
import imagem15 from '../imagensBlog/imagem15.png';
import imagem16 from '../imagensBlog/imagem16.png';
import imagem17 from '../imagensBlog/imagem17.png';
import imagem18 from '../imagensBlog/imagem18.png';
import imagem19 from '../imagensBlog/imagem19.png';

import imagem21 from '../imagensBlog/imagem21.png';
import imagem22 from '../imagensBlog/imagem22.png';
import imagem23 from '../imagensBlog/imagem23.png';
import imagem24 from '../imagensBlog/imagem24.png';
import imagem25 from '../imagensBlog/imagem25.png';
import imagem26 from '../imagensBlog/imagem26.png';

import { BlogContainer, CarouselContainer, Container, Image, NextButton, PrevButton } from '../styles';
import Home from '../../home';
import Footer from '../../footer/footer';


export default function Blog1() {
  const images = [
    imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7, imagem8, imagem9,
    imagem10, imagem11, imagem12, imagem13, imagem14, imagem15, imagem16, imagem17,  imagem19,
    imagem21, imagem22, imagem23, imagem24, imagem25, imagem26,
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
