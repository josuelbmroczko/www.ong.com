import { styled } from 'styled-components';
import { keyframes } from 'styled-components';

export const StyleProjetos = styled.section`
     
    text-align: center;

    h2 {
 position: absolute;
 top: 120px;
 text-align: center;
 width: 80%;
 left: 10%;
        font-size: 36px;
        color: #333;
        margin-bottom: 40px;
        background-color: rgba(10,10,10,0.5);
        color: aliceblue;
        padding: 10px;
        border-radius: 20px;
    }

    h3 {
        font-size: 24px;
        color: #555;
        margin-bottom: 10px;
    }

    p {
        position: relative;
        left: 10%;
        font-size: 18px;
        color: #666;
        width: 80%;
     
    }
    img{
 
        width: 100%;
        height: 400px;
        object-fit: cover;
    }
    @media screen and (max-width: 600px){
        img{
            height: 200px;
        }
        h2{
            top: 80px;
        }
    }
    
    
    `
