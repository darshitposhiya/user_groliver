import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../../CONSTANT/Colors';
import ImagePath from '../../CONSTANT/ImagePath';
import { useNavigation } from '@react-navigation/native';
import ButtonComp from '../../COMPONENTS/ButtonComp';
import { useDispatch, useSelector } from 'react-redux';
import Headercomp from '../../COMPONENTS/HeaderComp';
import { AddToCart, ReduceProductQty, RemoveProductFromCart } from '../../REDUX/CartSlice';

const Cart = () => {

    const CartData = useSelector(state => state.cart)
    const [cartdata, setCartData] = useState([]);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    useEffect(() => {
        setCartData(CartData.data)
    }, [CartData]);

    let ProductsAmount = 0;
    for (let i = 0; i < cartdata.length; i++) {
        ProductsAmount += (cartdata[i].price * cartdata[i].quantity)
    }

    let DileveryCharge = 0;
    if (cartdata.length > 0) {
        DileveryCharge = 1;
    }
    else {
        DileveryCharge = 0;
    }

    let TotalAmount = ProductsAmount + DileveryCharge;

    return (
        <View style={styles.container}>
            <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>

                <Headercomp backText='Cart' onPresss={() => navigation.goBack()}
                    back_icon={ImagePath.back_icon}
                    headertext_style={styles.header_text} />

                <View style={{ marginTop: verticalScale(10) }}>
                    <FlatList
                        data={cartdata}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={styles.cartproduct_view}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View>
                                            <Image source={item.image} resizeMode='contain'
                                                style={styles.product_image} />
                                        </View>
                                        <View style={{ marginLeft: moderateScale(5) }}>
                                            <Text style={styles.productdetail_texts}>{item.name}</Text>
                                            <Text style={{ color: Colors.font_greay, fontSize: scale(12) }}>{item.perprice_qty}</Text>
                                            <Text style={[styles.productdetail_texts, { marginTop: verticalScale(3), fontSize: scale(12) }]}>${item.price}</Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: verticalScale(10) }}>
                                        <TouchableOpacity onPress={() => {
                                            if (item.quantity > 1) {
                                                dispatch(ReduceProductQty(item))
                                            }
                                            else {
                                                dispatch(RemoveProductFromCart(index))
                                            }
                                        }}>
                                            <Text style={styles.plus_minuse_text}> - </Text>
                                        </TouchableOpacity>

                                        <View style={styles.quantity_view}>
                                            <Text style={{ color: Colors.black, fontSize: scale(16) }} >{item.quantity}</Text>
                                        </View>

                                        <TouchableOpacity onPress={() => { dispatch(AddToCart(item)) }} >
                                            <Text style={styles.plus_minuse_text}> + </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        }} />

                </View>

                <View style={styles.bottom_view}>
                    <View style={styles.bill_view}>
                        <View style={styles.bill_rows}>
                            <Text style={[styles.bill_texts, { fontWeight: '500' }]}>Price Details</Text>
                        </View>

                        <View style={{
                            borderBottomWidth: scale(0.5),
                            padding: moderateScale(10),
                            borderColor: Colors.border_greay
                        }}>

                            <View style={styles.bill_inner_row}>
                                <Text style={styles.bill_texts}>Price ({cartdata.length} items)</Text>
                                <Text style={styles.bill_texts}>${ProductsAmount}</Text>
                            </View>

                            <View style={styles.bill_inner_row}>
                                <Text style={styles.bill_texts}>Discount</Text>
                                <Text style={styles.bill_texts}>$0.00</Text>
                            </View>

                            <View style={styles.bill_inner_row}>
                                <Text style={styles.bill_texts}>Delivery charges</Text>
                                <Text style={styles.bill_texts}>${DileveryCharge}</Text>
                            </View>

                        </View>
                        <View style={[styles.bill_rows, { borderBottomWidth: 0 }]}>
                            <Text style={[styles.bill_texts, { fontWeight: '500' }]}>Total Amount</Text>
                            <Text style={[styles.bill_texts, { fontWeight: '500' }]}>${TotalAmount}</Text>
                        </View>

                    </View>

                    <ButtonComp btnText='Checkout' btnStyle={styles.checkout_btn} />

                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    header_text: {
        fontSize: scale(18),
        color: Colors.black,
        fontWeight: '400'
    },
    cartproduct_view: {
        width: '95%',
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: verticalScale(6),
    },
    product_image: {
        height: verticalScale(50),
        width: moderateScale(50),
    },
    productdetail_texts: {
        color: Colors.black,
        fontSize: scale(16),
        fontWeight: '600'
    },
    quantity_view: {
        borderWidth: scale(1),
        borderRadius: moderateScale(5),
        paddingHorizontal: moderateScale(10),
        marginHorizontal: moderateScale(10),
        paddingVertical: verticalScale(5)
    },
    plus_minuse_text: {
        fontSize: scale(20),
        color: Colors.green
    },
    bottom_view: {
        width: '95%',
        marginVertical: verticalScale(20),
        alignSelf: 'center',
    },
    bill_view: {
        width: '100%',
        borderWidth: scale(1),
        borderRadius: moderateScale(5),
        borderColor: Colors.border_greay,
    },
    bill_rows: {
        padding: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: scale(0.5),
        borderColor: Colors.border_greay
    },
    bill_inner_row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: verticalScale(5)
    },
    bill_texts: {
        color: Colors.font_greay
    },
    checkout_btn: {
        marginTop: verticalScale(15),
        alignSelf: 'center',
        width: '100%',
    }
});

export default Cart;
