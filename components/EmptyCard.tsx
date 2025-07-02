import { useTheme } from '@/context/ThemeContext';
import CardStyles from '@/styles/CardStyles';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

export default function EmptyCard({}){
    const { theme } = useTheme();

    return(
        <Pressable>
            <View style={[CardStyles.card, {backgroundColor: theme.primary}]}>
                <Text style={{color: theme.text, fontSize: 70, padding: 5}}>No progress data. Upload some!</Text>
            </View>
        </Pressable>
    );
}

