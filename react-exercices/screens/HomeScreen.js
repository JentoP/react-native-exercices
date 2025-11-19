import {View, Text, StyleSheet} from "react-native";

export function HomeScreen() {
    return (
        <View style={styles.bannerView}>
            <Text style={styles.buttonText}>Home Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    bannerView: {
        backgroundColor: '#370095',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        padding: 20,
        width: 220,
        borderRadius: 10,
        margin: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});