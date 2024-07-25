import React, { useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import imagem1 from '../imagensBlog3/blog1.jpg';
import imagem2 from '../imagensBlog3/blog2.jpg';
import imagem3 from '../imagensBlog3/blog3.jpg';
import imagem5 from '../imagensBlog3/blog5.jpg';
import imagem6 from '../imagensBlog3/blog6.jpg';

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
  const images = [imagem1, imagem2, imagem3, imagem5, imagem6];

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
