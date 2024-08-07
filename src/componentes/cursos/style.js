import { styled } from 'styled-components';

export const StyleProjetos = styled.section`
    text-align: center;

    h2 {
        position: absolute;
        top: 120px;
        text-align: center;
        width: 80%;
        left: 10%;
        font-size: 36px;
        color: rgba(250,250,250);
        margin-bottom: 40px;
        background-color: rgba(10,10,10,0.5);
        color: aliceblue;
        padding: 10px;
        border-radius: 20px;
    }
    .turma{
        background-color: darkblue;
        color: #99CCFF;
        padding: 10px;
        border-radius: 10px;
    }

    h3 {
        font-size: 24px;
        color: rgba(250,250,250);
        margin-bottom: 10px;
    }

    p {
        position: relative;
        left: 10%;
        font-size: 18px;
        color: rgba(250,250,250);
        width: 80%;
    }

    img {
        min-width: 350px;
        width: 100%;
        height: 400px;
        object-fit: cover;
        object-position: top;
    }
    .fotoTarde{
        width: 50%;
        height: 100%;
        object-fit: cover;
    }

    @media screen and (max-width: 600px) {
        img {
            height: 200px;
        }
        h2 {
            top: 80px;
        }
    }
`;

export default StyleProjetos;
