import styled from 'styled-components';
import bgImg from '../../img/bg.jpg';

export const CardMeStyle = styled.div`
    text-align: center;
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    padding: 0 0 2% 0;
    font-family: 'Helvetica Neue';
    color: white;
`

export const NomeStyle = styled.h1`
`

export const AboutMeStyle = styled.div`

`

export const ImgStyle = styled.img`
    max-height: 150px;
    max-width: 150px;
    border-radius: 50%;
    padding: 3%;
`