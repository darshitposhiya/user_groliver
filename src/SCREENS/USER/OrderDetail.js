import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import ImagePath from '../../CONSTANT/ImagePath';
import Colors from '../../CONSTANT/Colors';
import { useNavigation } from '@react-navigation/native';
import ButtonComp from '../../COMPONENTS/ButtonComp';
import SemiHeadingRow_comp from '../../COMPONENTS/SemiHeadingRow_Comp';
import ProductList from '../../COMPONENTS/ProductList';
import Headercomp from '../../COMPONENTS/HeaderComp';
import { BestSelling_Data } from '../../CONSTANT/Data/Product_Data';

const OrderDetail = () => {

    const navigation = useNavigation();
    const [rating, setRating] = useState('');

    return (
        <View style={styles.container}>
            <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>

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

                <View style={{
                    width: '95%', alignSelf: 'center', marginTop: verticalScale(10), borderTopWidth: scale(1),
                    borderBottomWidth: scale(1), paddingVertical: verticalScale(10), borderColor: Colors.border_greay,
                }}>
                    <Text style={{ color: Colors.black, fontSize: scale(16), fontWeight: '600' }}>
                        Delivered Oct 08,2021</Text>
                    <Text style={{ color: Colors.black, fontSize: scale(12), paddingTop: verticalScale(5) }}>
                        Rate your experience</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: verticalScale(5) }}>
                        <TouchableOpacity onPress={() => setRating(1)}>
                            <Image source={ImagePath.star} resizeMode='contain'
                                style={{
                                    height: verticalScale(20), width: moderateScale(20)
                                    , backgroundColor: Colors.border_greay
                                }} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image source={ImagePath.star} resizeMode='contain'
                                style={{ height: verticalScale(20), width: moderateScale(20) }} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image source={ImagePath.star} resizeMode='contain'
                                style={{ height: verticalScale(20), width: moderateScale(20) }} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image source={ImagePath.star} resizeMode='contain'
                                style={{ height: verticalScale(20), width: moderateScale(20) }} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image source={ImagePath.star} resizeMode='contain'
                                style={{ height: verticalScale(20), width: moderateScale(20) }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        width: '100%', height: verticalScale(100), borderWidth: scale(1),
                        borderRadius: moderateScale(5), borderColor: Colors.border_greay, marginTop: verticalScale(10)
                    }}>
                        <TextInput placeholder='Tell us more' />
                    </View>

                    <ButtonComp btnText='Submit' btnStyle={styles.submit_btn} />
                </View>

                <View style={{
                    width: '95%', alignSelf: 'center', alignItems: 'center', flexDirection: 'row',
                    justifyContent: 'space-between', paddingVertical: verticalScale(10),
                }}>
                    <Text style={{ color: Colors.black, fontSize: scale(14), }}>View order details</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('TRACKDETAIL')}>
                        <Image source={ImagePath.right_icon} resizeMode='contain'
                            style={{ height: verticalScale(20), width: moderateScale(20), tintColor: Colors.black }} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    width: '95%', alignSelf: 'center', alignItems: 'center', flexDirection: 'row',
                    justifyContent: 'space-between', borderTopWidth: scale(1), borderColor: Colors.border_greay,
                    paddingVertical: verticalScale(10), borderBottomWidth: scale(1)
                }}>
                    <Text style={{ color: Colors.black, fontSize: scale(14), }}>Download invoice</Text>

                    <TouchableOpacity>
                        <Image source={ImagePath.right_icon} resizeMode='contain'
                            style={{ height: verticalScale(20), width: moderateScale(20), tintColor: Colors.black }} />
                    </TouchableOpacity>
                </View>

                <View style={{ width: '95%', alignSelf: 'center', marginVertical: verticalScale(10) }}>
                    <SemiHeadingRow_comp semiheadingText='Best Selling' seeallText='see all' />

                    <View style={{ marginTop: verticalScale(5) }}>
                        <ProductList shownData={BestSelling_Data} />
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
    submit_btn: {
        width: '100%',
        marginTop: verticalScale(10),
        marginBottom: verticalScale(5)
    }
});

export default OrderDetail;
