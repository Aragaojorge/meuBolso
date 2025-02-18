import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native';

import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText } from './styles';

// configurar a rota para quando clicar no texto presente em LinkText
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';

export default function SignIn() {

    // instanciar o hook para executar a rota para criar nova conta
    const navigation = useNavigation();

    const{ signIn, loadingAuth} = useContext(AuthContext);

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    function handleLogin(){
        signIn(email,password);
    }

    return(
        // behaviour é referente a configuração para iphone, vai subir o conteúdo da view quando o teclado abrir

        <Background>
            <Container behaviour={Platform.OS === 'ios' ? 'padding' : ''}>
                <Logo source={require('../../assets/meuBolso.png')} />
                <AreaInput>
                    <Input placeholder="Seu email" value={email} onChangeText={(text) => setEmail(text)} />
                </AreaInput>
                <AreaInput>
                    <Input placeholder="Sua senha" value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} />
                </AreaInput>
                <SubmitButton activeOpacity={0.8}onPress={handleLogin}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color="#FFF" />
                        ) : (
                            <SubmitText>Acessar sua conta</SubmitText>
                        )
                    }
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