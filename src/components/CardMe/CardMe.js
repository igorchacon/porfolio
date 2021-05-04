import React from 'react';
import {CardMeStyle, NomeStyle, AboutMeStyle, ImgStyle} from './style.js';

import profileImg from '../../img/igorChcon.jfif'

function CardMe() {
    return (
        <div>
            <CardMeStyle>
                <ImgStyle src={profileImg} />
                <NomeStyle>Igor Chacon</NomeStyle>
                <AboutMeStyle>Certificado em Web Developer Full Stack pela Labenu</AboutMeStyle>
                <AboutMeStyle>Formado em Engenharia Elétrica pela UFRN</AboutMeStyle>
                <AboutMeStyle>Formado em Psicologia pela UFRN</AboutMeStyle>
                <AboutMeStyle>Formado em Automação Industrial pelo IMD/UFRN</AboutMeStyle>
                <AboutMeStyle>Experiência com ensino de robótica e programação e helpdesk</AboutMeStyle>
            </CardMeStyle>
        </div>
    )
}

export default CardMe;