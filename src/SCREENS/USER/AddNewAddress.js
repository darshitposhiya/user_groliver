import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../../CONSTANT/Colors';
import ImagePath from '../../CONSTANT/ImagePath';
import { useNavigation } from '@react-navigation/native';
import ButtonComp from '../../COMPONENTS/ButtonComp';
import Headercomp from '../../COMPONENTS/HeaderComp';

const AddNewAddress = () => {

    const navigation = useNavigation();
    const [filled, setFilled] = useState(false);


    return (
        <View style={styles.container}>
            <ScrollView>
               <Headercomp backText='Add new address' onPresss={()=>navigation.goBack()} 
           back_icon={ImagePath.back_icon} 
           headertext_style={styles.header_text}/>

                <ButtonComp btnText='use current location' btnStyle={styles.current_btn} />

                <View style={{
                    width: '95%', alignSelf: 'center', marginTop: verticalScale(10),
                    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
                }}>
                    <View style={{
                        height: verticalScale(1),
                        width: '45%',
                        backgroundColor: Colors.black,
                    }}></View>
                    <View>
                        <Text style={{ fontSize: scale(16) }}>OR</Text>
                    </View>

                    <View style={{
                        height: verticalScale(1),
                        width: '45%',
                        backgroundColor: Colors.black,
                    }}></View>
                </View>

                <View style={{ marginTop: verticalScale(10), width: '95%', alignSelf: 'center',marginBottom:verticalScale(20) }}>
                    <View style={{
                        flexDirection: 'row', alignItems: 'center', alignSelf: 'center', width: '100%',
                        justifyContent: 'space-between', borderWidth: scale(1), borderRadius: moderateScale(5),
                        borderColor: Colors.border_greay, height: verticalScale(48), marginVertical: verticalScale(5),
                        paddingHorizontal: moderateScale(5), backgroundColor: Colors.lite_greay
                    }}>
                        <View >
                            <TextInput placeholder='Country' style={{ fontSize: scale(14),color:Colors.font_greay }} />
                        </View>

                        <TouchableOpacity>
                            <Image source={ImagePath.down} resizeMode='contain'
                                style={{ height: verticalScale(40), width: moderateScale(40), }} />
                        </TouchableOpacity >
                    </View>

                    <AddressTextInput placeholder='House No/Flat No/Floor/Tower' />
                    <AddressTextInput placeholder='Area/Street' />
                    <AddressTextInput placeholder='Landmark' />
                    <AddressTextInput placeholder='City' />

                    <View style={{
                        flexDirection: 'row', alignItems: 'center', alignSelf: 'center', width: '100%',
                        justifyContent: 'space-between', borderWidth: scale(1), borderRadius: moderateScale(5),
                        borderColor: Colors.border_greay, height: verticalScale(48), marginVertical: verticalScale(5),
                        paddingHorizontal: moderateScale(5), backgroundColor: Colors.lite_greay
                    }}>
                        <View>
                            <TextInput placeholder='State' style={{ fontSize: scale(14),color:Colors.font_greay }} />
                        </View>

                        <TouchableOpacity>
                            <Image source={ImagePath.down} resizeMode='contain'
                                style={{ height: verticalScale(40), width: moderateScale(40), }} />
                        </TouchableOpacity >
                    </View>

                    <View style={{
                        flexDirection: 'row', alignItems: 'center', alignSelf: 'center', width: '100%',
                        height: verticalScale(48), marginVertical: verticalScale(5),
                        paddingHorizontal: moderateScale(5)
                    }}>
                        <TouchableOpacity onPress={() => setFilled(!filled)}>
                            <View style={[styles.check_circle, { borderColor: filled ? Colors.green : Colors.border_greay }]}>
                                {
                                    filled ? (<View style={{
                                        height: moderateScale(8),
                                        width: moderateScale(8),
                                        borderRadius: scale(20), backgroundColor: Colors.green,
                                    }}>
                                    </View>) : null
                                }
                            </View>
                        </TouchableOpacity>
                        <Text style={{ color: Colors.black, fontSize: scale(14), marginLeft: moderateScale(10) }}>Default Delivery Address</Text>
                    </View>
                </View>
            </ScrollView>
            <ButtonComp btnText='Save' btnStyle={styles.save_btn} />

        </View>
    );
};

const AddressTextInput = ({
    placeholder
}) => {
    return (
        <View style={{
            flexDirection: 'row', alignItems: 'center', alignSelf: 'center', width: '100%',
            justifyContent: 'space-between', borderWidth: scale(1), borderRadius: moderateScale(5),
            borderColor: Colors.border_greay, height: verticalScale(48), marginVertical: verticalScale(5),
            paddingHorizontal: moderateScale(5), backgroundColor: Colors.lite_greay
        }}>
            <View >
                <TextInput placeholder={placeholder} style={{ fontSize: scale(14),color:Colors.font_greay }} />
            </View>
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
    current_btn: {
        marginTop: verticalScale(20),
        backgroundColor: Colors.orange,
        alignSelf: 'center',
        width: '95%'
    },
    check_circle: {
        height: moderateScale(20),
        width: moderateScale(20),
        borderWidth: scale(1),
        borderRadius: scale(30),
        alignItems: 'center',
        justifyContent: 'center',
    },
    save_btn: {
        width: '95%',
        alignSelf: 'center',
        position: 'absolute',
        bottom: verticalScale(10),
    }
});

export default AddNewAddress;
