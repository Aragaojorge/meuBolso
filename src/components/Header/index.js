import React from "react";
import { Container, Title, ButtonMenu } from './styles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header({title}) {
    const navigation = useNavigation();
    return(
        <Container>
            <ButtonMenu onPress={() => navigation.openDrawer()} >
                <Icon name="menu" size={30} color="#121212" />
            </ButtonMenu>
            {title && (
                <Title>{title}</Title>
            )}
        </Container>
    )
}