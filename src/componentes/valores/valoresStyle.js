import styled from "styled-components";

export const ValoresStyle = styled.div`
  position: relative;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(10,10,10,0.1);
    padding: 20px;
  }

  li {
    text-align: center;
    flex: 1;
    padding: 10px;
    background-color: #2D2E7C;
    border: 1px solid #105000;
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 250px;
    max-width: 350px;
    height: auto;
  }

  strong {
    font-weight: bold;
    font-size: 2rem;
    color: azure;
  }

  p {
    color: aliceblue;
    font-size: 1.2rem;
  }

  h2 {
    text-align: center;
  }

  span {
    font-size: 1.5em;
    color: #00aaff;
  }

  @media (max-width: 580px) {
    li {
      min-width: 200px;
      max-width: 250px;
    }
  }
`;
