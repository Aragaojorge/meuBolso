import React from 'react';
import { Platform } from 'react-native';

import { Background, Container, AreaInput, Input, SubmitButton, SubmitText } from '../SignIn/styles';

export default function SignUp() {

    return(
        <Background>
            <Container behaviour={Platform.OS === 'ios' ? 'padding' : ''}>
                <AreaInput>
                    <Input placeholder="Seu nome" />
                </AreaInput>
                <AreaInput>
                    <Input placeholder="Seu e-mail" />
                </AreaInput>
                <AreaInput>
                    <Input placeholder="Sua senha" />
                </AreaInput>
                <SubmitButton activeOpacity={0.8}>
                    <SubmitText>
                        Cadastrar Usuário
                    </SubmitText>
                </SubmitButton>
            </Container>
        </Background>
    )
}