import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Boat = ({picture,name,description})=> {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row'}}>
                <View style={[styles.titlebox, {flexDirection: 'row'}]}>
                    <Icon name="sailboat" size={20} color="white" />
                    <Text style={{ fontFamily: 'FontAwesome6', fontSize: 18, textTransform: 'uppercase', marginLeft: 5, color: 'white', fontWeight: 'bold'}}>
                        {name}
                    </Text>
                </View>
            </View>
            <View style={styles.descriptionbox}>
                <Text style={{textAlign:'center', margin: 5}}>
                    {description}
                </Text>
            </View>
            <Image source={picture} style={{alignSelf:'center', width: '97%', height: 300, marginTop: 15, marginBottom: 5}} />
        </View>
    );
};

export default function GetABoat() {
        return (
            <ScrollView>
                <View>
                    <View style={styles.container}>
                        <Text style={{fontWeight:'bold', textTransform: 'uppercase', textAlign:'center', fontSize: 20}}>
                            GetABoat - For Sale
                        </Text>
                    </View>
                    <Boat
                        picture={require('./img/sea_ray.jpg')}
                        name="Sea Ray 500 Sundancer"
                        description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                    />
                    <Boat
                        picture={require('./img/four_winns.jpg')}
                        name="Four Winns Horizon 180"
                        description="A sporty look and refined details truly set the Horizon 180 above all others."
                    />
                    <Boat
                        picture={require('./img/flipper.jpg')}
                        name="Flipper 640 ST"
                        description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                    />
                    <Boat
                        picture={require('./img/princess.jpg')}
                        name="Princess V48"
                        description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                    />
                    <Boat
                        picture={require('./img/bayliner.jpg')}
                        name="Bayliner 175 Bowrider"
                        description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                    />
                    <Boat
                        picture={require('./img/fairline.jpg')}
                        name="Fairline Targa 47"
                        description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                    />

                </View>
            </ScrollView>
        );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        backgroundColor: '#bcbcbc',
        borderWidth: 1,
        marginRight: 10,
        marginLeft: 10,
    },
    descriptionbox:{
        backgroundColor:  '#e0dcdc',
        borderWidth: 1,
        alignSelf:'center',

    },
    titlebox:{
        backgroundColor: '#585454',
        borderWidth: 1,
        marginTop: 20,
        marginBottom: 20,
        marginRight: 5,
        marginLeft: 5,
        width: '97%',
        alignItems: 'center',
        paddingVertical: 5,
        justifyContent:'center'
    }
})
