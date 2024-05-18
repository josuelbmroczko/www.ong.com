import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import imagem1 from '../imagensblog2/CasaNinho1.jpeg';
import imagem2 from '../imagensblog2/CasaNinho2.jpeg';
import imagem3 from '../imagensblog2/CasaNinho3.jpeg';
import imagem4 from '../imagensblog2/CasaNinho4.jpeg';
import imagem5 from '../imagensblog2/CasaNinho5.jpeg';
import imagem6 from '../imagensblog2/Chuchucão&Bila-Bilu.jpeg';
 

import { Container } from '../styles';
import Home from '../../home';
import Footer from '../../footer/footer';

const BlogContainer = styled(Container)`
  position: relative;
`;

const CarouselContainer = styled.div`
  width: 90%;
  overflow-x: auto;
  display: flex;
  scroll-snap-type: x mandatory;
  margin: 100px;
 
  &::-webkit-scrollbar {
    width: 100%; /* Largura do scrollbar */
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #4a56c0; /* Cor do scrollbar */
  }
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  scroll-snap-align: start;
  margin-right: 10px;
  &:hover {
    width: 400px;
    height: 400px;
  }
  
  
  
`;

const Button = styled.button`
  background-color: rgba(17, 17, 17, 0.616);
  border: none;
  padding: 10px;
  color: aliceblue;
  cursor: pointer;
  opacity: 1;

  &:hover {
    opacity: 0.5;
  }
`;



const PrevButton = styled(Button)`
  position: absolute;
  top: 60%;
  left: 0;
  height: 200px;
  transform: translateY(-50%);
`;

const NextButton = styled(Button)`
  position: absolute;
  top: 60%;
  right:  0px;
  height: 200px;
  transform: translateY(-50%);
`;

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
