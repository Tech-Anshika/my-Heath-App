import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ResultsScreen from '../screens/ResultsScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import { useAuth } from '@clerk/clerk-expo';


export type RootStackParamList = {
SignIn: undefined;
SignUp: undefined;
Home: undefined;
Profile: undefined;
Settings: undefined;
Results: undefined;
ChangePassword: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();


export default function RootNavigator() {
const { isSignedIn } = useAuth();


return (
<Stack.Navigator screenOptions={{ headerShown: false }}>
{!isSignedIn ? (
<>
<Stack.Screen name="SignIn" component={SignInScreen} />
<Stack.Screen name="SignUp" component={SignUpScreen} />
</>
) : (
<>
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Results" component={ResultsScreen} />
<Stack.Screen name="Profile" component={ProfileScreen} />
<Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
<Stack.Screen name="Settings" component={SettingsScreen} />
</>
)}
</Stack.Navigator>
);
}