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
      <p><mark>Missão:</mark></p>
      <p>Nosso objetivo é capacitar e transformar vidas, proporcionando educação, nutrição e cuidados médicos a crianças carentes. Trabalhamos incansavelmente para criar um ambiente seguro, estimulante e amoroso, onde cada criança possa alcançar seu pleno potencial.</p>
      
      <p><mark>Visão:</mark></p>
      <p>Visualizamos um futuro onde todas as crianças, independentemente de sua origem ou circunstâncias, tenham acesso igualitário a oportunidades educacionais, cuidados de saúde e nutrição adequada. Queremos ser agentes de mudança positiva, capacitando as crianças para se tornarem líderes e construtores de suas comunidades.</p>
      
      <h2><mark>Valores</mark></h2>
      <ul>
        <li> <mark>1.Compromisso com a igualdade:</mark>  Acreditamos na igualdade de oportunidades para todas as crianças, independentemente de sua raça, gênero, religião ou situação econômica.</li>
        <li><mark>Respeito e dignidade:</mark> Valorizamos cada criança como um indivíduo único, respeitando suas histórias, culturas e identidades.</li>
        <li><mark>Transparência e responsabilidade:</mark> Mantemos altos padrões de transparência em todas as nossas operações e somos responsáveis perante nossos beneficiários, doadores e parceiros.</li>
        <li><mark>Empoderamento:</mark> Capacitamos as crianças a serem agentes de mudança em suas próprias vidas e comunidades, fornecendo-lhes educação, habilidades e apoio emocional.</li>
        <li><mark>Colaboração:</mark> Reconhecemos a importância da colaboração e parceria com outras organizações, comunidades e órgãos governamentais para alcançar nosso objetivo comum de melhorar as vidas das crianças carentes.</li>
      </ul>
     
    </StyledDiv>
  
    </div>
  );
}
