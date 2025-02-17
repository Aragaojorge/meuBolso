import React from 'react';
import { Platform } from 'react-native';

import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText } from './styles';

// configurar a rota para quando clicar no texto presente em LinkText
import { useNavigation } from '@react-navigation/native';



export default function SignIn() {

    // instanciar o hook para executar a rota para criar nova conta
    const navigation = useNavigation();

    return(
        // behaviour é referente a configuração para iphone, vai subir o conteúdo da view quando o teclado abrir

        <Background>
            <Container behaviour={Platform.OS === 'ios' ? 'padding' : ''}>
                <Logo source={require('../../assets/meuBolso.png')} />
                <AreaInput>
                    <Input placeholder="Seu email" />
                </AreaInput>
                <AreaInput>
                    <Input placeholder="Sua senha" />
                </AreaInput>
                <SubmitButton activeOpacity={0.8}>
                    <SubmitText>
                        Acessar sua conta
                    </SubmitText>
                </SubmitButton>
                <Link onPress={() => navigation.navigate('SignUp')}>
                    <LinkText>
                        Crie uma conta para você!
                    </LinkText>
                </Link>
            </Container>
        </Background>
    )
}