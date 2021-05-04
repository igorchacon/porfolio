import styled from 'styled-components';
import bgImg from '../../img/bg.jpg'

export const HeaderStyle = styled.div`
    overflow: hidden;

    color: white;
    background-color: #C76888;
    padding: 1% 5%;
    text-align: center;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
`

export const LinkStyle = styled.button`

`