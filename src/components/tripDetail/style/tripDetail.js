import styled from 'styled-components'
import {Link as ReachRouterLink} from 'react-router-dom'

export const Container = styled.div`
    max-width: 950px;
    margin: 0 auto;
`;

export const Title = styled.h2`
    font-size: 65px;
    font-weight: 400;
    line-height: 75px;
    padding-left: 15rem;
    background-image: url('../icons/twemoji_alarm-clock.svg');
    background-repeat: no-repeat;
    background-size: 100px;
    background-position: 5rem 50%;
`;
export const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 36px;
    font-weight: 400;
    line-height: 42px;

`;
export const Span = styled.span`
    color: #E53170;
`;
export const Trip = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    max-height: 93px;
    padding-left: 7rem;
    background-image: url('../icons/noto-v1_bus.svg');
    background-repeat: no-repeat;
    background-size: 80px;
    background-position: left 50%;
`;
export const Group = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Day = styled.p`
    color: #FFCC4D;
    margin: 0;
`;
export const Date = styled.p`
    margin: 0;
`;
export const Time = styled.p`
    color: #FFCC4D;
    margin: 0;     
`;

export const Seats = styled.p`
    margin: 0;
`;

export const Button = styled.button`
    background-color: #E53170;
    padding: 1rem 1.5rem ;
    outline: none;
    border: none;
    &:hover {
        background-color: linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), #E53170;;
    }
`;
export const Link = styled(ReachRouterLink)`
    text-decoration: none;
    color: #ffffff;
    font-size: 36px;
    font-weight: 400;
    line-height: 42px;
`;
