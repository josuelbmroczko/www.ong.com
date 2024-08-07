import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import styled from 'styled-components';
import Footer from "../footer/footer";
import Home from "../home";
import StyleProjetos from "./style";

import foto1 from './foto1.jpeg';
import foto2 from './foto2.jpeg';
import foto3 from './foto3.jpeg';
import foto4 from './foto4.jpeg';
import foto5 from './foto5.jpeg';
import foto6 from './foto6.jpeg';
import foto7 from './foto7.jpeg';
import foto8 from './foto8.jpeg';
import foto9 from './foto9.jpeg';
import foto10 from './foto10.jpeg';
import foto11 from './foto11.jpeg';
import cursoProficionalizante from './foto1.jpg';

// Estilo adicional para o Swiper
const SwiperWrapper = styled.div`
    position: relative;
    .swiper {
        width: 100%;
        height: auto;
    }
    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        /* Remove padding horizontal para que as imagens fiquem coladas nas bordas */
        padding: 0;
        box-sizing: border-box;
    }
    .swiper-slide img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
    .swiper-button-next,
    .swiper-button-prev {
        color: #f0f0f0;
        width: 40px;
        height: 40px;
        background-color: rgba(0,0,0,0.5);
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }
    .swiper-pagination-bullet {
        background: #f0f0f0;
    }
`;

// Texto estilizado
const StyledText = styled.div`
    font-size: 18px;
    line-height: 1.6;
    color: #f5f5f5;
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
    background-color: rgba(31, 81, 104, 0.541);
    border-radius: 10px;

    h1 {
        font-size: 28px;
        color:#99CCFF;
        margin-bottom: 20px;
        font-weight: bold;
    }
    h2 {
        font-size: 36px;
        color: #ffffff;
        margin: 20px 0;
        padding: 10px;
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 10px;
    }
    p {
        font-size: 16px;
        color: #dcdcdc;
        margin-bottom: 20px;
        line-height: 1.8;
    }
`;

export default function Cursos() {
    return (
        <>
            <Home />
            <StyleProjetos>
                <img src={cursoProficionalizante} alt="Curso Profissionalizante" />
                <h2>Cursos</h2>
                <SwiperWrapper>
                    <h1>Promotor de Vendas</h1>
                    <p>Uma escolha certa para você</p>
                    <Swiper
                        spaceBetween={10} // Define o espaço entre os slides como 10px
                        centeredSlides={false} // Define o slide centralizado como false
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Navigation, Pagination, Autoplay]}
                        className="mySwiper"
                        breakpoints={{
                            1024: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            480: {
                                slidesPerView: 1,
                            },
                            0: {
                                slidesPerView: 1,
                            },
                        }}
                    >
                        <SwiperSlide><img src={foto1} alt="Curso 1" /></SwiperSlide>
                        <SwiperSlide><img src={foto2} alt="Curso 2" /></SwiperSlide>
                        <SwiperSlide><img src={foto3} alt="Curso 3" /></SwiperSlide>
                        <SwiperSlide><img src={foto4} alt="Curso 4" /></SwiperSlide>
                        <SwiperSlide><img src={foto5} alt="Curso 5" /></SwiperSlide>
                        <SwiperSlide><img src={foto6} alt="Curso 6" /></SwiperSlide>
                        <SwiperSlide><img src={foto7} alt="Curso 7" /></SwiperSlide>
                        <SwiperSlide><img src={foto8} alt="Curso 8" /></SwiperSlide>
                        <SwiperSlide><img src={foto9} alt="Curso 9" /></SwiperSlide>
                        <SwiperSlide><img src={foto10} alt="Curso 10" /></SwiperSlide>
                        <SwiperSlide><img src={foto11} alt="Curso 11" /></SwiperSlide>
                    </Swiper>
                </SwiperWrapper>
                <StyledText>
                    <h1>Promotor de Vendas</h1>
                    <p>Você quer se destacar no mercado de trabalho e conquistar grandes oportunidades na área de vendas? Nosso curso de Promotor de Vendas é uma escolha certa para você.</p>
                    <p>O que você vai aprender:</p>
                    <ul>
                        <li>Técnicas avançadas de promoção e estratégias eficazes para atrair e fidelizar clientes.</li>
                        <li>Comunicação e persuasão para máxima efetividade.</li>
                        <li>Gestão de tempo e organização para aumentar a produtividade.</li>
                        <li>Conhecimentos sobre produtos e serviços para garantir uma abordagem eficaz.</li>
                    </ul>
                    <p>Por que escolher nosso curso:</p>
                    <ul>
                        <li><strong>Instrutores Experientes:</strong> Receba orientação de profissionais com vasta experiência no mercado.</li>
                        <li><strong>Conteúdo Atualizado:</strong> Acesse material sempre atualizado para refletir as últimas tendências.</li>
                        <li><strong>Certificação:</strong> Receba um certificado ao concluir o curso com sucesso.</li>
                    </ul>
                    <p><strong>Quem pode participar:</strong></p>
                    <ul>
                        <li>Pessoas maiores de 18 anos.</li>
                    </ul>
                    <p>Garanta já sua vaga e transforme sua carreira!</p>
                </StyledText>
            </StyleProjetos>
            <Footer />
        </>
    );
}
