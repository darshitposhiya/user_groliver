import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../../CONSTANT/Colors';
import Headercomp from '../../COMPONENTS/HeaderComp';
import ImagePath from '../../CONSTANT/ImagePath';
import SemiHeadingRow_comp from '../../COMPONENTS/SemiHeadingRow_Comp';
import ProductList from '../../COMPONENTS/ProductList';
import ButtonComp from '../../COMPONENTS/ButtonComp';
import { AddToCart } from '../../REDUX/CartSlice';
import { AddToFavorurite } from '../../REDUX/FavoruriteSlice';
import { OilGhee_Data, FruitVegetable_Data, MeatFish_Data, BakerySnacks_Data, DairyEggs_Data, Beverages_Data } from '../../CONSTANT/Data/Product_Data';

const AddProduct = () => {

    const route = useRoute();
    const { productID, productImage, productName, perpriceQuantity, productPrice,
        productDetail, productRatingIcon, productCategory } = route.params;

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    const [wishfilled, setWhishFilled] = useState(true);

    if (count < 1) { setCount(1) }
    const product_Price = productPrice * count;

    const Cart = () => {

        dispatch(AddToCart(
            {
                productId: productID,
                name: productName,
                detail: productDetail,
                image: productImage,
                price: productPrice,
               perprice_qty: perpriceQuantity,
                ratingicon: productRatingIcon,
                quantity:count
            }
        ));

         navigation.navigate('CART')
    };

    const AddToFavorurites = () => {

        dispatch(AddToFavorurite({
            productId: productID,
            name: productName,
            image: productImage,
            price: productPrice,
            perprice_qty: perpriceQuantity,
            quantity:count,

        }))

    }


    return (
        <View style={styles.container}>
            <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
                <View style={{
                    backgroundColor: Colors.lite_greay, borderBottomLeftRadius: scale(10),
                    borderBottomRightRadius: scale(10), paddingBottom: verticalScale(10)
                }}>
                    <Headercomp onPresss={() => navigation.goBack()} back_icon={ImagePath.back_icon} />
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={productImage} resizeMode='contain'
                            style={{ height: verticalScale(150), width: moderateScale(150), }} />
                    </View>
                </View>

                <View style={{ width: '95%', alignSelf: 'center' }}>
                    <View style={styles.Header_view}>
                        <View>
                            <Text style={styles.header_text}>{productName}</Text>
                            <Text style={{ fontSize: scale(12),color:Colors.font_greay }}>{perpriceQuantity}</Text>
                        </View>

                        <TouchableOpacity onPress={() => { setWhishFilled(!wishfilled), AddToFavorurites() }}>
                            <Image source={wishfilled ? ImagePath.whish : ImagePath.whish_filled}
                                resizeMode='contain'
                                style={styles.whish_icon} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.productquantity_view}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => setCount(count - 1)} >
                                <Text style={{ fontSize: scale(20), color: Colors.black }}> - </Text>
                            </TouchableOpacity>

                            <View style={{
                                borderWidth: scale(1), borderRadius: moderateScale(5),
                                paddingHorizontal: moderateScale(10),
                                marginHorizontal: moderateScale(10),
                                paddingVertical: verticalScale(5)
                            }}>
                                <Text style={{ color: Colors.black, fontSize: scale(16) }} >{count}</Text>
                            </View>

                            <TouchableOpacity onPress={() => setCount(count + 1)} >
                                <Text style={{ fontSize: scale(20), color: count ? Colors.green : Colors.black }}> + </Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={{ fontSize: scale(20), color: Colors.black, fontWeight: '600' }}>${product_Price}</Text>
                        </View>
                    </View>

                    {/* Horizontal Row */}
                    <HorizontalRow />

                    <View style={{ justifyContent: 'center', marginTop: verticalScale(10) }}>
                        <Text style={{ fontSize: scale(16), color: Colors.black, fontWeight: '600' }}>Product Detail</Text>
                        <Text style={{ fontSize: scale(12), color: Colors.font_greay, }}>{productDetail}</Text>
                    </View>

                    {/* Horizontal Row */}
                    <HorizontalRow />

                    <View style={styles.productquantity_view}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: scale(16), color: Colors.black, fontWeight: '600' }}>
                                Rating and Reviews
                            </Text>
                        </View  >

                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: scale(12), color: Colors.black, }}>4</Text>
                            <Image source={productRatingIcon} resizeMode='contain'
                                style={{ height: verticalScale(15), width: moderateScale(15) }} />
                            <Text style={{ marginHorizontal: moderateScale(2) }}>|</Text>
                            <Text style={{ fontSize: scale(12), color: Colors.black, }}>23 Reviews</Text>

                            <TouchableOpacity onPress={() => navigation.navigate('RATINGREVIEW')}>
                                <Image source={ImagePath.right_icon} resizeMode='contain'
                                    style={{ height: verticalScale(20), width: moderateScale(20), tintColor: Colors.black }} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Horizontal Row */}
                    <HorizontalRow />

                    <View style={{ marginTop: verticalScale(10), justifyContent: 'center' }}>
                        <Text style={{ fontSize: scale(14), color: Colors.black, fontWeight: '600' }}>Sold by
                            <Text style={{ color: Colors.orange }}> SuperComNet</Text></Text>
                        <Text style={{ fontSize: scale(12),color:Colors.font_greay }}>Delivered By</Text>
                        <Text style={{ fontSize: scale(14), color: Colors.black }}>Tomorrow, Tuesday</Text>
                    </View>

                    {/* Horizontal Row */}
                    <HorizontalRow />

                    {/* similar product */}
                    <View style={{ marginTop: verticalScale(10) }}>
                        <SemiHeadingRow_comp semiheadingText='Similar Products' seeallText='See all' />

                        {/* similar product component */}
                        <View style={{ marginTop: verticalScale(10) }}>
                            {
                                productCategory == 'Fruits & Vegetables' ? <ProductList shownData={FruitVegetable_Data} /> :
                                    productCategory == 'Cooking oil & Ghee' ? <ProductList shownData={OilGhee_Data} /> :
                                        productCategory == 'Meat & Fish' ? <ProductList shownData={MeatFish_Data} /> :
                                            productCategory == 'Bakery & Snacks' ? <ProductList shownData={BakerySnacks_Data} /> :
                                                productCategory == 'Dairy & Eggs' ? <ProductList shownData={DairyEggs_Data} /> :
                                                    productCategory == 'Beverages' ? <ProductList shownData={Beverages_Data} /> : null
                            }

                        </View>
                    </View>
                </View>

                <ButtonComp btnText='Add To Cart' btnStyle={styles.Cart_btn} onPress={() => Cart()} />
            </ScrollView>
        </View>
    );
};

{/*Horizontal Row Component */ }

const HorizontalRow = () => {
    return (
        <>
            <View style={{
                flexDirection: 'row', borderWidth: scale(0.5),
                borderColor: Colors.border_greay,
                backgroundColor: Colors.lite_greay,
                marginTop: verticalScale(10)
            }}></View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    Header_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: verticalScale(10),
    },
    header_text: {
        fontSize: scale(20),
        fontWeight: '600',
        color: Colors.black
    },
    whish_icon: {
        height: verticalScale(35),
        width: moderateScale(35)
    },
    cart_icon: {
        height: verticalScale(25),
        width: moderateScale(25),

    },
    productquantity_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: verticalScale(10),
    },
   Cart_btn: {
        alignSelf: 'center',
        width: '95%',
        marginVertical: verticalScale(10)
    }

});

export default AddProduct;

