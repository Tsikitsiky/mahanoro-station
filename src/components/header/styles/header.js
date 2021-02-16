import styled from 'styled-components'
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0F0E17;
    color: white;
    padding: 0 3rem;
`;
export const Title = styled.h1`
    font-size: 36px;
`;

export const Link = styled(ReachRouterLink)`
    text-decoration: none;
    color: white;
    font-size: 24px;
`;