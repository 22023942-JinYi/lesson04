import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Exercise02() {
    return (
        <View>
            <View style={styles.greenBox}>
                <Text style={[styles.text, styles.text]}>Who We Are</Text>
            </View>
            <View style={styles.greenBox}>
                <Text style={styles.text}>Our People</Text>
            </View>
            <View style={styles.greenBox}>
                <Text style={styles.text}>Our Campus</Text>
            </View>


            <StatusBar style="auto"/>
        </View>
    )
};

const styles = StyleSheet.create({
    greenBox: {
        width: 100,
        height:100,
        marginTop: 30,
        borderWidth: 1,
        backgroundColor: '#088404',
    },
    text: {
        color: 'white',
        textAlign: 'center'
    },
    title: {
        fontWeight: 'bold'
    }

})
