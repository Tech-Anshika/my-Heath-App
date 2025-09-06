import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function GradientButton({ title, onPress }: { title: string; onPress: () => void }) {
return (
<TouchableOpacity onPress={onPress} className="rounded-xl overflow-hidden">
<LinearGradient
colors={["#7C3AED", "#EC4899", "#F97316"]}
start={[0, 0]}
end={[1, 1]}
style={{ paddingVertical: 14, paddingHorizontal: 18 }}
>
<Text className="text-white text-center font-bold">{title}</Text>
</LinearGradient>
</TouchableOpacity>
);
}