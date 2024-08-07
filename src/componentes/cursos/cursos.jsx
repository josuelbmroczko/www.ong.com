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
import foto12 from './foto12.jpeg'

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

// Novo bloco de texto estilizado
const NewTextBlock = styled.div`
    font-size: 16px;
    line-height: 1.6;
    color: #f5f5f5;
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
    background-color: rgba(31, 81, 104, 0.541);
    border-radius: 10px;

    h3 {
        font-size: 24px;
        color: #99CCFF;
        margin-bottom: 20px;
        font-weight: bold;
    }
    ul {
        margin-left: 20px;
        li {
            margin-bottom: 10px;
        }
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
                    <p className='turma'> Turma da noite</p>
                    <Swiper
                        spaceBetween={10}
                        centeredSlides={false}
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
                <p className='turma'> Turma da tarde</p>
                        <img className='fotoTarde' src={foto12} alt="" />
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
                <NewTextBlock>
                    <h3>O que faz um Promotor de Vendas</h3>
                    <p>Um Promotor de Vendas é responsável por promover produtos e serviços de uma empresa, visando aumentar as vendas e melhorar a visibilidade da marca. As principais funções desse profissional incluem:</p>
                    <ul>
                        <li><strong>Apresentação de Produtos:</strong> Demonstrar os produtos para clientes e consumidores, destacando suas características e benefícios.</li>
                        <li><strong>Estratégias de Venda:</strong> Implementar estratégias e campanhas de vendas para atingir metas e objetivos estabelecidos pela empresa.</li>
                        <li><strong>Relacionamento com Clientes:</strong> Estabelecer e manter um bom relacionamento com clientes, tirando dúvidas e oferecendo suporte para melhorar a experiência de compra.</li>
                        <li><strong>Promoções e Ofertas:</strong> Organizar e executar ações promocionais e ofertas especiais para estimular as vendas e atrair novos clientes.</li>
                        <li><strong>Treinamento de Equipe:</strong> Orientar e treinar vendedores e equipe de loja sobre os produtos e técnicas de venda.</li>
                        <li><strong>Monitoramento de Vendas:</strong> Acompanhar e analisar o desempenho das vendas, coletar feedback dos clientes e ajustar estratégias conforme necessário.</li>
                        <li><strong>Organização de Material de Ponto de Venda:</strong> Garantir que o material promocional e os displays estejam bem posicionados e atualizados no ponto de venda.</li>
                        <li><strong>Relatórios e Análises:</strong> Elaborar relatórios sobre as atividades realizadas, o desempenho das vendas e o impacto das ações promocionais.</li>
                    </ul>
                    <p>O papel do Promotor de Vendas é crucial para aumentar a visibilidade dos produtos e estimular as vendas, além de criar uma experiência positiva para o cliente.</p>
                </NewTextBlock>
            </StyleProjetos>
            <Footer />
        </>
    );
}
