import MyButton from '@/components/MyButton';
import { ProgressContext } from '@/context/ProgressContext';
import { useTheme } from '@/context/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import React, { useContext, useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function UploadProgress() {
  const {theme} = useTheme()  
  const context = useContext(ProgressContext);
  const navigation = useNavigation()

  if (!context) return <Text>Loading...</Text>;

  const { addEntry } = context;

  const [images, setImages] = useState<string[]>([]);
  const [weight, setWeight] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); // YYYY-MM-DD

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission needed', 'Permission to access gallery is required!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsMultipleSelection: false, // true if supported on your platform
      quality: 0.7,
    });

    if (!result.canceled) {
      setImages([...images, result.assets[0].uri]);
    }
  };

  const takePhoto = async() => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted'){
        Alert.alert('Permission needed', 'Permission to access camera is required!')
        return;
    }

    let result = await ImagePicker.launchCameraAsync({
        allowsEditing: false,
        quality: 0.7,
        base64: false,
        exif: false,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.canceled){
        setImages([...images, result.assets[0].uri]);
    }



  }

  const onSubmit = async () => {
    if (images.length === 0) {
      Alert.alert('No Images', 'Please select at least one image');
      return;
    }

    try {
      await addEntry({
        imageUris: images,
        date,
        weight: weight ? parseFloat(weight) : undefined,
      });
      setImages([]);
      setWeight('');
      setDate(new Date().toISOString().slice(0, 10));

      navigation.goBack()
    } catch (e) {
      Alert.alert('Error', 'Failed to save progress.');
      console.error('addEntry error:', e);
    }
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, {backgroundColor:theme.background}]}>
      <MyButton title="Pick Image" onPress={pickImage} />
      <MyButton title="Take Photo" onPress={takePhoto} />

      <View style={styles.previewContainer}>
        {images.map(uri => (
          <Image key={uri} source={{ uri }} style={styles.imagePreview} />
        ))}
      </View>

      <Text>Date (YYYY-MM-DD):</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
        placeholder="Date"
      />

      <Text>Weight (kg):</Text>
      <TextInput
        style={styles.input}
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
        placeholder="Weight"
      />

      <MyButton title="Save Progress" onPress={onSubmit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  previewContainer: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  imagePreview: {
    width: 80,
    height: 80,
    marginRight: 8,
    borderRadius: 6,
    backgroundColor: '#eee',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
});
