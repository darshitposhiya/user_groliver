import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../../CONSTANT/Colors';
import ImagePath from '../../CONSTANT/ImagePath';
import { useNavigation } from '@react-navigation/native';
import Headercomp from '../../COMPONENTS/HeaderComp';

const MyOrders = () => {

    const order = [
        {
            id: 'OD_1',
            image: ImagePath.banana,
            name: 'Organic Banana',
            delivery: 'Delivered on Oct 08,2021'
        },
        {
            id: 'OD_2',
            image: ImagePath.apple,
            name: 'Red Apple',
            delivery: 'Delivered on Oct 08,2021'
        },
        {
            id: 'OD_3',
            image: ImagePath.bell,
            name: 'Red Bell',
            delivery: 'Delivered on Oct 08,2021'
        },
        {
            id: 'OD_4',
            image: ImagePath.bakery_snacks,
            name: 'Snacks',
            delivery: 'Delivered on Oct 08,2021'
        },
        {
            id: 'OD_5',
            image: ImagePath.ginger,
            name: 'Organic Ginger',
            delivery: 'Delivered on Oct 08,2021'
        },
        {
            id: 'OD_6',
            image: ImagePath.banana,
            name: 'organic banana',
            delivery: 'Delivered on Oct 08,2021'
        },
    ]

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

           <Headercomp backText='My Orders' onPresss={()=>navigation.goBack()} 
           back_icon={ImagePath.back_icon} 
           headertext_style={styles.header_text}/>

            <View style={styles.search_view}>
                <Image source={ImagePath.search} resizeMode='contain' style={styles.search_icon} />
                <Text style={styles.search_text}>Search all orders...</Text>
            </View>

            <View style={{ width: '95%', alignSelf: 'center', marginTop: verticalScale(10) }}>
                <FlatList
                    data={order}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <View style={{
                                width: '100%', alignSelf: 'center', alignItems: 'center', flexDirection: 'row',
                                justifyContent: 'space-between', borderBottomWidth: scale(0.4),
                                paddingVertical: verticalScale(8),
                            }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View>
                                        <Image source={item.image} resizeMode='contain'
                                            style={{ height: verticalScale(50), width: moderateScale(50), }} />
                                    </View>

                                    <View style={{ marginLeft: moderateScale(5) }}>
                                        <Text style={{ color: Colors.black, fontSize: scale(16), fontWeight: '600' }}>{item.delivery}</Text>
                                        <Text style={{ color: Colors.font_greay, fontSize: scale(12), marginTop: verticalScale(5) }}>{item.name}</Text>
                                    </View>
                                </View>

                                <TouchableOpacity onPress={()=>{navigation.navigate('ORDERDETAIL')}}>
                                    <Image source={ImagePath.right_icon} resizeMode='contain'
                                        style={{
                                            height: verticalScale(20), width: moderateScale(20),
                                            tintColor:Colors.font_greay
                                        }} />
                                </TouchableOpacity>
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
        backgroundColor: Colors.white,
    },
    header_text:{
        fontSize: scale(20),
         color: Colors.black ,
         fontWeight:'400'
     },
    search_view: {
        flexDirection: 'row',
        width: '95%',
        height: verticalScale(45),
        marginTop: verticalScale(10),
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: Colors.lite_greay,
        borderRadius: moderateScale(10)
    },
    search_text: {
        color: Colors.black,
        marginLeft: moderateScale(10)
    },
    search_icon: {
        height: verticalScale(25),
        width: moderateScale(25),
        marginStart: moderateScale(10)
    },
});

export default MyOrders;
