import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Modal, Pressable } from 'react-native';
import { moderateScale, scale, verticalScale, } from 'react-native-size-matters';
import Colors from '../../CONSTANT/Colors';
import ImagePath from '../../CONSTANT/ImagePath';
import { useSelector, useDispatch } from 'react-redux';
import { Remove } from '../../REDUX/FavoruriteSlice';
import ButtonComp from '../../COMPONENTS/ButtonComp';
import { useNavigation } from '@react-navigation/native';
import { AddToCart, RemoveProductFromCart } from '../../REDUX/CartSlice';


const WhishList = () => {

    const FavProduct = useSelector(state => state.favorurite)
   // const [favProduct,setFavProduct] = useState(FavProduct.data)
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [count, setCount] = useState(1);
    const [cartdata, setCartdata] = useState([]);

    if (count < 1) { setCount(1) }

    const RemoveProduct = (index) => {

        dispatch(Remove(index))
    }

    const AddCart = () => {
        dispatch(AddToCart({
            productId: cartdata.productId,
            name: cartdata.name,
            detail:cartdata.detail,
            image: cartdata.image,
            price: cartdata.price,
            perprice_qty: cartdata.perprice_qty,
            ratingicon: cartdata.ratingicon,
            quantity: count,
        }))
        setModalVisible(!modalVisible)
    }
    let Total_Price = cartdata.price * count;

    return (
        <View style={styles.container}>
            <View style={styles.Header_view}>
                <View>
                    <Text style={styles.header_text}>Favorurite</Text>
                </View>
            </View>

            <View style={{ marginTop: verticalScale(15) }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={FavProduct.data}
                    renderItem={({ item,index }) => {
                        return (
                            <View style={{
                                width: '95%', alignSelf: 'center', alignItems: 'center', flexDirection: 'row',
                                justifyContent: 'space-between', borderBottomWidth: scale(0.4),
                                paddingVertical: verticalScale(8), 
                            }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }} key={item.productId}>
                                    <View>
                                        <Image source={item.image} resizeMode='contain'
                                            style={{ height: verticalScale(50), width: moderateScale(50), }} />
                                    </View>
                                    <View style={{ marginLeft: moderateScale(5) }}>
                                        <Text style={{ color: Colors.black, fontSize: scale(16), fontWeight: '600' }}>{item.name}</Text>
                                        <Text style={{ color: Colors.font_greay, fontSize: scale(12), }}>{item.perprice_qty}</Text>

                                        <TouchableOpacity onPress={() => RemoveProduct(index)}>
                                            <Text style={{
                                                color: 'red', fontSize: scale(12), fontWeight: '600',
                                                marginTop: verticalScale(3)
                                            }}>Remove</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View>
                                        <Text style={{ color: Colors.black, fontSize: scale(16), fontWeight: '600' }}>{item.price}</Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => { setModalVisible(!modalVisible), setCartdata(item), setCount(1) }}
                                        style={{ marginLeft: moderateScale(5) }}>
                                        <Image source={ImagePath.add} resizeMode='contain'
                                            style={{ height: verticalScale(50), width: moderateScale(50) }} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                        )
                    }} />
            </View>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>

                            {
                                !modalVisible2 ? (
                                    <View style={{ width: '100%', alignSelf: 'center' }}>
                                        <View style={styles.modelheader_view}>
                                            <View>
                                                <Text style={styles.modelheader_text}>Add to Cart</Text>
                                            </View>

                                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                                <Image source={ImagePath.modalclose_icon} resizeMode='contain'
                                                    style={styles.cart_icon} />
                                            </TouchableOpacity>
                                        </View>

                                        <View style={{
                                            width: '100%',
                                            flexDirection: 'row', borderWidth: scale(0.5),
                                            borderColor: Colors.border_greay,
                                            backgroundColor: Colors.lite_greay,
                                            marginTop: verticalScale(10)
                                        }} />

                                        {/*product*/}

                                        <View style={{
                                            width: '95%', alignSelf: 'center', alignItems: 'center', flexDirection: 'row',
                                            justifyContent: 'space-between', paddingVertical: verticalScale(10)
                                        }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                                <View>
                                                    <Image source={cartdata.image} resizeMode='contain'
                                                        style={{ height: verticalScale(50), width: moderateScale(50), }} />
                                                </View>
                                                <View style={{ marginLeft: moderateScale(5) }}>
                                                    <Text style={{ color: Colors.black, fontSize: scale(16), fontWeight: '600' }}>{cartdata.name}</Text>
                                                    <Text style={{ color: Colors.font_greay, fontSize: scale(12) }}>{cartdata.perprice_qty}</Text>
                                                </View>
                                            </View>

                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={{ color: Colors.black, fontSize: scale(16), fontWeight: '600' }}>{Total_Price}</Text>
                                            </View>
                                        </View>

                                        {/*quantity*/}

                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: verticalScale(10) }}>
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

                                        <View style={{
                                            marginTop: verticalScale(10), width: '100%',
                                            flexDirection: 'row', justifyContent: 'center'
                                        }}>
                                            <ButtonComp btnText='Add To Cart' btnStyle={styles.btn}
                                                onPress={() => { setModalVisible2(!modalVisible2) }} />
                                        </View>

                                    </View>

                                ) : (
                                    <View style={{ width: '100%', alignSelf: 'center' }}>
                                        <View style={styles.modelheader2_view}>
                                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                                <Image source={ImagePath.modalclose_icon} resizeMode='contain'
                                                    style={styles.cart_icon} />
                                            </TouchableOpacity>
                                        </View>

                                        <View style={{
                                            flexDirection: 'row', width: '60%', alignSelf: 'center',
                                            alignItems: 'center', paddingVertical: verticalScale(20)
                                        }}>
                                            <Image source={cartdata.image} resizeMode='contain'
                                                style={{ height: verticalScale(80), width: moderateScale(80), }} />
                                            <View style={styles.checkmark} />
                                            <Text style={{ color: Colors.green, fontSize: scale(16) }}>Added to Cart</Text>
                                        </View>

                                        <View style={{
                                            flexDirection: 'row', width: '95%', justifyContent: 'space-between',
                                            alignSelf: 'center', alignItems: 'center', marginTop: verticalScale(10)
                                        }}>
                                            <ButtonComp btnText='View Cart' btnStyle={styles.clear_btn} btnTextStyle={styles.clear_btn_text}
                                                onPress={() => {
                                                    navigation.navigate('CART'), setModalVisible2(!modalVisible2),
                                                    AddCart()
                                                }} />

                                            <ButtonComp btnText='Checkout' btnStyle={styles.apply_btn} btnTextStyle={styles.apply_btn_text}
                                                onPress={() => { navigation.navigate('CART') }} />
                                        </View>

                                    </View>
                                )
                            }
                        </View>
                    </View>
                </Modal>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingBottom: verticalScale(30)
    },
    Header_view: {
        flexDirection: 'row',
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
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    modalView: {
        width: '100%',
        backgroundColor: 'white',
        padding: moderateScale(5),
        borderRadius: moderateScale(10),
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modelheader_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
        alignSelf: 'center',
        paddingVertical: verticalScale(10),
    },
    modelheader2_view: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '95%',
        alignSelf: 'center',
        paddingVertical: verticalScale(5),
    },
    modelheader_text: {
        fontSize: scale(20),
        fontWeight: '600',
        color: Colors.black
    },
    cart_icon: {
        height: verticalScale(30),
        width: moderateScale(30)
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },

    checkmark: {
        transform: [{ rotateY: '40deg' }, { rotateZ: '45deg' }],
        height: verticalScale(22),
        width: moderateScale(10),
        borderBottomWidth: scale(3),
        borderRightWidth: scale(3),
        marginHorizontal: moderateScale(8),
        borderColor: Colors.green
    },
    btn: {
        width: '95%',
        alignSelf: 'center'
    },
    clear_btn: {
        width: '48%',
        backgroundColor: Colors.white,
        borderWidth: scale(1),
        borderColor: Colors.green
    },
    clear_btn_text: {
        color: Colors.green
    },
    apply_btn: {
        width: '48%',
    },
    apply_btn_text: {
        color: Colors.white
    }

});

export default WhishList;
