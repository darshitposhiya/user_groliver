import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../../CONSTANT/Colors';
import ImagePath from '../../CONSTANT/ImagePath';
import { useNavigation } from '@react-navigation/native';
import Headercomp from '../../COMPONENTS/HeaderComp';

const PaymentHistory = () => {

    const PayData = [
        {
            date: '16 Jan 2022, 03:59 PM',
            amount: '12.00',
        },
        {
            date: '15 Jan 2022, 03:59 PM',
            amount: '12.00',
        },
        {
            date: '11 Jan 2022, 03:59 PM',
            amount: '12.00',
        },
        {
            date: '10 Jan 2022, 12:24 PM',
            amount: '54.00',
        },
        {
            date: '14 Dec 2021, 03:59 PM',
            amount: '41.00',
        },
        {
            date: '11 jan 2021, 03:59 PM',
            amount: '254.00',
        },
        {
            date: '11 jan 2021, 03:59 PM',
            amount: '412.00',
        },
        {
            date: '10 jan 2022, 03:59 PM',
            amount: '6.00',
        },
        {
            date: '08 jan 2022, 03:59 PM',
            amount: '54.00',
        },
        {
            date: '05 jan 2022, 03:59 PM',
            amount: '12.00',
        },
    ]

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            
            <Headercomp  backText='Payment History' onPresss={()=>navigation.goBack()} 
           back_icon={ImagePath.back_icon} 
           headertext_style={styles.header_text}/>

            <View style={{marginTop:verticalScale(10),marginBottom:verticalScale(50),}}>
                <FlatList
                showsVerticalScrollIndicator={false}
                    data={PayData}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ paddingVertical: verticalScale(10), borderBottomWidth: scale(1),
                                borderColor: Colors.border_greay
                            }}>

                                <View style={{
                                    flexDirection: 'row', width: '95%', alignSelf: 'center', alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}>
                                    <View>
                                        <Text style={{ color: Colors.black, fontSize: scale(14) }}>Pay on Groliver</Text>
                                        <Text style={{ color: Colors.font_greay, fontSize: scale(10), marginTop: verticalScale(5) }}>{item.date}</Text>
                                    </View>

                                    <View>
                                        <Text style={{ color: 'red', fontSize: scale(14) }}>-${item.amount}</Text>
                                        <Text style={{ color: Colors.font_greay, fontSize: scale(10), marginTop: verticalScale(5), alignSelf: 'flex-end' }}>Card</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>


        </View>
    );
};

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
});

export default PaymentHistory;
