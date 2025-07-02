import { useTheme } from '@/context/ThemeContext';
import React from 'react';
import { DimensionValue, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  fontSize?: number;
  color?: string;
  backgroundColor?: string;
  width?: DimensionValue;
  height?: DimensionValue;
  borderRadius?: number;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
  marginTop?: number;
  marginBottom?: number;
};

export default function MyButton({
  title,
  onPress,
  fontSize = 16,
  color = '#fff',
  width,
  height,
  borderRadius = 30,
  style,
  textStyle,
  marginTop,
  marginBottom = 5,
}: CustomButtonProps) {
  
  const {theme} = useTheme()
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.button,
        { backgroundColor: theme.primary, borderRadius, width, height, marginTop, marginBottom},
        style,
      ]}
    >
      <Text style={[{ fontSize: theme.fontSizes.small, color: theme.text }, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },

});
