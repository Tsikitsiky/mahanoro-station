import styled from "styled-components";

export const Container = styled.div`
    max-width: 1174px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 2rem
`;
export const Pan = styled.div``;
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
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 444px;
`;
export const Input = styled.input`
    background-color: #000000;
    color: #FF8906;
    padding: 1rem;
    margin-top: 10px;
    outline: none;
    border: none;
    width: 90%;
`;
export const InputLabel = styled.label`
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #0F0E17;
`;
export const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`;
export const Trip = styled.li`
    background-image: url('../icons/noto-v1_bus.svg');
    background-repeat: no-repeat;
    background-size: 65px;
    background-position: left;
    padding-left: 7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
`;
export const Group = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Detail = styled.p`
    margin: 0;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
`;
export const CancelButton = styled.button`
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-transform: uppercase;
    color: #FFFFFF;
    outline: none;
    border: none;
    background-color: #FF8906;
    padding: 1rem 1.5rem;
`;
export const UpdateButton = styled.button`
    background-color: #E53170;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    padding: 1rem 1.5rem;
    outline: none;
    border: none;
    align-self: flex-end;
`;