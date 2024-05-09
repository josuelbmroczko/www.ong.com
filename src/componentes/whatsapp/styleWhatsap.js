import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const StyleWhatsap = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 20px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  img {
    width: 70px;
    transition: 200ms;
    animation: ${bounce} 2s infinite;
  }

  img:hover {
    width: 80px;
    animation: none;
  }

  @media (max-width: 400px) {
    img {
      width: 50px;
      transition: 200ms;
    }

    img:hover {
      width: 70px;
    }
  }
`;
