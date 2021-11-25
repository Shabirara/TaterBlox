import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Router } from './src/Screen/Router/Router'

export default function Root() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Router />
            </NavigationContainer>
        </SafeAreaProvider>
    )
}
