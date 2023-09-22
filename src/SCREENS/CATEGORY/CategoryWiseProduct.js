import { useNavigation, useRoute } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../../CONSTANT/Colors';
import ImagePath from '../../CONSTANT/ImagePath';
import { OilGhee_Data, FruitVegetable_Data, MeatFish_Data, BakerySnacks_Data, DairyEggs_Data, Beverages_Data } from '../../CONSTANT/Data/Product_Data';
import HorizontalProductList from '../../COMPONENTS/HorizontalProductList';

const CategoryWiseProduct = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const { scategory } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.Header_view}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={ImagePath.back_icon} resizeMode='contain' style={styles.back_icon} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: scale(18), color: Colors.black }}>{scategory}</Text>
                </View>

                <TouchableOpacity onPress={()=>navigation.navigate('CART')}>
                    <Image source={ImagePath.shopping_cart} resizeMode='contain' style={styles.cart_icon} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.search_view}>
                <Image source={ImagePath.search} resizeMode='contain' style={styles.search_icon} />
                <Text style={styles.search_text}>Search by product name...</Text>
            </TouchableOpacity>

            <View style={{ marginTop: verticalScale(10), }}>
                <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
                    <View style={{ width: '95%', alignSelf: 'center' }}>
                        {
                            scategory == 'Cooking oil & Ghee' ? <HorizontalProductList shownData={OilGhee_Data} /> :
                                scategory == 'Fruits & Vegetables' ? <HorizontalProductList shownData={FruitVegetable_Data} /> :
                                    scategory == 'Meat & Fish' ? <HorizontalProductList shownData={MeatFish_Data} /> :
                                        scategory == 'Bakery & Snacks' ? <HorizontalProductList shownData={BakerySnacks_Data} /> :
                                            scategory == 'Dairy & Eggs' ? <HorizontalProductList shownData={DairyEggs_Data} /> :
                                                scategory == 'Beverages' ? <HorizontalProductList shownData={Beverages_Data} /> : null
                        }

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
        paddingBottom: verticalScale(110)
    },
    Header_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: verticalScale(5),
        alignSelf: 'center',
        width: '95%'
    },
    back_icon: {
        height: verticalScale(20),
        width: moderateScale(20),
    },
    header_text: {
        fontSize: scale(18),
        fontWeight: '400',
        color: Colors.black
    },
    cart_icon: {
        height: verticalScale(30),
        width: moderateScale(30),
    },
    search_view: {
        flexDirection: 'row',
        width: '95%',
        height: verticalScale(45),
        marginTop: verticalScale(15),
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

export default CategoryWiseProduct;
