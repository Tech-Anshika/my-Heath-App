import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';


type Props = {
label: string;
value: string;
onChange: (v: string) => void;
placeholder?: string;
keyboardType?: TextInputProps['keyboardType'];
};


export default function FormField({ label, value, onChange, placeholder = '', keyboardType = 'default' }: Props) {
return (
<View className="mb-4">
<Text className="text-white mb-2 font-semibold">{label}</Text>
<TextInput
value={value}
onChangeText={onChange}
placeholder={placeholder}
placeholderTextColor="rgba(255,255,255,0.6)"
keyboardType={keyboardType}
className="bg-white/10 rounded-xl p-3 text-white"
/>
</View>
);
}