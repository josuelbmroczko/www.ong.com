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
  transition: transform 0.5s ease;
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
