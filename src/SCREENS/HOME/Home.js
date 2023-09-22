import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, } from 'react-native';
import ImagePath from '../../CONSTANT/ImagePath';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import StoreData_Comp from '../../COMPONENTS/StoreData_Comp';
import SemiHeadingRow_comp from '../../COMPONENTS/SemiHeadingRow_Comp';
import ProductList from '../../COMPONENTS/ProductList';
import { BestSelling_Data, FruitVegetable_Data} from '../../CONSTANT/Data/Product_Data';
import Colors from '../../CONSTANT/Colors';
import { useNavigation } from '@react-navigation/native';



const Home = ({onSearch}) => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.Header_view}>
                <Text style={styles.header_text}>Hello, John</Text>
                <TouchableOpacity onPress={() => navigation.navigate('CART')}>
                    <Image source={ImagePath.shopping_cart} resizeMode='contain' style={styles.cart_icon} />
                </TouchableOpacity>
            </View>

            <View style={styles.address_view}>
                <View style={{ flexDirection: 'row', width: '80%', }}>
                    <Image source={ImagePath.location} resizeMode='contain' style={styles.location_icon} />
                    <Text style={styles.address_text}>
                        490 Lauren Darive, Madison, Wiscosin, United States </Text>
                </View>
                <View style={styles.rightIcon_view}>
                    <TouchableOpacity>
                        <Image source={ImagePath.right_icon} resizeMode='contain' style={styles.right_icon} />
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity onPress={()=>onSearch()}>
                <View style={styles.search_view}>
                    <Image source={ImagePath.search} resizeMode='contain' style={styles.search_icon} />
                    <Text style={styles.search_text}>Search for grocery...</Text>
                </View>
            </TouchableOpacity>

            <View>
                <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>

                    <View style={styles.banner_view}>
                        <Image source={ImagePath.vegetable_banner} resizeMode='stretch' style={styles.banner_image} />
                    </View>

                    <View style={styles.popularStore_view}>
                        <Text style={styles.popularStore_text}>Popular Stores</Text>
                        <View style={{ marginVertical: verticalScale(10) }}>
                            {/* Stor component*/}
                            <StoreData_Comp />
                        </View>

                        {/* Exclusive Offer Text Row*/}
                        <SemiHeadingRow_comp semiheadingText='Exclusive Offers' seeallText='see all' />

                        <View style={{ marginVertical: verticalScale(10) }}>
                            {/* Exclusive Offer component*/}
                            <ProductList shownData={FruitVegetable_Data}/>
                        </View>

                        {/* Best Selling Offer Text Row*/}
                        <SemiHeadingRow_comp semiheadingText='Best Selling' seeallText='see all' />

                        <View style={{ marginVertical: verticalScale(10) }}>
                            {/* Best Selling  component*/}
                           <ProductList shownData={BestSelling_Data}/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingBottom: verticalScale(220)
    },
    Header_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
        alignSelf: 'center',
        marginVertical: verticalScale(5)
    },
    header_text: {
        fontSize: scale(25),
        fontWeight: '600',
        color: Colors.black
    },
    cart_icon: {
        height: verticalScale(30),
        width: moderateScale(30)
    },
    address_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
        alignSelf: 'center',
        marginTop: verticalScale(15)
    },
    location_icon: {
        height: verticalScale(30),
        width: moderateScale(30)
    },
    address_text: {
        fontSize: scale(14),
        color: Colors.black
    },
    rightIcon_view: {
        backgroundColor: Colors.lite_orange,
        padding: moderateScale(5),
        borderRadius: scale(4),
        alignItems: 'center',
        justifyContent: 'center'
    },
    right_icon: {
        height: verticalScale(20),
        width: moderateScale(20),
    },
    search_view: {
        flexDirection: 'row',
        width: '95%',
        height: verticalScale(45),
        marginTop: verticalScale(10),
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: Colors.lite_greay,
        borderRadius: moderateScale(5)
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
    banner_view: {
        flexDirection: 'row',
        width: '95%',
        alignSelf: 'center',
        marginTop: verticalScale(10)
    },
    banner_image: {
        height: verticalScale(100),
        width: '100%',
        borderRadius: scale(10)
    },
    popularStore_view: {
        width: '95%',
        alignSelf: 'center',
        marginTop: verticalScale(15)
    },
    popularStore_text: {
        color: Colors.black,
        fontSize: scale(16),
        fontWeight: '600',
    },

});

export default Home;
