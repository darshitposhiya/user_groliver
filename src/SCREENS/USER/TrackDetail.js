import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../../CONSTANT/Colors';
import ImagePath from '../../CONSTANT/ImagePath';
import { useNavigation } from '@react-navigation/native';
import Headercomp from '../../COMPONENTS/HeaderComp';

const TrackDetail = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
               
            <Headercomp backText='Order Detail' onPresss={() => navigation.goBack()}
                    back_icon={ImagePath.back_icon}
                    headertext_style={styles.header_text} />

                <View style={{
                    flexDirection: 'row', width: '95%', justifyContent: 'space-between', alignItems: 'center',
                    paddingVertical: verticalScale(5), marginTop: verticalScale(10), alignSelf: 'center',

                }}>
                    <View>
                        <Text style={{ color: Colors.green, fontSize: scale(16) }}>bnana</Text>
                        <Text style={{ color: Colors.black, fontSize: scale(12), fontWeight: '600' }}>Order ID :
                            <Text style={{ fontWeight: '400' }}> ok123</Text></Text>
                    </View>
                    <Image source={ImagePath.banana} resizeMode='contain'
                        style={{ height: verticalScale(80), width: moderateScale(80), }} />
                </View>

                {/* Track-Order*/}
                <View style={{
                    width: '95%', alignSelf: 'center', borderWidth: scale(1), borderRadius: moderateScale(5),
                    borderColor: Colors.border_greay, marginTop: verticalScale(10)
                }}>
                    <View style={{
                        borderBottomWidth: scale(1), borderColor: Colors.border_greay,
                        padding: moderateScale(10)
                    }} >
                        <Text style={{ color: Colors.black, fontWeight: '600', fontSize: scale(16) }}>Track order</Text>
                    </View>

                    <View style={{ flexDirection: 'row', width: '100%', padding: moderateScale(10), alignItems: 'center' }}>
                        <View style={{ width: '10%', height: moderateScale(160), justifyContent: 'center' }}>
                            <View style={{
                                height: moderateVerticalScale(10), width: moderateScale(10), borderRadius: moderateScale(50),
                                backgroundColor: Colors.green, alignSelf: 'center'
                            }} />

                            <View style={{
                                height: moderateVerticalScale(60), width: moderateScale(3),
                                backgroundColor: Colors.green, alignSelf: 'center'
                            }} />

                            <View style={{
                                height: moderateVerticalScale(10), width: moderateScale(10), borderRadius: moderateScale(50),
                                backgroundColor: Colors.green, alignSelf: 'center'
                            }} />

                            <View style={{
                                height: moderateVerticalScale(60), width: moderateScale(3),
                                backgroundColor: Colors.green, alignSelf: 'center'
                            }} />

                            <View style={{
                                height: moderateVerticalScale(10), width: moderateScale(10), borderRadius: moderateScale(50),
                                backgroundColor: Colors.green, alignSelf: 'center'
                            }} />

                        </View>

                        <View style={{ width: '90%', height: moderateScale(160), justifyContent: 'center' }}>
                            <View style={{ paddingBottom: verticalScale(25) }}>
                                <Text style={{ color: Colors.black, fontWeight: '400' }}>Order Placed</Text>
                                <Text style={{ color: Colors.font_greay, fontSize: scale(12) }}>6 oct,2021</Text>
                            </View>

                            <View style={{ paddingBottom: verticalScale(25) }}>
                                <Text style={{ color: Colors.black, fontWeight: '400' }}>Delivering</Text>
                                <Text style={{ color: Colors.font_greay, fontSize: scale(12) }}>Your order is on the way</Text>
                            </View>

                            <View>
                                <Text style={{ color: Colors.black, fontWeight: '400' }}>Order Delivered</Text>
                                <Text style={{ color: Colors.font_greay, fontSize: scale(12) }}>8 oct,2021</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Shipping-Address*/}
                <View style={{
                    width: '95%', alignSelf: 'center', borderWidth: scale(1), borderColor: Colors.border_greay,
                    marginTop: verticalScale(10), borderRadius: moderateScale(5)
                }}>
                    <View style={{
                        borderBottomWidth: scale(1), borderColor: Colors.border_greay,
                        padding: moderateScale(10)
                    }} >
                        <Text style={{ color: Colors.black, fontWeight: '600', fontSize: scale(16) }}>Shipping Address</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', padding: moderateScale(10) }}>

                        <View style={{ width: '10%', justifyContent: 'center' }}>
                            <Image source={ImagePath.location} resizeMode='contain'
                                style={{ height: verticalScale(25), width: moderateScale(25), alignSelf: 'center' }} />
                        </View>

                        <View style={{ width: '90%', justifyContent: 'center' }}>
                            <Text style={{ color: Colors.black, fontSize: scale(14) }}> 490 Lauren Drive ,Madison ,Wiscosin, United States.</Text>
                        </View>
                    </View>
                </View>

                {/*Order-summary */}
                <View style={{
                    width: '95%', alignSelf: 'center', borderWidth: scale(1), borderColor: Colors.border_greay,
                    marginVertical: verticalScale(10), borderRadius: moderateScale(5)
                }}>
                    <View style={{
                        borderBottomWidth: scale(1), borderColor: Colors.border_greay, padding: moderateScale(10)
                    }} >
                        <Text style={{ color: Colors.black, fontWeight: '600', fontSize: scale(16) }}>Price Detail</Text>
                    </View>

                    <View style={{ borderBottomWidth: scale(1), borderColor: Colors.border_greay, padding: moderateScale(10), }}>
                        <View style={{
                            flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                            paddingVertical: verticalScale(5), width: '95%', alignSelf: 'center'
                        }}>
                            <Text style={{ color: Colors.black, fontSize: scale(14) }}>Price(2 items)</Text>
                            <Text style={{ color: Colors.black, fontSize: scale(14) }}>$5.00</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                            paddingVertical: verticalScale(5), width: '95%', alignSelf: 'center'
                        }}>
                            <Text style={{ color: Colors.black, fontSize: scale(14) }}>Discount</Text>
                            <Text style={{ color: Colors.black, fontSize: scale(14) }}>$0.00</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                            paddingVertical: verticalScale(5), width: '95%', alignSelf: 'center'
                        }}>
                            <Text style={{ color: Colors.black, fontSize: scale(14) }}>Delivery charges</Text>
                            <Text style={{ color: Colors.black, fontSize: scale(14) }}>$1.00</Text>
                        </View>

                    </View>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                        padding: moderateScale(10), width: '95%', alignSelf: 'center'
                    }}>
                        <Text style={{ color: Colors.black, fontSize: scale(14), fontWeight: '600' }}>Total Amount</Text>
                        <Text style={{ color: Colors.black, fontSize: scale(14), fontWeight: '600' }}>$6.00</Text>
                    </View>


                </View>
            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    header_text: {
        fontSize: scale(18),
        color: Colors.black,
        fontWeight: '400'
    },
    bill_view: {
        width: '100%',
        borderWidth: scale(1),
        borderRadius: moderateScale(5),
        borderColor: Colors.border_greay,
    },
});

export default TrackDetail;
