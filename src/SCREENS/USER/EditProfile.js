import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../../CONSTANT/Colors';
import ImagePath from '../../CONSTANT/ImagePath';
import { useNavigation } from '@react-navigation/native';
import ButtonComp from '../../COMPONENTS/ButtonComp';
import Headercomp from '../../COMPONENTS/HeaderComp';

const EditProfile = () => {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
          
          <Headercomp backText='Edit Profile' onPresss={()=>navigation.goBack()} 
           back_icon={ImagePath.back_icon} 
           headertext_style={styles.header_text}/>

            <View style={{
                width: '95%', alignSelf: 'center', justifyContent: 'center',
                alignItems: 'center', paddingVertical: verticalScale(20), marginTop: verticalScale(10)
            }}>
                <View style={{
                    borderRadius: moderateScale(110), padding: moderateScale(5),
                    backgroundColor: Colors.border_greay
                }}>
                    <Image source={ImagePath.user} resizeMode='contain'
                        style={{ height: moderateVerticalScale(100), width: moderateScale(100) }} />
                </View>

                <TouchableOpacity style={{
                    borderRadius: moderateScale(40), padding: moderateScale(2),
                    backgroundColor: Colors.white, position: 'absolute', top: verticalScale(100),
                    right: moderateScale(110), elevation: 2
                }}>
                    <Image source={ImagePath.pen} resizeMode='contain'
                        style={{ height: moderateVerticalScale(20), width: moderateScale(20) }} />
                </TouchableOpacity>
            </View>

            <View style={{ width: '95%', alignSelf: 'center', marginTop: verticalScale(10), }}>

                <TextInput_Comp value='John wade' />
                <TextInput_Comp value='+1 23456789' />

                <ButtonComp btnText='Update' btnStyle={styles.update_btn} />
            </View>
        </View>
    );
};

const TextInput_Comp = ({
    value,
    placeholder
}) => {
    return (
        <View style={{
            width: '100%', backgroundColor: Colors.lite_greay, height: verticalScale(47),
            borderRadius: moderateScale(5), marginVertical: verticalScale(5)
        }}>
            <TextInput placeholder={placeholder} value={value}
                style={{ color: Colors.black, paddingLeft: moderateScale(15) }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    header_text:{
        fontSize: scale(18),
         color: Colors.black ,
         fontWeight:'400'
     },
    update_btn: {
        width: '100%',
        marginVertical: verticalScale(10)
    }
});

export default EditProfile;
