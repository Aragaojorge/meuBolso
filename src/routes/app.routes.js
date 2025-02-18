import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
    return(
        <AppDrawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: '#FFF',
                    padding: 20,
                },
                drawerActiveBackgroundColor: '#03DAC6',
                drawerActiveTintColor: '#FFF',
                drawerInactiveBackgroundColor: '#F0F2FF',
                drawerInactiveTintColor: '#121212'
            }}        
        >
            <AppDrawer.Screen name='Home' component={Home}/>
        </AppDrawer.Navigator>
    )
}

export default AppRoutes;