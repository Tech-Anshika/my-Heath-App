import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SignIn } from '@clerk/clerk-expo';
import { useNavigation } from '@react-navigation/native';


export default function SignInScreen() {
const nav = useNavigation();


return (
<View className="flex-1 justify-center items-center bg-gradient-to-br from-purple-700 via-pink-500 to-orange-400 p-6">
<View className="w-full max-w-md p-6 rounded-3xl bg-white/10 backdrop-blur-md">
<Text className="text-white text-3xl font-bold mb-4">Sign in</Text>
<SignIn path="/sign-in" routing="path" />
</View>


<TouchableOpacity onPress={() => nav.navigate('SignUp' as never)} className="mt-5">
<Text className="text-white underline">Don't have an account? Sign up</Text>
</TouchableOpacity>
</View>
);
}