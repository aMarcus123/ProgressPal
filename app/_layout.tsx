import { ProgressProvider } from '@/context/ProgressContext';
import { ThemeProvider, useTheme } from '@/context/ThemeContext';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function ThemedTabs(){
    const { theme } = useTheme();

    return (
        <Tabs
        screenOptions={{
            headerShown: true,
            headerTitle: 'ProgressPal',
            headerTitleAlign: 'center',

            tabBarIcon: () => null,
            
            headerTitleStyle: {
            fontSize: theme.fontSizes.heading,
            color: theme.text
        },
        
        headerStyle: {
            height: 125,
            backgroundColor: theme.primary
        },
        
        
        tabBarLabelStyle: {
            fontSize: theme.fontSizes.small,
            color: theme.text,
            textAlign: 'center'
        },
        
        
        tabBarStyle: {
            backgroundColor: theme.primary,
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
        },


    }}
    >
        <Tabs.Screen
        name="(tabs)/(home)"
        options={{
            title: 'Home',
            }}
            />

        <Tabs.Screen 
            name="(tabs)/settings"
            options={{
                title: 'Settings',
            }}
            />

        </Tabs>
    )
}

export default function RootLayout() {
    const { theme } = useTheme();
    
    return (
        <GestureHandlerRootView style={styles.flex}>
        <ProgressProvider>
            <ThemeProvider>
                    <ThemedTabs />
            </ThemeProvider>
        </ProgressProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
