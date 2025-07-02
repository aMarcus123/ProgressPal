import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Alert } from 'react-native';
import MyButton from './MyButton';

export default function Reset() {
  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      Alert.alert('Success', 'Storage has been reset.');
    } catch (error) {
      Alert.alert('Error', 'Failed to clear storage.');
      console.error('AsyncStorage clear error:', error);
    }
  };

  return (
    <MyButton title="Reset Storage" onPress={clearStorage} width={200} height={40} marginBottom={5} marginTop={5}/>
  );
}
