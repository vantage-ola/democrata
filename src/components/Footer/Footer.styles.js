import styled from 'styled-components';

export const Wrapper = styled.footer`
    grid-column: 2 / span 12;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin-bottom: 50px;
    @media (max-width: 730px){
        grid-column: 2 / span 6;
    }

`