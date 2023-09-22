import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native';
import { verticalScale, moderateScale, scale } from 'react-native-size-matters';
import Colors from '../../CONSTANT/Colors';
import ImagePath from '../../CONSTANT/ImagePath';
import { useNavigation, useRoute } from '@react-navigation/native';
import Headercomp from '../../COMPONENTS/HeaderComp';
import SemiHeadingRow_comp from '../../COMPONENTS/SemiHeadingRow_Comp';
import {ExclusiveOffer_Data} from '../../CONSTANT/Data/Product_Data';


const StoreWiseProduct = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const { storeImage } = route.params;

    return (
        <View style={styles.container}>
            <Headercomp onPresss={() => navigation.goBack()}
                back_icon={ImagePath.back_icon} back_image={storeImage} />

            <View>
                <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
                    <View style={{
                        width: '95%', alignSelf: 'center', marginVertical: verticalScale(10),
                        paddingBottom: 80
                    }}>
                        <View style={styles.banner_view}>
                            <Image source={ImagePath.vegetable_banner} resizeMode='stretch'
                                style={styles.banner_image} />
                        </View>
                        <View style={{ marginTop: verticalScale(10) }}>
                            <SemiHeadingRow_comp semiheadingText='Exclusive Offers' />
                        </View>

                        <StoreWiseProduct_Compo shownData={ExclusiveOffer_Data} />
                        <StoreWiseProduct_Compo shownData={ExclusiveOffer_Data} />

                    </View>
                </ScrollView>
            </View>

        </View>
    );
};

const StoreWiseProduct_Compo = ({
    shownData
}) => {
    return (
        <>
            <View style={{ marginTop: verticalScale(10) }}>
                <FlatList
                    numColumns={2}
                    data={shownData}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.productlist_view} >
                                <View style={{ paddingHorizontal: moderateScale(14) }}>
                                    <Image source={item.image} resizeMode='contain' style={styles.product_image} />
                                </View>

                                <Text style={styles.product_name}>{item.name}</Text>
                                <Text style={{ fontSize: scale(12) }}>{item.quantity}</Text>

                                <View style={styles.rating_view}>
                                    <Image source={item.ratingImage} resizeMode='contain' style={styles.rating_icon} />
                                    <Text style={styles.rating_text}>({item.rating})</Text>
                                </View>

                                <Text style={styles.product_pricetext}>${item.price}</Text>
                                <Image source={ImagePath.discount} resizeMode='contain' style={styles.addproduct_icon} />
                            </View>
                        )
                    }} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    banner_view: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    banner_image: {
        height: verticalScale(100),
        width: '100%',
        borderRadius: scale(10)
    },
    //component
    productlist_view: {
        margin: moderateScale(5),
        borderWidth: scale(0.8),
        borderRadius: scale(10),
        padding: moderateScale(10),
        borderColor: Colors.border_greay,
        width:'47%'
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
        bottom: verticalScale(10),
        right: moderateScale(10)
    }
});

export default StoreWiseProduct;
