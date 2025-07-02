import React, { useContext } from 'react';
import { Dimensions, ListRenderItem, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ProgressContext, ProgressEntry } from '../context/ProgressContext';
import Card from './Card';
import EmptyCard from './EmptyCard';

const {width} = Dimensions.get('window')

export default function ProgressFlatList() {
    const context = useContext(ProgressContext);

    if (!context) {
        return <Text>Loading Progress Data ... </Text>;
    }

    const { progressEntries } = context;

    if (progressEntries.length === 0) {
        return <EmptyCard />
    }

    const renderEntry: ListRenderItem<ProgressEntry> = ({ item }) => (
        <Card
          imageUris={item.imageUris}
          date={new Date(item.date).toLocaleDateString()}
          weight={item.weight ?? 0}
        />
    );

    const sortedEntries = [...progressEntries].sort((a, b) =>
        new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    return (
        <FlatList
        data={sortedEntries}
        keyExtractor={(item) => item.id}
        renderItem={renderEntry}
        horizontal
        snapToInterval={width}
        decelerationRate={"fast"}
        initialScrollIndex={progressEntries.length-1}
        getItemLayout={(data, index) => (
            {length: width*0.95, offset: width * 2 * index, index}
          )}

      />
    )

}

