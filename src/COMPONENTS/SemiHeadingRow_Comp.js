import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../CONSTANT/Colors';

const SemiHeadingRow_comp = ({
    semiheadingText,
    seeallText,
    onPress
}) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            alignSelf: 'center',
           
        }}>

            <View>
                <Text style={{
                    fontSize: scale(16),
                    fontWeight: '600',
                    color: Colors.black
                }}>{semiheadingText}</Text>
            </View>

            <TouchableOpacity onPress={onPress}>
                <Text style={{ color: Colors.green }}>{seeallText}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SemiHeadingRow_comp;
