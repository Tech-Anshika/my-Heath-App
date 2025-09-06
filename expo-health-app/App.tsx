import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import { ClerkProvider } from '@clerk/clerk-expo';
import Constants from 'expo-constants';


const clerkPublishable = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY || (Constants.expoConfig?.extra?.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY ?? '');


export default function App() {
return (
<ClerkProvider publishableKey={clerkPublishable}>
<NavigationContainer>
<StatusBar barStyle="light-content" />
<RootNavigator />
</NavigationContainer>
</ClerkProvider>
);
}