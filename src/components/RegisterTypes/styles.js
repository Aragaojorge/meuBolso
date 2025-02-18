import styled from 'styled-components/native';

export const RegisterContainer = styled.View`
    flex-direction: row;
    width: 92%;
    padding-left: 5px;
    padding-right: 5px;
    justify-content: space-between;
    align-items: center;
`;

export const RegisterTypeButton = styled.TouchableOpacity`
    background-color: ${props => props.checked ? '#FFF' : '#e7e7e7'};
    width: 47%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 50px;
    border-radius: 5px;
    border-width: 1px;
    border-color: ${props => props.checked ? '#3b3dbf' : 'transparent'};
    margin-bottom: 15px;
`;

export const RegisterLabel = styled.Text`
    margin-left: 10px;
    font-size: 18px;
`;