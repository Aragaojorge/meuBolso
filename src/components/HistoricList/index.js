import React from "react";
import { Container, TipoText, Tipo, IconView, ValorText } from "../HistoricList/styles";
import { TouchableWithoutFeedback, Alert } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'

export default function HistoricList({data, deleteItem}) {
    function handleDeleteItem() {
        Alert.alert(
            'Atenção',
            'Você deseja deletar essa movimentação?', [
                {text: 'Cancelar', style: 'cancel'},
                {text: 'Deletar', onPress: () => deleteItem(data.id)}
            ]
        )
    }
    return(
        <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
            <Container>
                <Tipo>
                    <IconView tipo={data.type}>
                        <Icon name={data.type === 'despesa' ? 'arrow-down': 'arrow-up'} size={20} color="#FFF" />
                        <TipoText> {data.type}: {data.description}</TipoText>
                    </IconView>
                </Tipo>
                <ValorText>
                    R$ {data.value}
                </ValorText>
            </Container>
        </TouchableWithoutFeedback>
    )
}
