import React, { useContext, useEffect, useState } from 'react';
import { TouchableOpacity, Modal } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import { Background, ListBalance, Area, Title, List } from './styles';
import api from '../../services/api';
import { format } from 'date-fns';
import { useIsFocused } from '@react-navigation/native';
import BalanceItem from '../../components/BalanceItem';
import HistoricList from '../../components/HistoricList';
import Icon from 'react-native-vector-icons/FontAwesome';
import CalendarModal from '../../components/CalendarModal';

export default function Home() {

    //const { signOut, user } = useContext(AuthContext);
    const isFocused = useIsFocused();
    const [listBalance, setListBalance] = useState([]);
    const [movements, setMovements] = useState([]);
    const [dateMoviments, setDateMovements] = useState(new Date());
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        let isActive = true;
        async function getMoviments() {
            let date = new Date(dateMoviments);
            let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;
            let dateFormatted = format(onlyDate, 'dd/MM/yyyy')
            const receives = await api.get('/receives', {
                params: {
                    date: dateFormatted
                }
            })
            const balance = await api.get('balance', {
                params:{
                    date: dateFormatted
                }
            })
            if(isActive) {
                setMovements(receives.data);
                setListBalance(balance.data);
            }
        }
        getMoviments();
        return () => isActive = false;
    }, [isFocused, dateMoviments])

    async function handleDelete(id) {
        try{
            await api.delete('/receives/delete', {
                params: {
                    item_id: id
                }
            })
            setDateMovements(new Date());
        } catch(err) {
            console.log(err)
        }
    }

    function filterDateMovements(dateSelected) {
        console.log(dateSelected);
        setDateMovements(dateSelected);
    }

    return(
        <Background>
            <Header title="Movimentações" />
            <ListBalance
                data={listBalance}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.tag}
                renderItem={({item}) => (<BalanceItem data={item} />)}
            />
            <Area>
                <TouchableOpacity onPress={()=> setModalVisible(true)}>
                    <Icon name='calendar' color="#121212" size={30} />
                </TouchableOpacity>
                <Title>Últimas Movimentações</Title>
            </Area>
            <List
                data={movements}
                keyExtractor={item => item.id}
                renderItem={({item}) => <HistoricList data={item} deleteItem={handleDelete} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom:20}}
            />
            <Modal visible={modalVisible} animationType='fade' transparent={true}>
                <CalendarModal 
                    setVisible = {() => setModalVisible(false)}
                    handleFilter = {filterDateMovements}
                />
            </Modal>
        </Background>
    )
}