import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { AuthContext } from '../contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

function Routes() {

    const { signed, loading } = useContext(AuthContext);

    if(loading) {
        return(
            <View>
                <ActivityIndicator size={20} color='#131313' />
            </View>
        )
    }

    return(
        signed? <AppRoutes /> : <AuthRoutes />
    )
}
export default Routes;