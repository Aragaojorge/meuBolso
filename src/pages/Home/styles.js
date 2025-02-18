import styled from 'styled-components';

export const Background = styled.SafeAreaView`
    flex: 1;
    background-color: #F0F4FF;
`;
export const ListBalance = styled.FlatList`
    max-height: 150px;
`;

export const Area = styled.View`
    margin-top: 25px;
    background-color: #FFF;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    flex-direction: row;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 15px;
    align-items: baseline;
`;

export const Title = styled.Text`
    margin-left: 5px;
    color: #121212;
    margin-bottom: 15px;
    font-weight: bold;
    font-size: 18px;
`;

export const List = styled.FlatList`
    flex: 1;
    background-color: #FFF;
`;