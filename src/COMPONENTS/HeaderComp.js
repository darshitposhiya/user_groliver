import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,Pressable } from 'react-native';
import ImagePath from '../CONSTANT/ImagePath';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import Colors from '../CONSTANT/Colors';

const Headercomp = (
    { backText, onPresss,
        headerstyle_view,
        back_image,
        backimage_style,
        back_icon,
        headertext_style
    }) => {
    return (
        <View style={{ ...styles.container, ...headerstyle_view }}>

            <Pressable onPress={onPresss}>
                <Image source={back_icon} resizeMode='contain'
                    style={styles.back_icon} />
            </Pressable>

            <Text style={{ ...styles.title_text, ...headertext_style }}>{backText}</Text>

            <Image source={back_image} resizeMode='contain'
                style={{ ...backimage_style, ...styles.back_image }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '95%',
        alignSelf: 'center',
        marginVertical: verticalScale(5)
    },
    back_icon: {
        height: verticalScale(20),
        width: moderateScale(20),
    },
    title_text: {
        fontSize: scale(25),
        color: Colors.black,
        fontWeight: 'bold',
        marginStart: moderateScale(5)
    },
    back_image: {
        height: verticalScale(40),
        width: moderateScale(40)
    }
});

export default Headercomp;
