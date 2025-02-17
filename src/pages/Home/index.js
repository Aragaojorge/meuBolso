import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import { Background, ListBalance } from './styles';
import api from '../../services/api';
import { format } from 'date-fns';
import { useIsFocused } from '@react-navigation/native';
import BalanceItem from '../../components/BalanceItem';

export default function Home() {

    //const { signOut, user } = useContext(AuthContext);
    const isFocused = useIsFocused();
    const [listBalance, setListBalance] = useState([]);
    const [dateMoviments, setDateMovements] = useState(new Date());

    useEffect(() => {
        let isActive = true;
        async function getMoviments() {
            let dateFormated = format(dateMoviments, 'dd/MM/yyyy');
            const balance = await api.get('balance', {
                params:{
                    date: dateFormated
                }
            })
            if(isActive) {
                setListBalance(balance.data);
            }
        }
        getMoviments();
        return () => isActive = false;
    }, [isFocused])

    return(
        <Background>
            <Header title="Movimentações" />
            <ListBalance
                data={listBalance}
                horizontal={true}
                showsHorizontalScrollIndicartor={false}
                keyExtractor={item => item.tag}
                renderItem={({item}) => (<BalanceItem data={item} />)}
            />
        </Background>
    )
}