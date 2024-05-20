import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
padding-top: 100px;
padding-bottom: 100px;
 
.carousel-container {
  width: 100%;
  max-width: 800px;
  overflow: hidden;
  margin: 0 auto;
}

.carousel {
  display: flex;
  transition: transform 2.5s ease;
}

.carousel img {
  flex: 0 0 auto;
  width: 100%;
  max-width: 100%;
  height: auto;
}

.controls {
  margin-top: 10px;
}

.arrow {
  cursor: pointer;
  user-select: none;
}

@media (max-width: 768px) {
  .carousel img {
    display: block;
  }

  .controls {
    display: flex;
    justify-content: space-between;
  }
}
`;

export const BlogContainer = styled(Container)`
  position: relative;
`;

export const CarouselContainer = styled.div`
  width: 80%;
  overflow-x: auto;
  display: flex;
  scroll-snap-type: x mandatory;
  margin: 100px;
 
  &::-webkit-scrollbar {
    width: 100%; /* Largura do scrollbar */
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #4a56c0; /* Cor do scrollbar */
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  scroll-snap-align: start;
  margin-right: 10px;
  &:hover {
    
  }
  
  
  
`;

export const Button = styled.button`
  background-color: rgba(74, 86, 192, 0.5)
;
  border: none;
  padding: 10px;
  color: aliceblue;
  cursor: pointer;
  &:hover {
 
  }
`;

export const PrevButton = styled(Button)`
  position: absolute;
  top: 60%;
  left: 10px;
  height: 200px;
  transform: translateY(-50%);
`;

export const NextButton = styled(Button)`
  position: absolute;
  top: 60%;
  right:  10px;
  height: 200px;
  transform: translateY(-50%);
`;

