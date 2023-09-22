import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Pressable } from 'react-native';
import ImagePath from '../../CONSTANT/ImagePath';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import ButtonComp from '../../COMPONENTS/ButtonComp';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../CONSTANT/Colors';

const Login = () => {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, backgroundColor: Colors.green }}>
                <Image source={ImagePath.groliver_white} resizeMode='contain' style={styles.cover_image} />
                <Text style={{ alignSelf: 'center', color: Colors.white, fontWeight: '500' }}>Login/Sign up</Text>
            </View>

            <View style={{ flex: 1 }}>
                <View style={styles.input_cardview} >
                    <Text style={{ marginTop: 10, marginLeft: 10, color: Colors.black }}>Enter Mobile Number</Text>
                    <TextInput placeholder='Type here...' style={styles.input_view} />

                    <ButtonComp btnText='Next' btnStyle={styles.btn} />

                    <View style={{ marginTop: verticalScale(20), alignSelf: 'center', width: '90%' }}>
                        <Text style={{ fontSize: scale(10), color: Colors.black }}>By continuing, you are agree to our
                            <Text style={{ color: Colors.orange }}> Terms and Conditions
                                <Text style={{ color: Colors.black }}>  and
                                </Text> Privacy Policy</Text></Text>

                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    width: '60%',
                    position: 'absolute',
                    bottom: '23%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    alignSelf: 'center'
                }}>
                    <View style={{
                        height: verticalScale(1),
                        width: '40%',
                        backgroundColor: Colors.black,
                    }}></View>
                    <View>
                        <Text style={{ fontSize: scale(16), color: Colors.black }}>OR</Text>
                    </View>

                    <View style={{
                        height: verticalScale(1),
                        width: '40%',
                        backgroundColor: Colors.black,
                    }}></View>
                </View>

                <ButtonComp btnText='Continue as guest' btnStyle={styles.orange_btn}
                    onPress={() => navigation.navigate('OTPSCREEN')} />


            </View>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    cover_image: {
        width: '100%',
        height: '100%'
    },
    input_cardview: {
        margin: 10,
        backgroundColor: Colors.white,
        borderRadius: 10,
        paddingHorizontal: moderateScale(10),
        paddingVertical: verticalScale(25),
        width: '90%',
        alignSelf: 'center',
        elevation: 2,
        position: 'absolute',
        bottom: '30%'
    },
    input_view: {
        height: moderateScale(46),
        width: '90%',
        backgroundColor: Colors.lite_greay,
        borderRadius: moderateScale(4),
        marginTop: verticalScale(5),
        alignSelf: 'center',
        color: Colors.black
    },
    btn: {
        marginTop: verticalScale(20),
        alignSelf: 'center',
    },
    orange_btn: {
        marginTop: verticalScale(20),
        alignSelf: 'center',
        backgroundColor: Colors.orange,
        position: 'absolute',
        bottom: verticalScale(10)
    }
});

export default Login;
