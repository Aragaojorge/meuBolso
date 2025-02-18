import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { DrawerItemList, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { AuthContext } from '../../contexts/auth';

export default function CustomDrawer(props) {
    const { user, signOut } = useContext(AuthContext);
    return(
        <DrawerContentScrollView {...props}>
            <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 25}}>
                <Image source={require('../../assets/meuBolso.png')} style={{width: 250, height: 250}} />
                <Text style={{fontSize: 20, marginTop: 14}}>Bem-Vindo</Text>
                <Text 
                    style={{fontSize: 20, fontWeight: 'bold', marginBottom:14, paddingHorizontal: 20}} 
                    numberOfLines={1}
                >
                    {user && user.name}
                </Text>
            </View>
            <DrawerItemList {...props} />
            <DrawerItem {...props} label={"Sair do aplicativo"} onPress={() => signOut()} />
            <DrawerItem label={'Desenvolvido por: Jorge L. Aragão'} />
        </DrawerContentScrollView>
    )
}