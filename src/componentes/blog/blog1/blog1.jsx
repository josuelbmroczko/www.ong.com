import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import imagem1 from '../imagensBlog/imagem1.png';
import imagem2 from '../imagensBlog/imagem2.png';
import imagem3 from '../imagensBlog/imagem3.png';
import imagem4 from '../imagensBlog/imagem4.png';
import imagem5 from '../imagensBlog/imagem5.png';
import imagem6 from '../imagensBlog/imagem6.png';
import imagem7 from '../imagensBlog/imagem7.png';
import imagem8 from '../imagensBlog/imagem8.png';
import imagem9 from '../imagensBlog/imagem9.png';
import imagem10 from '../imagensBlog/imagem10.png';
import { Container } from '../styles';
import Home from '../../home';
import Footer from '../../footer/footer';


const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  width: 80%;
  margin: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center; /* centralizar horizontalmente */
  scroll-snap-type: x mandatory;
`;

const Image = styled.img`
  flex: 0 0 auto;
   width: 300px;
  height: 300px;
  
  margin: 10px;
  object-fit: cover;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 60%;
  transform: translateY(-50%);
  width:78%;
  padding: 0 10px;
`;

const Button = styled.button`
  background-color: rgba(17, 17, 17, 0.616);
  border: none;
  padding: 10px;
  color: aliceblue;
  cursor: pointer;
  &:hover {
    background-color: #0a2375;
  }
`;

export default function Blog1() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  
  const [images, setImages] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 600) {
        setImages([imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7, imagem8, imagem9, imagem10]);
      } else {
        setImages([imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7, imagem8, imagem9, imagem10]);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    containerRef.current.scrollLeft += containerRef.current.offsetWidth;
  };

  const handlePrev = () => {
    containerRef.current.scrollLeft -= containerRef.current.offsetWidth;
  };

  return (
    <>
   <Home/>
    <Container>
      <h2>Blog Ong</h2>
      <p>Um pedacinho da gente para voces !</p>
      <CarouselContainer ref={containerRef}>
        <ButtonContainer>
          <Button onClick={handlePrev}>⬅</Button>
          <Button onClick={handleNext}>⮕</Button>
        </ButtonContainer>
        <ImageWrapper>
          {images.map((src, i) => (
            <Image key={i} src={src} alt={`imagem${i + 1}`} />
          ))}
        </ImageWrapper>
      </CarouselContainer>
    </Container> 
    <Footer/>
    </>
  );
}
