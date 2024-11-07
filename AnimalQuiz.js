import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const animals = [
    "bee", "crocodile", "deer", "elephant", "giraffe",
    "hummingbird", "kingfisher", "leopard", "owl", "peacock",
    "penguin", "rabbit", "squirrel", "tiger", "turtle", "zebra"
];

const animalImages = {
    bee: require('./img/bee.jpg'),
    crocodile: require('./img/crocodile.jpg'),
    deer: require('./img/deer.jpg'),
    elephant: require('./img/elephant.jpg'),
    giraffe: require('./img/giraffe.jpg'),
    hummingbird: require('./img/hummingbird.jpg'),
    kingfisher: require('./img/kingfisher.jpg'),
    leopard: require('./img/leopard.jpg'),
    owl: require('./img/owl.jpg'),
    peacock: require('./img/peacock.jpg'),
    penguin: require('./img/penguin.jpg'),
    rabbit: require('./img/rabbit.jpg'),
    squirrel: require('./img/squirrel.jpg'),
    tiger: require('./img/tiger.jpg'),
    turtle: require('./img/turtle.jpg'),
    zebra: require('./img/zebra.jpg')
};

const answerlist = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

const Questions = ({ picture, index }) => {
    return (
        <View style={styles.questionbox}>
            <Image source={picture} style={{ width: '100%', height: 300 }} />
            <View style={styles.questions}>
                <Text style={{color:'white', fontSize: 24, textTransform: 'uppercase', alignSelf: 'center', fontWeight:'bold'}}>What animal is this?</Text>
            </View>
            <RNPickerSelect
                onValueChange={(value) => {
                    answerlist[index] = value;
                }}
                items={animals.map(animal => ({ label: animal, value: animal }))}
            />
        </View>
    );
}

export default function AnimalQuiz() {
    const [score, setScore] = useState(0);

    const handleSubmit = () => {
        let currentScore = 0;
        for (let i = 0; i < animals.length; i++) {
            if (animals[i] === answerlist[i]) {
                currentScore++;
            }
        }
        setScore(currentScore);

        if (currentScore <= 12){
            Alert.alert(`You can do better next time. Your score is: ${currentScore}`);
        }
        else{
            Alert.alert(`Well done! Your score is: ${currentScore}`);
        }

    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignSelf: 'center'}}>
                    <Icon name={"cloud"} size={20} color="#93c5e6" style={{fontSize: 24}} />
                    <Text style={{ fontFamily: 'FontAwesome6', fontSize: 24, textTransform: 'uppercase', marginLeft: 5, color: '#747474', fontWeight:'bold'}}>
                        Animal Quiz
                    </Text>
                </View>
                {animals.map((animal, index) => (
                    <Questions key={animal} picture={animalImages[animal]} index={index} />
                ))}
                <Button
                    title="Submit Answers"
                    color="#2296f3"
                    onPress={handleSubmit}
                />
                <StatusBar style="auto" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 45,

    },
    questions:{
        marginTop: 10,
        backgroundColor:'#4884b4',
        height: 40,
        borderWidth: 1,
        width: '98%'
    },
    questionbox:{
        marginVertical: 10,
        alignItems: 'center',
        borderWidth: 1,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    }
})
