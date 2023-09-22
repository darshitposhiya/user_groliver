import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, } from 'react-native';
import { scale, verticalScale, moderateScale, } from 'react-native-size-matters';
import ImagePath from '../../CONSTANT/ImagePath';
import Headercomp from '../../COMPONENTS/HeaderComp';
import { useNavigation} from '@react-navigation/native';
import ButtonComp from '../../COMPONENTS/ButtonComp';
import Colors from '../../CONSTANT/Colors';

const OtpScreen = () => {

    //const rout = useRoute();
    //const { number } = rout.params;
    const navigation = useNavigation();

    const pin1Ref = useRef(null);
    const pin2Ref = useRef(null);
    const pin3Ref = useRef(null);
    const pin4Ref = useRef(null);

    const [pin1, setPin1] = useState('');
    const [pin2, setPin2] = useState('');
    const [pin3, setPin3] = useState('');
    const [pin4, setPin4] = useState('');
    return (
        <View style={styles.container}>

            <Headercomp back_icon={ImagePath.back_icon} onPresss={()=>navigation.goBack()}/>

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image source={ImagePath.email_image} resizeMode='contain' style={styles.email_image} />
                <Text style={{marginTop:verticalScale(10),color:Colors.black,fontSize:scale(16)}}>Verify your email</Text>
                <Text style={{marginTop:verticalScale(10),color:Colors.black,fontSize:scale(18),fontWeight:'500'}}>Check your email for an OTP</Text>
                <Text style={{color:'black',marginTop:verticalScale(5)}}>viratkohli99@gmail.com</Text>
            </View>

            <View style={styles.otp_view}>
                <View style={[styles.otp_box,{borderBottomColor:pin1 ? Colors.green : Colors.black}]}>
                    <TextInput style={styles.otptext} inputMode='numeric' maxLength={1} ref={pin1Ref}
                        onChange={(pin1) => {
                            setPin1(pin1)
                            if (pin1 !== null) {
                                pin2Ref.current.focus()
                            }
                        }} />
                </View>
                <View style={[styles.otp_box,{borderBottomColor:pin2 ? Colors.green : Colors.black}]}>
                    <TextInput style={styles.otptext} inputMode='numeric' maxLength={1} ref={pin2Ref}
                        onChange={(pin2) => {
                            setPin2(pin2)
                            if (pin2 !== null) {
                                pin3Ref.current.focus()
                            }
                        }} />
                </View>
                <View style={[styles.otp_box,{borderBottomColor:pin3 ? Colors.green : Colors.black}]}>
                    <TextInput style={styles.otptext} inputMode='numeric' maxLength={1} ref={pin3Ref}
                        onChange={(pin3) => {
                            setPin3(pin3)
                            if (pin3 !== null) {
                                pin4Ref.current.focus()
                            }
                        }} />
                </View>
                <View style={[styles.otp_box,{borderBottomColor:pin4 ? Colors.green : Colors.black}]}>
                    <TextInput style={styles.otptext} inputMode='numeric' maxLength={1} ref={pin4Ref}
                        onChange={(pin4) => { setPin4(pin4) }} />
                </View>
            </View>
            
            <ButtonComp btnText='Verify' btnStyle={styles.btn} onPress={()=>navigation.navigate('MAIN')}/>
            <TouchableOpacity>
            <Text style={{alignSelf:'center',color:'black',marginTop:verticalScale(15)}}>Resend OTP</Text>
            </TouchableOpacity>
            

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    email_image:{
        height:verticalScale(130),
        width:moderateScale(130)
    },
    otp_view: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: verticalScale(15),
        alignItems: 'center',
        width:'100%%',
        alignSelf:'center'
    },
    otp_box: {
        borderBottomWidth:1,
        borderBottomColor:Colors.black
    },
    otptext: {
        fontSize: scale(18),
        color: Colors.green,
        textAlign: 'center',
        fontWeight: '500',
        
    },
    btn: {
        marginTop: verticalScale(10),
        alignSelf: 'center',
    },
});

export default OtpScreen;
