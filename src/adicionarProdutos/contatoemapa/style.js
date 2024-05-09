import styled from "styled-components";
import { screen } from '@testing-library/react';

export const Mapastyle = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
   padding-bottom: 50px;
      
    
    h2 {
        margin-bottom: 30px;
        font-size: 2.5rem;
        text-align: center;
        color: #333;
    }

    p {
        font-size: 1.2rem;
        text-align: center;
        color: #666;
        margin-bottom: 40px;
        width: 80%;
       
    }
    .mapa{
width: 100%;
text-align: center;

        iframe{
            width: 80%;
            height: 300px;
        }
    } 
    @media screen and (max-width: 500px) {
      h2{
  font-size:2rem;

      }
    }
 

    
`;
