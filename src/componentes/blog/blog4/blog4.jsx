import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import imagem1 from '../imagensBlog4/blog1.png';
import imagem2 from '../imagensBlog4/blog2.png';
import imagem3 from '../imagensBlog4/blog3.png';
import imagem4 from '../imagensBlog4/blog4.png';
import imagem5 from '../imagensBlog4/blog5.png';
import imagem6 from '../imagensBlog4/blog6.png';
import imagem7 from '../imagensBlog4/blog7.png';
import imagem8 from '../imagensBlog4/blog8.png';
import imagem9 from '../imagensBlog4/blog9.png';
import imagem10 from '../imagensBlog4/blog10.png';
 
import imagem12 from '../imagensBlog4/blog12.png';
import imagem13 from '../imagensBlog4/blog13.png';
import imagem14 from '../imagensBlog4/blog14.png';
 import imagem16 from '../imagensBlog4/blog16.png';
import imagem17 from '../imagensBlog4/blog17.png';
import imagem18 from '../imagensBlog4/blog18.png';
import imagem19 from '../imagensBlog4/blog19.png';
import imagem20 from '../imagensBlog4/blog20.png';
import imagem21 from '../imagensBlog4/blog21.png';
import imagem22 from '../imagensBlog4/blog22.png';
import imagem23 from '../imagensBlog4/blog23.png';
import imagem24 from '../imagensBlog4/blog24.png';
import imagem25 from '../imagensBlog4/blog25.png';
import imagem26 from '../imagensBlog4/blog26.png';
import imagem27 from '../imagensBlog4/blog27.png';
import imagem28 from '../imagensBlog4/blog28.png';
import imagem29 from '../imagensBlog4/blog29.png';
import imagem30 from '../imagensBlog4/blog30.png';
import imagem31 from '../imagensBlog4/blog31.png';
import imagem32 from '../imagensBlog4/blog32.png';
import imagem33 from '../imagensBlog4/blog33.png';
import imagem34 from '../imagensBlog4/blog34.png';
import imagem35 from '../imagensBlog4/blog35.png';
import imagem36 from '../imagensBlog4/blog36.png';
import imagem37 from '../imagensBlog4/blog37.png';
import imagem38 from '../imagensBlog4/blog38.png';
import imagem39 from '../imagensBlog4/blog39.png';
import imagem40 from '../imagensBlog4/blog40.png';
import imagem41 from '../imagensBlog4/blog41.png';
import imagem42 from '../imagensBlog4/blog42.png';
import imagem43 from '../imagensBlog4/blog43.png';
import imagem44 from '../imagensBlog4/blog44.png';
import imagem45 from '../imagensBlog4/blog45.png';
import imagem46 from '../imagensBlog4/blog46.png';
import imagem47 from '../imagensBlog4/blog47.png';
import imagem48 from '../imagensBlog4/blog48.png';
import imagem49 from '../imagensBlog4/blog49.png';
import imagem50 from '../imagensBlog4/blog50.png';

 
 

import { BlogContainer, CarouselContainer, Container, Image, NextButton, PrevButton } from '../styles';
import Home from '../../home';
import Footer from '../../footer/footer';

 

export default function Blog4() {
  const images = [
    imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7, imagem8, imagem9, imagem10, 
 imagem12, imagem13, imagem14,  imagem16, imagem17, imagem18, imagem19, imagem20, 
imagem21, imagem22, imagem23, imagem24, imagem25, imagem26, imagem27, imagem28, imagem29, imagem30, 
imagem31, imagem32, imagem33, imagem34, imagem35, imagem36, imagem37, imagem38, imagem39, imagem40, 
imagem41, imagem42, imagem43, imagem44, imagem45, imagem46, imagem47, imagem48, imagem49, imagem50

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
