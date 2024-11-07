import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Exercise04() {
    return (
        <View style={styles.parent}>
            <View style={[styles.child, {backgroundColor: '#88ccec'}]}>
                <Text>Square 1</Text>
            </View>
            <View style={[styles.child, {backgroundColor: '#60c4ac'}]}>
                <Text>Square 2</Text>
            </View>
            <View style={[styles.child, {backgroundColor: '#eb2a3b'}]}>
                <Text>Square 3</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    parent:{
        backgroundColor: 'whitesmoke',
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flex: 1
    },

    child:{
        width: 80,
        height: 80,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    }

})

