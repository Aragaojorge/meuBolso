import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #F0F3FF;
    border-radius: 4px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom:14px;
    padding: 12px;
`;

export const Tipo = styled.View`
    flex-direction: row;
`;

export const TipoText = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-style: italic;
`;

export const IconView = styled.View`
    flex-direction: row;
    background-color: ${props => props.tipo === 'despesa' ? '#EF5350' : '#66BB6A'};
    padding-bottom: 4px;
    padding-top: 4px;
    padding-left: 8px;
    padding-right: 4px;
    border-radius: 5px;
    margin-bottom: 2px;
`;

export const ValorText = styled.Text`
    color: #121212;
    font-size: 22px;
`;
