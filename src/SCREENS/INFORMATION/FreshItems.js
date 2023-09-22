import React, { Component } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import ImagePath from '../../CONSTANT/ImagePath';
import { verticalScale } from 'react-native-size-matters';
import styles from './Styles';
import ButtonComp from '../../COMPONENTS/ButtonComp';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../CONSTANT/Colors';

const FreshItems = ({ onPress }) => {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar barStyle='dark-content' backgroundColor={Colors.white} />
            <View style={{ flex: 1 }}>
                <Image source={ImagePath.fresh_items} resizeMode='contain' style={styles.cover_image} />
            </View>

            <View style={styles.logo_view}>
                <Image source={ImagePath.main_logo} resizeMode='contain' style={styles.logo} />
            </View>


            <View style={{ flex: 1 }}>
                <View style={styles.bottom_view}>
                    <Text style={styles.heading_text}>Fresh Items</Text>
                    <Text style={[styles.lorem_text, { marginTop: verticalScale(10) }]}>Lorem Ipsum is simply dummy text of the</Text>
                    <Text style={styles.lorem_text}> printing and typesetting industry lorem</Text>
                    <Text style={styles.lorem_text}> Ipsum has been the industry.</Text>

                    <View style={styles.circle_view}>
                        <View style={[styles.circle, { backgroundColor: Colors.orange }]}></View>
                        <View style={styles.circle}></View>
                        <View style={styles.circle}></View>
                    </View>
                </View>
            </View>

            <ButtonComp btnText='Next' btnStyle={styles.btn} onPress={onPress} />

        </View>
    );
};


export default FreshItems;
