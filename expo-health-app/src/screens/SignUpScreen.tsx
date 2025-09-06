import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SignUp } from '@clerk/clerk-expo';
import { useNavigation } from '@react-navigation/native';


export default function SignUpScreen() {
const nav = useNavigation();


return (
<View className="flex-1 justify-center items-center bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 p-6">
<View className="w-full max-w-md p-6 rounded-3xl bg-white/10 backdrop-blur-md">
<Text className="text-white text-3xl font-bold mb-4">Create account</Text>
<SignUp path="/sign-up" routing="path" />
</View>


<TouchableOpacity onPress={() => nav.navigate('SignIn' as never)} className="mt-5">
<Text className="text-white underline">Already registered? Sign in</Text>
</TouchableOpacity>
</View>
);
}