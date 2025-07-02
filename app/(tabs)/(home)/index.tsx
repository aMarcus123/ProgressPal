import MyButton from '@/components/MyButton';
import ProgressFlatList from '@/components/ProgressFlatList';
import { useTheme } from '@/context/ThemeContext';
import GlobalStyles from '@/styles/GlobalStyles';
import { useRouter } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen(){
    const router = useRouter();
    const { theme } = useTheme()

    return(
        <SafeAreaProvider>
            <SafeAreaView style={[GlobalStyles.container, {backgroundColor: theme.background}]}>
                <ProgressFlatList />
                <MyButton title="Upload Progress" onPress={() => router.push('./UploadProgressForm')} width={200} height={50} marginBottom={10}/>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}
