import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';
import Countries from './components/countries/Countries';

export default function App() {
  return (
    <View >
      <StatusBar style="auto" />
      <Countries></Countries>
    </View>
  );
}

