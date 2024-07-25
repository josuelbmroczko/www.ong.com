import React, { useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import imagem1 from '../imagensblog2/CasaNinho1.jpeg';
import imagem2 from '../imagensblog2/CasaNinho2.jpeg';
import imagem3 from '../imagensblog2/CasaNinho3.jpeg';
import imagem4 from '../imagensblog2/CasaNinho4.jpeg';
import imagem5 from '../imagensblog2/CasaNinho5.jpeg';
import imagem6 from '../imagensblog2/CasaNinho6.jpeg';

import Home from '../../home';
import Footer from '../../footer/footer';
import { BlogContainer, CarouselContainer, Image, ImageWrapper, NextButton, PrevButton } from '../styles';
 
 


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextButton> </NextButton>,
  prevArrow: <PrevButton> </PrevButton>,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Blog1() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  
  const images = [
    imagem1, imagem2, imagem3, imagem4, imagem5, imagem6,
  ];

  return (
    <>
      <Home />
      <BlogContainer>
        <h2>Blog Ong</h2>
        <p>Um pedacinho da gente para vocês!</p>
        <CarouselContainer>
          <Slider {...settings}>
            {images.map((src, i) => (
              <ImageWrapper key={i}>
                <Image src={src} alt={`imagem${i + 1}`} />
              </ImageWrapper>
            ))}
          </Slider>
        </CarouselContainer>
      </BlogContainer>
      <Footer />
    </>
  );
}
