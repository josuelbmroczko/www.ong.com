import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import imagem1 from '../imagensBlog4/blog1.jpg';
import imagem2 from '../imagensBlog4/blog2.jpg';
import imagem3 from '../imagensBlog4/blog3.jpg';
import imagem4 from '../imagensBlog4/blog4.jpg';
import imagem5 from '../imagensBlog4/blog5.jpg';
import imagem6 from '../imagensBlog4/blog6.jpg';
import imagem7 from '../imagensBlog4/blog7.jpg';
import imagem8 from '../imagensBlog4/blog8.jpg';
import imagem9 from '../imagensBlog4/blog9.jpg';
import imagem10 from '../imagensBlog4/blog10.jpg';
 
import imagem12 from '../imagensBlog4/blog12.jpg';
import imagem13 from '../imagensBlog4/blog13.jpg';
import imagem14 from '../imagensBlog4/blog14.jpg';
 import imagem16 from '../imagensBlog4/blog16.jpg';
import imagem17 from '../imagensBlog4/blog17.jpg';
 import imagem19 from '../imagensBlog4/blog19.jpg';
import imagem20 from '../imagensBlog4/blog20.jpg';
import imagem21 from '../imagensBlog4/blog21.jpg';
import imagem22 from '../imagensBlog4/blog22.jpg';
 import imagem24 from '../imagensBlog4/blog24.jpg';
import imagem25 from '../imagensBlog4/blog25.jpg';
import imagem26 from '../imagensBlog4/blog26.jpg';
 import imagem28 from '../imagensBlog4/blog28.jpg';
import imagem29 from '../imagensBlog4/blog29.jpg';
import imagem30 from '../imagensBlog4/blog30.jpg';
import imagem31 from '../imagensBlog4/blog31.jpg';
import imagem32 from '../imagensBlog4/blog32.jpg';
import imagem33 from '../imagensBlog4/blog33.jpg';
import imagem34 from '../imagensBlog4/blog34.jpg';
import imagem35 from '../imagensBlog4/blog35.jpg';
import imagem36 from '../imagensBlog4/blog36.jpg';
import imagem37 from '../imagensBlog4/blog37.jpg';
import imagem38 from '../imagensBlog4/blog38.jpg';
import imagem39 from '../imagensBlog4/blog39.jpg';
import imagem40 from '../imagensBlog4/blog40.jpg';
import imagem41 from '../imagensBlog4/blog41.jpg';
 import imagem43 from '../imagensBlog4/blog43.jpg';
import imagem44 from '../imagensBlog4/blog44.jpg';
 import imagem46 from '../imagensBlog4/blog46.jpg';
import imagem47 from '../imagensBlog4/blog47.jpg';
import imagem48 from '../imagensBlog4/blog48.jpg';
import imagem49 from '../imagensBlog4/blog49.jpg';
import imagem50 from '../imagensBlog4/blog50.jpg';

 
 

import { BlogContainer, CarouselContainer, Container, Image, NextButton, PrevButton } from '../styles';
import Home from '../../home';
import Footer from '../../footer/footer';

 

export default function Blog4() {
  const images = [
    imagem1, imagem2,  imagem4, imagem5, imagem6, imagem7, imagem8, imagem9, imagem10, 
 imagem12, imagem13, imagem14,  imagem16, imagem17,  imagem19, imagem20, 
imagem21, imagem22, imagem24, imagem25, imagem26, imagem28, imagem29, imagem30, 
imagem31, imagem32, imagem33, imagem34, imagem35, imagem36, imagem37, imagem38, imagem39, imagem40, 
imagem41, imagem43, imagem44, imagem46, imagem47, imagem48, imagem49, imagem50

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
