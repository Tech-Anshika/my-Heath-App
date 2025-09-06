import React, { useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import FormField from '../components/FormField';
import GradientButton from '../components/GradientButton';
import { sendHealthData } from '../utils/api';
import { useNavigation } from '@react-navigation/native';


export default