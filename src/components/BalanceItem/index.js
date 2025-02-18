import React, { useMemo } from "react";
import { Container, Label, Balance } from './styles';

export default function BalanceItem({data}) {
    const labelName = useMemo(() => {
        if(data.tag === 'saldo') {
            return{
                label: 'Saldo Atual',
                color: '#2196F3'
            }
        } else if(data.tag === 'receita') {
            return{
                label: 'Receitas',
                color: '#66BB6A'
            }
        } else {
            return{
                label: 'Despesas',
                color: '#EF5350'
            }
        }
    }, [data])
    return(
        <Container bg={labelName.color}>
            <Label> {labelName.label} </Label>
            <Balance>R$ {data.saldo}</Balance>
        </Container>
    )
}