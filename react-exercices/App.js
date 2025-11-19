import {StatusBar} from 'expo-status-bar';
import {Platform, View, StyleSheet} from 'react-native';
import {HomeScreen} from "./screens/HomeScreen";
import {SafeAreaView} from 'react-native-safe-area-context';


export function ProvidedApp() {
    return (
        <View style={styles.container}>
            <HomeScreen/>
        </View>
    );
}

export default function App() {
    return (
        Platform.select({
            web: <View style={styles.container}>
                <ProvidedApp/>
                <StatusBar/>
            </View>,
            default: <View style={styles.container}>
                <SafeAreaView>
                    <ProvidedApp/>
                </SafeAreaView>
                <StatusBar/>
            </View>
        })
    );
}
const styles = StyleSheet.create({
    container: Platform.select({
        ios: {
            flex: 1,
            backgroundColor: '#000',
            alignItems: 'center',
        },
        android: {
            flex: 1,
            backgroundColor: '#000',
            alignItems: 'center',
        },
        web: {
            flex: 1,
            backgroundColor: '#000',
            alignItems: 'center',
        }
    }),
});
