import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import StyleDiv from './style';
import { data } from '../../adicionarProdutos/dataTextos';
import { Helmet } from 'react-helmet';
  


export default function Banner({ banner1, banner2 }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000, // Altere o valor conforme necessário
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Habilita o autoplay
    autoplaySpeed: 5000, // Define o tempo de intervalo entre os slides (em milissegundos)
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />
  };

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        style={{ ...style, left: 10, zIndex: 1 }} // Ajuste a posição da seta para a esquerda
        onClick={onClick}
        onKeyDown={onClick}
      >
        {"<"}
      </button>
    );
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        style={{ ...style, right: 10, zIndex: 1 }} // Ajuste a posição da seta para a direita
        onClick={onClick}
        onKeyDown={onClick}
      >
        {">"}
      </button>
    );
  }

  return (
    <StyleDiv>
      <Slider {...settings}>
        <div>
          <Helmet>
          

          <meta name="description" content={data.textoBanner.texto} />

          </Helmet>
          <div className="text-container">
            <h1>{data.textoBanner.titulo}</h1>
            <p>{data.textoBanner.texto}</p>
            
          </div>

          <div className="image-container">
            <img src={banner1} alt="banner 1" />
          </div>
        </div>
        <div>
          <div className="text-container">
            <h1>{data.textoBanner.titulo2}</h1>
            <p>
              {data.textoBanner.texto2}
              
            </p>
     
          </div>
          <div className="image-container">
            <img src={banner2} alt="banner 2" />
          </div>
        </div>
      </Slider>
    </StyleDiv>
  );
}
