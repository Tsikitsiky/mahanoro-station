import styled from 'styled-components'
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.div`
    max-width: 950px;
    margin: 0 auto;
`;
export const Title = styled.h2`
    font-size: 65px;
    font-weight: 700;
    line-height: 75px;
    padding-left: 8rem;
    background-image: url('../icons/noto-v1_bus.svg');
    background-repeat: no-repeat;
    background-size: 90px;
    background-position: left 50%;
`;
export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-height: 250px;
    gap: 30px;
    list-style: none;
    padding: 0;
    margin: 0;

`;
export const Town = styled.li`
    background-color: #0F0E17;
    padding-left: 5rem;
    background-image: url('../icons/building.svg');
    background-repeat: no-repeat;
    background-size: 34px;
    background-position: 1rem 50%;
`;
export const Link = styled(ReachRouterLink)`
    text-decoration: none;
    text-transform: uppercase;
    color: #ffffff;
`;
export const Name = styled.p`
    font-weight: 400;
    font-size: 36px;
    line-height: 42px; 
`;
