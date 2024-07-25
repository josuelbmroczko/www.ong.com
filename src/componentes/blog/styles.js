import styled from "styled-components";

 export const BlogContainer = styled.div`
 margin-top: 100px;
 
  text-align: center;
  padding: 2rem;

  .slick-dots li button:before {
    display: none;
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  margin: 2rem auto;
  max-width: 80%;
`;

export const ImageWrapper = styled.div`
  padding: 0 5px; /* Espaço de 5px em cada lado para totalizar 10px entre imagens */
  box-sizing: border-box;
  width: 100%;
  height: 300px; /* Altura padrão para todas as imagens */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Garante que a imagem cubra todo o espaço sem distorção */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: -1.5rem;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1;
`;

export const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: -1.5rem;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1;
`;