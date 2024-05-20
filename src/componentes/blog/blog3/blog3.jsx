import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import imagem1 from '../imagensBlog3/blog1.png';
import imagem2 from '../imagensBlog3/blog2.png';
import imagem3  from '../imagensBlog3/blog3.png';
import imagem4 from '../imagensBlog3/blog4.png';
import imagem5 from '../imagensBlog3/blog5.png';
import imagem6 from '../imagensBlog3/blog6.png';
 

import { BlogContainer, CarouselContainer, Container, Image, NextButton, PrevButton } from '../styles';
import Home from '../../home';
import Footer from '../../footer/footer';

 

export default function Blog1() {
  const images = [
    imagem1, imagem2, imagem3, imagem4, imagem5, imagem6
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
