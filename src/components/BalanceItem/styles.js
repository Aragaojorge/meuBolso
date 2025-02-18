import styled from 'styled-components';

export const Container = styled.View`
    background-color: ${props => props.bg};
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 5px;
    justify-content: center;
    align-items: flex-start;
    width: 300px;
    height: 150px;
    padding-left: 15px;
`;
export const Label = styled.Text`
    color: #FFF;
    font-size: 20px;
    font-weight: bold;
`;
export const Balance = styled.Text`
    margin-top: 5px;
    font-size: 30px;
    color: #FFF;
`;