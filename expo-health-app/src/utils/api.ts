import axios from 'axios';
import Constants from 'expo-constants';


const RENDER_API_URL = process.env.RENDER_API_URL || (Constants.expoConfig?.extra?.RENDER_API_URL ?? 'https://your-render-service.onrender.com/predict');


export async function sendHealthData(payload: Record<string, any>) {
const res = await axios.post(RENDER_API_URL, payload, { headers: { 'Content-Type': 'application/json' } });
return res.data;
}