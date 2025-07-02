import CardStyles from '@/styles/CardStyles';
import React, { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

export type CardProps = {
    imageUris: string[];
    date: string;
    weight?: number;
}

export default function Card({imageUris, date, weight}: CardProps){
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const HandleCardPressed = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUris!.length)
    };

    return(

        <Pressable onPress={HandleCardPressed}>
            <View style={CardStyles.card}>
                <Image source={{uri: imageUris[currentIndex]}} resizeMode='cover' style={CardStyles.image} />
                <Text style={CardStyles.date}>{date}</Text>
                <Text style={CardStyles.weight}>{weight}kg</Text>
                <Text style={CardStyles.counter}>{currentIndex+1}/{imageUris.length}</Text>
            </View>
        </Pressable>
    );
}

