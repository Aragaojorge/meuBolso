import React, { useState } from "react";
import { Background, Input, SubmitButton, SubmitText } from './styles';
import { SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import Header from '../../components/Header';
import RegisterTypes from "../../components/RegisterTypes";
import api from '../../services/api';
import { addISOWeekYears, format } from 'date-fns';
import { useNavigation } from "@react-navigation/native";

export default function New() {
    const navigation = useNavigation();
    const [labelInput, setLabelInput] = useState('');
    const [valueInput, setValueInput] = useState('');
    const [type, setType] = useState('receita');

    function handleSubmit() {
        Keyboard.dismiss();
        if(isNaN(parseFloat(valueInput)) || type === null) {
            alert('Existem campos vazios, por favor preencher!')
            return;
        }
        Alert.alert(
            'Confirme os dados',
            `Tipo: ${type} - Valor: ${parseFloat(valueInput)}`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Salvar',
                    onPress: () => handleAdd()
                }
            ]
        )
    }

    async function handleAdd() {
        Keyboard.dismiss();
        await api.post('/receive', {
            description: labelInput,
            value: Number(valueInput),
            type: type,
            date:format(new Date(), 'dd/MM/yyyy')
        })
        setLabelInput('');
        setValueInput('');
        navigation.navigate('Home');
    }

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Background>
                <Header title="Registros" />
                <SafeAreaView style={{marginTop: 15, alignItems: 'center'}}>
                    <Input 
                        placeholder="Detalhes do registro" 
                        value={labelInput} 
                        onChangeText={(text) => setLabelInput(text)} 
                    />
                    <Input 
                        placeholder="Valor da movimentação" 
                        keyboardType="numeric" 
                        value={valueInput} 
                        onChangeText={(text) => setValueInput(text)}
                    />
                    <RegisterTypes type={type} sendTypeChanged = {(item) => setType(item)} />
                    <SubmitButton onPress={handleSubmit}>
                        <SubmitText>Salvar</SubmitText>
                    </SubmitButton>
                </SafeAreaView>
            </Background>
        </TouchableWithoutFeedback>
    )
}