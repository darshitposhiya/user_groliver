import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity,Pressable } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../CONSTANT/Colors';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import ImagePath from '../CONSTANT/ImagePath';


const ProductList = ({
    shownData,
    discountImage
    //onPress
}) => {

    const navigation = useNavigation();

    return (
        <>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={shownData}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.productlist_view}>
                            <View style={{alignSelf:'center',alignItems:'center' }}>
                                <Image source={item.image} resizeMode='contain' style={styles.product_image} />
                            </View>

                            <Text style={styles.product_name}>{item.name}</Text>
                            <Text style={{ fontSize: scale(12),color:Colors.font_greay }}>{item.quantity}</Text>

                            <View style={styles.rating_view}>
                                <Image source={item.ratingImage} resizeMode='contain' style={styles.rating_icon} />
                                <Text style={styles.rating_text}>({item.rating})</Text>
                            </View>

                            <Text style={styles.product_pricetext}>${item.price}</Text>

                            <TouchableOpacity
                                onPressIn={() => navigation.navigate('ADDPRODUCT', {
                                    productID:item.id,
                                    productImage: item.image,
                                    productName: item.name,
                                    perpriceQuantity: item.quantity,
                                    productPrice: item.price,
                                    productDetail: item.detail,
                                    productRatingIcon: item.ratingImage,
                                    productCategory: item.category
                                })}
                                >
                                <Image source={ImagePath.add} resizeMode='contain' style={styles.addproduct_icon} />
                            </TouchableOpacity>
                        </View>
                    )
                }} />
        </>

    );
};

const styles = StyleSheet.create({
    productlist_view: {
        margin: moderateScale(5),
        borderWidth: scale(0.8),
        borderRadius: scale(10),
        padding: moderateScale(10),
        borderColor:Colors.border_greay,   
        width:moderateScale(160)     
    },
    product_image: {
        height: verticalScale(80),
        width: moderateScale(100),
        borderRadius: scale(10)
    },
    product_name: {
        marginTop: verticalScale(10),
        fontSize: scale(12),
        color: Colors.black,
        fontWeight: '600'
    },
    rating_view: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rating_icon: {
        height: verticalScale(15),
        width: moderateScale(15)
    },
    rating_text: {
        marginLeft: moderateScale(3),
        color: Colors.black,
        fontSize: scale(12)
    },
    product_pricetext: {
        fontSize: scale(12),
        fontWeight: '600',
        marginTop: verticalScale(5),
        color: Colors.black
    },
    addproduct_icon: {
        height: verticalScale(50),
        width: moderateScale(50),
        position: 'absolute',
        bottom: verticalScale(0),
        right: moderateScale(0),
        paddingVertical:verticalScale(25)
    }
});

export default ProductList;
