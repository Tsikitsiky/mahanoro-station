import styled from 'styled-components'
import {Link as ReachRouterLink} from 'react-router-dom'

export const Container = styled.div`
    max-width: 950px;
    margin: 0 auto;
    display: flex;
    gap: 2rem;
`;
export const Pan = styled.div`
    
`;
export const Title = styled.h2`
    font-size: 65px;
    font-weight: 400;
    line-height: 75px;
`;
export const Span = styled.span`
    color: #E53170;
`;
export const SubTitle = styled.h3`
    text-transform: uppercase;
    font-size: 24px;
    line-height: 28px;
`;
export const Group = styled.div`
    
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`;

export const SeatButton = styled.button`
    background-image: url('../icons/emojione_seat.svg');
    background-repeat: no-repeat;
    background-size: 100%;
    border: none;
    outline: none;
    width: 59px;
    height: 59px; 
`;
export const BookButton = styled.button`
    background-color: #E53170;
    color: #ffffff;
    font-size: 24px;
    font-weight: 28px;
    padding: 1rem 1.5rem;
    border: none;
    outline: none;
`;
export const Info = styled.span`
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #2F2F2F;
`;
export const Detail = styled.p`
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #A7A9BE;

`;
export const Link = styled(ReachRouterLink)`
    text-decoration: none;
    color: #ffffff;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
`;
export const Modal = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const InnerModal = styled.div`
    max-width: 773px;
    max-height: 593px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 3rem;
    background-color: #ffffff;
    margin: auto;
    text-align: center;
`;
export const CloseButton = styled.button`
    align-self: flex-end;
`;
export const ModalTitle = styled.h3`
    padding-left: 80px;
    background-image: url('../icons/confirm.svg');
    background-repeat: no-repeat;
    background-size: 71px;
    background-position: left 50%;
    font-weight: bold;
    font-size: 36px;
    line-height: 43px;
    text-transform: uppercase;
    color: #000000;
    height: 71px;
    margin: 0
`;
export const ModalText = styled.p`
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    max-width: 500px;
`;
export const ButtonCheck = styled.button`
    background-color: #E53170;
    outline: none;
    border: none;
    padding: 1rem 1.5rem;
`;