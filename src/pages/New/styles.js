import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: #F0F4FF;
`;

export const Input = styled.TextInput`
    height: 50px;
    width: 90%;
    background-color: #FFF;
    font-size: 17px;
    padding: 0 8px;
    margin-bottom: 15px;
    border-radius: 5px;
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    align-items: center;
    justify-content: center;
    background-color: #03DAC6;
    border-radius: 5px;
`;

export const SubmitText = styled.Text`
    color: #FFF;
    font-size: 22px;
    font-weight: bold;
`;