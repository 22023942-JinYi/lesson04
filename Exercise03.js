import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Exercise03() {
    return (
        <View style={styles.parent}>
            <View style={[styles.child, {backgroundColor: 'powderblue'}, styles.childOne]}>
                <Text style={{fontSize: 24,textAlign:'center'}}>Child One</Text>
            </View>
            <View style={[styles.child, {backgroundColor: 'skyblue'}, styles.childTwo]}>
                <Text style={{fontSize: 24,textAlign:'center'}}>Child Two</Text>
            </View>
            <View style={[styles.child, {backgroundColor: 'steelblue'}, styles.childThree]}>
                <Text style={{fontSize: 24, textAlign:'center'}}>Child Three</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({


    /*Section #3*/
    /*parent: {
        marginTop: 35,
        flexDirection: 'row', -> Section 3A
        flexDirection: 'column' -> Section 3B
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
        flex: 1 -> Section 3B
    },
    child: {
        borderWidth: 2,
        textAlign:'center'
        flex: 1 -> Section 3B
    },

    Section #3C
    childOne:{
        maxWidth: 90
    },
    childThree:{
        maxHeight: 120
    }
*/
    /*Section #3B*/
    /*parent: {
        marginTop: 35,
        flexDirection: 'row',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
    },
    child: {
        borderWidth: 2,
    },

    childOne:{
        flex: 1
    },
    childTwo: {
        flex: 2
    },
    childThree:{
        flex: 3
    }*/

    /*Exercise 3E (A)*/
    /*parent: {
        marginTop: 35,
        flexDirection: 'column',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
        flex: 1
    },
    child: {
        borderWidth: 2,
    }*/

    /*parent: {

        flexDirection: 'column',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
        flex: 1,
        /!*justifyContent:'flex-end' -> Exercise 3E (B)*!/
        /!*justifyContent: 'space-evenly' -> Exercise 3E (C)*!/
        /!*justifyContent: 'space-between' -> Exercise 3E (D)*!/
    },
    child: {
        borderWidth: 2,
        bottom: 0
    }*/


})

