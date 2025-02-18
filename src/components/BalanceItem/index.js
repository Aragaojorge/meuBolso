import React, { useMemo } from "react";
import { Container, Label, Balance } from './styles';

export default function BalanceItem({data}) {
    const labelName = useMemo(() => {
        if(data.tag === 'saldo') {
            return{
                label: 'Saldo Atual',
                color: '#4CAF50'
            }
        } else if(data.tag === 'receita') {
            return{
                label: 'Receitas',
                color: '#6200EE'
            }
        } else {
            return{
                label: 'Despesas',
                color: '#F44336'
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