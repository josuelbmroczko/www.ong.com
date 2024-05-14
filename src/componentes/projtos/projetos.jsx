import Footer from "../footer/footer";
import Home from "../home";
import { StyleProjetos } from "./projetosStyle";
import { styled } from 'styled-components';
import cursoProficionalizante from '../../imagem/cursoProficionalizante.jpg'

const StyledText = styled.div`
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 20px;
    color: #333;
`;

export default function Projetos(){
    return(
        <>
            <Home/>
            <StyleProjetos>
                <img src={cursoProficionalizante} alt="" />
                <h2>Projetos</h2>
                <StyledText>
                    <h3>Curso de Capacitação Profissional para Jovens e Adultos:</h3>
                    <p>
                        Este projeto é direcionado para pessoas jovens e adultas da região de Itaquera.
                        O objetivo principal é oferecer um curso de capacitação profissional, ou seja, uma oportunidade para essas pessoas adquirirem habilidades e conhecimentos específicos para o mercado de trabalho.
                        A ideia é preparar os participantes para terem mais oportunidades de emprego ou até mesmo melhorarem suas posições profissionais.
                    </p>
                </StyledText>

                <StyledText>
                    <h3>Amigos do Coração - Acompanhamento Terapêutico nas Escolas da Prefeitura:</h3>
                    <p>
                        Este projeto está voltado para as escolas da Prefeitura na região de Itaquera.
                        Ele consiste em oferecer acompanhamento terapêutico para os alunos.
                        O objetivo é fornecer suporte emocional e psicológico para os estudantes, ajudando-os a lidar com questões pessoais, familiares ou escolares que possam estar afetando seu desempenho acadêmico e bem-estar emocional.
                    </p>
                </StyledText>
            </StyleProjetos>
            <Footer/>
        </>
    )
}
