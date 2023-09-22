import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Headercomp from '../../COMPONENTS/HeaderComp';
import Colors from '../../CONSTANT/Colors';
import ImagePath from '../../CONSTANT/ImagePath';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import RatingAndReview_Data from '../../CONSTANT/Data/RatingAndReview_Data';
import { useNavigation } from '@react-navigation/native';

const RatingReview = () => {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Headercomp backText='Rating And Reviews' back_icon={ImagePath.back_icon}
             onPresss={()=>navigation.goBack()} />

            <View style={{ paddingVertical: verticalScale(20) }}>
                <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
                    <Text style={{color:Colors.font_greay}}>4.0</Text>
                    <Image source={ImagePath.star} resizeMode='contain'
                        style={{ height: moderateScale(40), width: verticalScale(40) }} />
                </View>
                <Text style={{ alignSelf: 'center',color:Colors.font_greay }}>598 ratings and 12 reviews</Text>
            </View>

            <View style={{ width: '95%', alignSelf: 'center', marginTop: verticalScale(10) }}>
                <FlatList
                showsVerticalScrollIndicator={false}
                    data={RatingAndReview_Data}
                    renderItem={({ item }) => {
                        return (
                            <View style={{
                                borderWidth: scale(0.5), borderColor: Colors.border_greay,
                                marginTop: verticalScale(10), padding: moderateScale(5),
                                borderRadius: moderateScale(10)
                            }}>
                                <View style={{
                                    flexDirection: 'row', justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                            <Image source={ImagePath.apple} resizeMode='contain'
                                                style={{
                                                    height: verticalScale(40), width: moderateScale(40),
                                                    borderRadius: moderateScale(50), borderWidth: scale(1),
                                                    borderColor: Colors.black
                                                }} />
                                            <View style={{ marginHorizontal: moderateScale(5) }}>
                                                <Text style={{ fontSize: scale(16), color: Colors.black,
                                                }}>{item.name}</Text>
                                                <Text style={{ fontSize: scale(12),color:Colors.font_greay }}>{item.time}</Text>
                                            </View>
                                        </View>

                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{color:Colors.font_greay}}>{item.star_number}</Text>
                                        <Image source={item.star_icon} resizeMode='contain'
                                            style={{ height: verticalScale(20), width: moderateScale(20) }} />
                                    </View>
                                </View>

                                <View style={{paddingVertical:verticalScale(5)}}>
                                    <Text style={{ fontSize: scale(12),color:Colors.font_greay }}>{item.detail}</Text>
                                </View>
                            </View>
                        )
                    }} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
});

export default RatingReview;
