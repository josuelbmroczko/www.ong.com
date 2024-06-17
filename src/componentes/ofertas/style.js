import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;


export const Style = styled.div`
 
text-align: center;
 display: flex;
 flex-direction: column;
  .image-container {
    position: relative;
    display: inline-block;
    

  }
 
 
  .image-container img {
    max-width: 600px;
     width: 100%;
    height: auto;
  }

  .overlay-text {
    position: relative;
    top: 80%;
    left: 0%;
    transform: translate(-50%, -50%);
    color: white;
    background-color: rgba(0, 0, 2000  );
    padding: 10px;
    border-radius: 5px;
    font-size: 1.5em;
    text-align: center;
    text-decoration: none;

    transition: 200ms;
    animation: ${bounce} 2s infinite;
  }
  .overlay-text:hover{
    background-color: #99CCFF;
  }

  .overlay-text a {
    color: white;
    text-decoration: none;
  }

  .overlay-text a:hover {
    text-decoration: underline;
  }
`;
