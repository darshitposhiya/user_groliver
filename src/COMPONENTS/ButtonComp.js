//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import Colors from '../CONSTANT/Colors';


// create a component
const ButtonComp = ({
    btnText,
    btnStyle,
    onPress,
    btnTextStyle
}) => {
    return (
        <TouchableOpacity
        activeOpacity={0.5}
            onPress={onPress}
            style={{ ...styles.btnStyle, ...btnStyle }}>
            <Text style={{...styles.btnText,...btnTextStyle}}>{btnText}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    btnStyle: {
        height: moderateScale(46),
        width:'90%',
        backgroundColor: Colors.green,
        borderRadius: moderateScale(4),
        alignItems:'center',
        justifyContent:'center',
        
    },
    btnText: {
        fontSize: scale(18),
        color:Colors.white,
        fontWeight: '400',
        fontFamily:

    }
});

//make this component available to the app
export default ButtonComp;
