import MyButton from '@/components/MyButton';
import { useTheme } from '@/context/ThemeContext';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Reset from '../../components/Reset';

export default function Settings(){
    const { theme, setThemeName } = useTheme();

    return(
        <SafeAreaProvider>
            <SafeAreaView style={[SettingsStyles.containier, {backgroundColor: theme.background}]}>
                <Text style={{color: theme.text, fontSize: theme.fontSizes.medium, marginBottom: 10}}>Choose a Theme</Text>

                <MyButton title="blues" onPress={() => setThemeName('blues')} width={300} height={40} borderRadius={30}/>
                <MyButton title="cappuccino" onPress={() => setThemeName('cappuccino')} width={300} height={40} borderRadius={30}/>
                <MyButton title="purple" onPress={() => setThemeName('purple')} width={300} height={40} borderRadius={30}/>
                <Reset></Reset>
                

            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const SettingsStyles = StyleSheet.create({
    containier: {
        flex: 1,
        padding: 10,
    },

    button: {
        marginBottom: 10,
    }
});