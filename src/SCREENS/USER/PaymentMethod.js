import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, TextInput } from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../../CONSTANT/Colors';
import ImagePath from '../../CONSTANT/ImagePath';
import { useNavigation } from '@react-navigation/native';
import ButtonComp from '../../COMPONENTS/ButtonComp';

const PaymentMethod = () => {

    const navigation = useNavigation();
    const [card, setCard] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const [filled, setFilled] = useState(false);

    return (
        <View style={styles.container}>

            <View style={styles.Header_view}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={ImagePath.back_icon} resizeMode='contain' style={styles.back_icon} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: scale(18), color: Colors.black,fontWeight:'400',marginStart:moderateScale(5) }}>Payment Methods</Text>
                </View>

                <View>
                    <TouchableOpacity onPress={() => { setModalVisible(!modalVisible) }}>
                        <Text style={{ color: Colors.green,fontSize:scale(14) }}>Add new card</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ width: '95%', alignSelf: 'center', marginTop: verticalScale(10), alignItems: 'center', }}>
                <Image source={ImagePath.atm_card} resizeMode='contain'
                    style={{ height: verticalScale(230), width: '100%' }} />
            </View>

            <View style={{ width: '95%', alignSelf: 'center', marginTop: verticalScale(20), flexDirection: 'row' }}>
                <View style={{
                    flexDirection: 'row', width: '90%', borderWidth: scale(1), borderColor: Colors.border_greay,
                    alignItems: 'center', justifyContent: 'space-between', padding: moderateScale(3), borderRadius: moderateScale(5)
                }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={ImagePath.atm1} resizeMode='contain'
                            style={{ height: verticalScale(22), width: moderateScale(50) }} />
                        <Text style={{ marginLeft: moderateScale(5),color:Colors.font_greay }}>**** **** **** *368</Text>
                    </View>
                </View>

                <View style={{ width: '10%', alignItems: 'flex-end', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => setCard(1)}>
                        <View style={{
                            height: moderateVerticalScale(20), width: moderateScale(20), borderRadius: moderateScale(50),
                            borderWidth: scale(1), borderColor: Colors.border_greay, alignItems: 'center', justifyContent: 'center',
                            backgroundColor: card == '1' ? Colors.green : Colors.white
                        }}>

                            <View style={styles.checkmark} />

                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ width: '95%', alignSelf: 'center', marginTop: verticalScale(10), flexDirection: 'row' }}>
                <View style={{
                    flexDirection: 'row', width: '90%', borderWidth: scale(1), borderColor: Colors.border_greay,
                    alignItems: 'center', justifyContent: 'space-between', padding: moderateScale(3), borderRadius: moderateScale(5)
                }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={ImagePath.atm2} resizeMode='contain'
                            style={{ height: verticalScale(30), width: moderateScale(50) }} />
                        <Text style={{ marginLeft: moderateScale(5),color:Colors.font_greay }}>**** **** **** *368</Text>
                    </View>
                </View>

                <View style={{ width: '10%', alignItems: 'flex-end', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => setCard(2)}>
                        <View style={{
                            height: moderateVerticalScale(20), width: moderateScale(20), borderRadius: moderateScale(50),
                            borderWidth: scale(1), borderColor: Colors.border_greay, alignItems: 'center', justifyContent: 'center',
                            backgroundColor: card == '2' ? Colors.green : Colors.white
                        }}>

                            <View style={styles.checkmark} />

                        </View>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={{ width: '100%', alignSelf: 'center' }}>
                                <View style={styles.modelheader_view}>
                                    <View>
                                        <Text style={styles.modelheader_text}>Add New Cart</Text>
                                    </View>

                                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                        <Image source={ImagePath.modalclose_icon} resizeMode='contain'
                                            style={styles.modalclose_icon} />
                                    </TouchableOpacity>
                                </View>

                                <View style={{
                                    width: '100%',
                                    flexDirection: 'row', borderWidth: scale(0.5),
                                    borderColor: Colors.border_greay,
                                    backgroundColor: Colors.lite_greay,
                                    marginVertical: verticalScale(10)
                                }} />

                                <View style={{
                                    width: '95%', alignSelf: 'center', padding: moderateScale(5),
                                }}>
                                    <PaymentInput placeholder='Card Holder Name' />
                                    <PaymentInput placeholder='Card Number' />

                                    <View style={{
                                        flexDirection: 'row', alignItems: 'center', width: '100%',
                                        justifyContent: 'space-between', marginVertical: verticalScale(10)
                                    }}>

                                        <View style={{
                                            flexDirection: 'row', alignItems: 'center', alignSelf: 'center', width: '48%',
                                            justifyContent: 'space-between', borderWidth: scale(1), borderRadius: moderateScale(5),
                                            borderColor: Colors.border_greay, height: verticalScale(48),
                                            paddingHorizontal: moderateScale(5), backgroundColor: Colors.lite_greay
                                        }}>
                                            <View >
                                                <TextInput placeholder='Country' style={{ fontSize: scale(14) }} />
                                            </View>

                                            <TouchableOpacity>
                                                <Image source={ImagePath.down} resizeMode='contain'
                                                    style={{ height: verticalScale(30), width: moderateScale(30), }} />
                                            </TouchableOpacity >
                                        </View>
                                        <PaymentInput placeholder='CVV' paymentinputStyle={styles.py_input} />
                                    </View>

                                    <View style={{
                                        flexDirection: 'row', alignItems: 'center', alignSelf: 'center', width: '100%',
                                        marginVertical: verticalScale(10)
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

                                    <ButtonComp btnText='Save' btnStyle={styles.save_btn}/>
                                </View>
                            </View>
                        </View>

                    </View>

                </Modal>
            </View>
        </View>
    );
};

const PaymentInput = ({
    placeholder,
    paymentinputStyle
}) => {
    return (
        <View style={{ ...styles.paymentinput_view, ...paymentinputStyle }}>
            <View >
                <TextInput placeholder={placeholder} style={{ fontSize: scale(14) }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    Header_view: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: verticalScale(10),
        alignSelf: 'center',
        width: '95%',
        justifyContent: 'space-between'
    },
    back_icon: {
        height: verticalScale(20),
        width: moderateScale(20),
    },
    checkmark: {
        transform: [{ rotateY: '40deg' }, { rotateZ: '45deg' }],
        height: verticalScale(13),
        width: moderateScale(6),
        borderBottomWidth: scale(1.5),
        borderRightWidth: scale(1.5),
        marginLeft: moderateScale(1),
        marginBottom: verticalScale(4),
        borderColor: Colors.white
    },
    //modal
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    modalView: {
        width: '100%',
        backgroundColor: 'white',
        padding: moderateScale(5),
        borderRadius: moderateScale(10),
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modelheader_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
        alignSelf: 'center',
        paddingVertical: verticalScale(10),
    },
    modelheader_text: {
        fontSize: scale(18),
        fontWeight: '600',
        color: Colors.black
    },
    modalclose_icon: {
        height: verticalScale(25),
        width: moderateScale(25)
    },
    py_input: {
        width: '48%',
        marginVertical: 0
    },
    check_circle: {
        height: moderateScale(20),
        width: moderateScale(20),
        borderWidth: scale(1),
        borderRadius: scale(30),
        alignItems: 'center',
        justifyContent: 'center',
    },
    save_btn:{
        width:'100%',
        alignSelf:'center',
        marginTop:verticalScale(15)
    },
    //component
    paymentinput_view: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        width: '100%',
        borderWidth: scale(1),
        borderRadius: moderateScale(5),
        marginVertical: verticalScale(10),
        borderColor: Colors.border_greay,
        height: verticalScale(48),
        paddingHorizontal: moderateScale(5),
        backgroundColor: Colors.lite_greay,
    }
});

export default PaymentMethod;
