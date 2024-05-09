import { useEffect } from 'react';
import Footer from '../../componentes/footer/footer';
import Home from '../../componentes/home';
import { StyledDiv } from './style';

export default function SobreConteudo() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div>
       <Home/>
    <StyledDiv>
     
      <h1>SOBRE</h1>
      <p>Somos uma organização sem fins lucrativos que atua na proteção integral de crianças e adolescentes em conjunto com a família e o Estado. Promovemos o desenvolvimento de suas potencialidades, a partir de ações socioeducativas, fortalecendo os vínculos familiares e sociais.</p>
      <h2>Missão</h2>
      <p>Acolher e promover o desenvolvimento de crianças e adolescentes em situação de vulnerabilidade, formando cidadãos conscientes de seus direitos e deveres.</p>
      <h2>Visão</h2>
      <p>Ser referência nos serviços de acolhimento e de prevenção para crianças e adolescentes em situação de risco e vulnerabilidade na cidade de São Paulo.</p>
      <h2>Valores</h2>
      <ul>
        <li>Compromisso com a criança e o adolescente</li>
        <li>Respeito à individualidade e diversidade</li>
        <li>Ambiente acolhedor</li>
        <li>Excelência nas práticas de gestão</li>
        <li>Relações éticas, neutralidade e transparência</li>
      </ul>
     
    </StyledDiv>
  
    </div>
  );
}
