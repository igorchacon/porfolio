import styled from 'styled-components';
import bgImg from '../../img/bg.jpg';

export const CorpoStyle = styled.div`
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;

    height: 250px;
    padding: 25px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 12px;
`

