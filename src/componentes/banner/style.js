import styled from 'styled-components';
import Cores from '../../utils/cores/cores';

const Slider = styled.div`
  position: relative;
 
  .text-container {
    position: absolute;
    top: 120px;

 
    z-index: 2;
   }
   h1 , p{
    display: flex;
    position: relative;
    left: 100px;
   
    width: 80vw;
    color:${Cores.branco};
    
     
   }
   h1 {
  
  font-size: 2rem;
 
   }
   p{
   
    font-size: 1.5rem;
  
   }
 
  

   img{
    width: 120vw;
    height: 90vh;
    object-fit: cover;
    z-index: 1;
   }
 
 
   .text-container {
  width: 50%;
  float: left;
  padding: 20px;
  text-align: center;
 
  
}
 
.image-container {
  width: 50%;
  float: left;
  z-index: 1;
 }

/* Adicione estilos de sua preferência para responsividade */

.image-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2); /* Cor preta semi-transparente */
    z-index: 0; /* Ajuste para garantir que a camada preta fique abaixo da imagem */
  }

  @media (max-width:700px) {
    
    h1 , p{
      left:  0px;
      padding: 10px;
    }
    h1 {
 
   }
   p{
    top: 10px;
    left: 5px;
    font-size: 1rem;
   }
  }
  @media (max-width:500px){

  }
`;

export default Slider;

 