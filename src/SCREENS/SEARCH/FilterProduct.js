import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import ImagePath from '../../CONSTANT/ImagePath';
import Colors from '../../CONSTANT/Colors';
import { useNavigation } from '@react-navigation/native';
import ButtonComp from '../../COMPONENTS/ButtonComp';
import Headercomp from '../../COMPONENTS/HeaderComp';

const FilterProduct = () => {

    const navigation = useNavigation();
    const [filled, setFilled] = useState('');
    const [filterTitle, setFilterTitle,] = useState(false);
    const [checked, setChecked] = useState({
        Fruits: false,
        Dairy: false,
        Colddrink: false,
        Snacks: false,
        Grocery: false,
        Gourment: false,
        PersonalCare: false,
        HomeCleaning: false
    });
    const [brand, setBrand] = useState({
        CocaCola: false,
        Pepsi: false,
        RedBull: false,
        shunya: false,
        Sprite: false,
        Thumsup: false,
        Sevenup: false
    });
    const [price, setPrice] = useState({
        Less$5: false,
        $5_$20: false,
        $21_$50: false,
        $51_$100: false,
        More$1oo: false
    });
    const [size, setSize] = useState({
        Half_Kg: false,
        One_Kg: false,
        One_Liter: false,
        OneHalf_Liter: false,
        Pack_5: false,
        Pack_10: false
    });
    const [type, setType] = useState({
        SoftDrink: false,
        EnergyDrink: false
    });
    const [rating, setRating] = useState({
        Five: false,
        Four: false,
        Three: false,
        Two: false,
        One: false,
    });
    const [store, setStore] = useState({
        Any: false,
        Super_C: false,
        Maxi: false,
        IGA: false
    });

    const Clear = () => {
        setFilled(false);
        setChecked(false);
        setBrand(false);
        setPrice(false);
        setSize(false);
        setType(false);
        setRating(false);
        setStore(false);

    }

    return (
        <View style={styles.container}>

            <Headercomp backText='Filter product' onPresss={() => navigation.goBack()}
                back_icon={ImagePath.back_icon}
                headertext_style={styles.header_text} />

            <View style={{ marginTop: verticalScale(10), flexDirection: 'row', width: '100%' }}>
                <View style={{ flex: 1, backgroundColor: Colors.border_greay, paddingBottom: verticalScale(50) }}>
                    <View style={{ backgroundColor: filterTitle == '1' ? Colors.white : Colors.border_greay }}>
                        <FilterTitle titleText='Short by' onPress={() => setFilterTitle(1)} />
                    </View>

                    <View style={{ backgroundColor: filterTitle == '2' ? Colors.white : Colors.border_greay }}>
                        <FilterTitle titleText='Categories' onPress={() => setFilterTitle(2)} />
                    </View>

                    <View style={{ backgroundColor: filterTitle == '3' ? Colors.white : Colors.border_greay }}>
                        <FilterTitle titleText='Brand' onPress={() => setFilterTitle(3)} />
                    </View>

                    <View style={{ backgroundColor: filterTitle == '4' ? Colors.white : Colors.border_greay }}>
                        <FilterTitle titleText='Price' onPress={() => setFilterTitle(4)} />
                    </View>

                    <View style={{ backgroundColor: filterTitle == '5' ? Colors.white : Colors.border_greay }}>
                        <FilterTitle titleText='Size' onPress={() => setFilterTitle(5)} />
                    </View>

                    <View style={{ backgroundColor: filterTitle == '6' ? Colors.white : Colors.border_greay }}>
                        <FilterTitle titleText='Type' onPress={() => setFilterTitle(6)} />
                    </View>

                    <View style={{ backgroundColor: filterTitle == '7' ? Colors.white : Colors.border_greay }}>
                        <FilterTitle titleText='Rating' onPress={() => setFilterTitle(7)} />
                    </View>

                    <View style={{ backgroundColor: filterTitle == '8' ? Colors.white : Colors.border_greay }}>
                        <FilterTitle titleText='Store' onPress={() => setFilterTitle(8)} />
                    </View>

                </View>

                <View style={{ flex: 2, backgroundColor: Colors.white }}>
                    {
                        filterTitle == '1' ? (
                            <View style={{ padding: moderateScale(10), alignItems: 'flex-start', }}>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setFilled(1)}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_circle, { borderColor: filled == '1' ? Colors.green : Colors.border_greay }]}>
                                            {
                                                filled == '1' ? 
                                                (<View style={styles.inner_circle} />) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>Popularity</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setFilled(2)}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_circle, { borderColor: filled == '2' ? Colors.green : Colors.border_greay }]}>
                                            {
                                                filled == '2' ? 
                                                (<View style={styles.inner_circle} />) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>Price(Low To High)</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPressIn={() => setFilled(3)}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_circle, { borderColor: filled == '3' ? Colors.green : Colors.border_greay }]}>
                                            {
                                                filled == '3' ?
                                                (<View style={styles.inner_circle} />) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>Price(High TO Low)</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPressIn={() => setFilled(4)}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_circle, { borderColor: filled == '4' ? Colors.green : Colors.border_greay }]}>
                                            {
                                                filled == '4' ? 
                                                (<View style={styles.inner_circle} />) : null
                                            }

                                        </View>
                                        <Text style={styles.buttonText}>Rating</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>) : null
                    }
                    {
                        filterTitle == '2' ? (
                            <View style={{ padding: moderateScale(10), alignItems: 'flex-start', }}>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setChecked({ ...checked, Fruits: !checked.Fruits })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: checked.Fruits ? Colors.green : Colors.border_greay }]} >
                                            {
                                                checked.Fruits ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>Fruits & Vedetables</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setChecked({ ...checked, Dairy: !checked.Dairy })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: checked.Dairy ? Colors.green : Colors.border_greay }]} >
                                            {
                                                checked.Dairy ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>Dairy & breakfast</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setChecked({ ...checked, Colddrink: !checked.Colddrink })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: checked.Colddrink ? Colors.green : Colors.border_greay }]} >
                                            {
                                                checked.Colddrink ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>Cold drinks & juices</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setChecked({ ...checked, Snacks: !checked.Snacks })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: checked.Snacks ? Colors.green : Colors.border_greay }]} >
                                            {
                                                checked.Snacks ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>Snacks & Munchines</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setChecked({ ...checked, Grocery: !checked.Grocery })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: checked.Grocery ? Colors.green : Colors.border_greay }]} >
                                            {
                                                checked.Grocery ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>Grocery</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setChecked({ ...checked, Gourment: !checked.Gourment })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: checked.Gourment ? Colors.green : Colors.border_greay }]} >
                                            {
                                                checked.Gourment ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>Gourment</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setChecked({ ...checked, PersonalCare: !checked.PersonalCare })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: checked.PersonalCare ? Colors.green : Colors.border_greay }]} >
                                            {
                                                checked.PersonalCare ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>Personal Care</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setChecked({ ...checked, HomeCleaning: !checked.HomeCleaning })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: checked.HomeCleaning ? Colors.green : Colors.border_greay }]} >
                                            {
                                                checked.HomeCleaning ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>Home & Cleaning</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                        ) : null
                    }
                    {
                        filterTitle == '3' ? (
                            <View style={{ padding: moderateScale(10), alignItems: 'flex-start', }}>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setBrand({ ...brand, CocaCola: !brand.CocaCola })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: brand.CocaCola ? Colors.green : Colors.border_greay }]} >
                                            {
                                                brand.CocaCola ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>Cocal-Cola</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setBrand({ ...brand, Pepsi: !brand.Pepsi })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: brand.Pepsi ? Colors.green : Colors.border_greay }]} >
                                            {
                                                brand.Pepsi ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>Pepsi</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setBrand({ ...brand, RedBull: !brand.RedBull })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: brand.RedBull ? Colors.green : Colors.border_greay }]} >
                                            {
                                                brand.RedBull ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>RedBull</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setBrand({ ...brand, shunya: !brand.shunya })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: brand.shunya ? Colors.green : Colors.border_greay }]} >
                                            {
                                                brand.shunya ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>shunya</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setBrand({ ...brand, Sprite: !brand.Sprite })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: brand.Sprite ? Colors.green : Colors.border_greay }]} >
                                            {
                                                brand.Sprite ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>Sprite</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setBrand({ ...brand, Thumsup: !brand.Thumsup })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: brand.Thumsup ? Colors.green : Colors.border_greay }]} >
                                            {
                                                brand.Thumsup ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>Thums up</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setBrand({ ...brand, Sevenup: !brand.Sevenup })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: brand.Sevenup ? Colors.green : Colors.border_greay }]} >
                                            {
                                                brand.Sevenup ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>7UP</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        ) : null
                    }
                    {
                        filterTitle == '4' ? (
                            <View style={{ padding: moderateScale(10), alignItems: 'flex-start', }}>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setPrice({ ...price, Less$5: !price.Less$5 })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: price.Less$5 ? Colors.green : Colors.border_greay }]} >
                                            {
                                                price.Less$5 ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>Less than $5</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setPrice({ ...price, $5_$20: !price.$5_$20 })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: price.$5_$20 ? Colors.green : Colors.border_greay }]} >
                                            {
                                                price.$5_$20 ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>$5 to $20</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setPrice({ ...price, $21_$50: !price.$21_$50 })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: price.$21_$50 ? Colors.green : Colors.border_greay }]} >
                                            {
                                                price.$21_$50 ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>$21 to $50</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setPrice({ ...price, $51_$100: !price.$51_$100 })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: price.$51_$100 ? Colors.green : Colors.border_greay }]} >
                                            {
                                                price.$51_$100 ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>$51 to $100</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setPrice({ ...price, More$1oo: !price.More$1oo })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: price.More$1oo ? Colors.green : Colors.border_greay }]} >
                                            {
                                                price.More$1oo ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>More than $1oo</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                        ) : null
                    }
                    {
                        filterTitle == '5' ? (
                            <View style={{ padding: moderateScale(10), alignItems: 'flex-start', }}>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setSize({ ...size, Half_Kg: !size.Half_Kg })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: size.Half_Kg ? Colors.green : Colors.border_greay }]} >
                                            {
                                                size.Half_Kg ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>500 Gm</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setSize({ ...size, One_Kg: !size.One_Kg })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: size.One_Kg ? Colors.green : Colors.border_greay }]} >
                                            {
                                                size.One_Kg ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>1 Kg</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setSize({ ...size, One_Liter: !size.One_Liter })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: size.One_Liter ? Colors.green : Colors.border_greay }]} >
                                            {
                                                size.One_Liter ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>1 L</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setSize({ ...size, OneHalf_Liter: !size.OneHalf_Liter })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: size.OneHalf_Liter ? Colors.green : Colors.border_greay }]} >
                                            {
                                                size.OneHalf_Liter ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>1.5 L</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setSize({ ...size, Pack_5: !size.Pack_5 })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: size.Pack_5 ? Colors.green : Colors.border_greay }]} >
                                            {
                                                size.Pack_5 ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>Pack of 5</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setSize({ ...size, Pack_10: !size.Pack_10 })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: size.Pack_10 ? Colors.green : Colors.border_greay }]} >
                                            {
                                                size.Pack_10 ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>Pack of 10</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                        ) : null
                    }
                    {
                        filterTitle == '6' ? (
                            <View style={{ padding: moderateScale(10), alignItems: 'flex-start', }}>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setType({ ...type, SoftDrink: !type.SoftDrink })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: type.SoftDrink ? Colors.green : Colors.border_greay }]} >
                                            {
                                                type.SoftDrink ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>Soft drink</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setType({ ...type, EnergyDrink: !type.EnergyDrink })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: type.EnergyDrink ? Colors.green : Colors.border_greay }]} >
                                            {
                                                type.EnergyDrink ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>Energy drink</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                        ) : null
                    }
                    {
                        filterTitle == '7' ? (
                            <View style={{ padding: moderateScale(10), alignItems: 'flex-start', }}>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setRating({ ...rating, Five: !rating.Five })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: rating.Five ? Colors.green : Colors.border_greay }]} >
                                            {
                                                rating.Five ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>5</Text>
                                        <Image source={ImagePath.star} resizeMode='contain' style={styles.star_icon} />
                                        <Image source={ImagePath.star} resizeMode='contain' style={styles.star_icon} />
                                        <Image source={ImagePath.star} resizeMode='contain' style={styles.star_icon} />
                                        <Image source={ImagePath.star} resizeMode='contain' style={styles.star_icon} />
                                        <Image source={ImagePath.star} resizeMode='contain' style={styles.star_icon} />
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setRating({ ...rating, Four: !rating.Four })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: rating.Four ? Colors.green : Colors.border_greay }]} >
                                            {
                                                rating.Four ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>4</Text>
                                        <Image source={ImagePath.star} resizeMode='contain' style={styles.star_icon} />
                                        <Image source={ImagePath.star} resizeMode='contain' style={styles.star_icon} />
                                        <Image source={ImagePath.star} resizeMode='contain' style={styles.star_icon} />
                                        <Image source={ImagePath.star} resizeMode='contain' style={styles.star_icon} />
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setRating({ ...rating, Three: !rating.Three })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: rating.Three ? Colors.green : Colors.border_greay }]} >
                                            {
                                                rating.Three ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>3</Text>
                                        <Image source={ImagePath.star} resizeMode='contain' style={styles.star_icon} />
                                        <Image source={ImagePath.star} resizeMode='contain' style={styles.star_icon} />
                                        <Image source={ImagePath.star} resizeMode='contain' style={styles.star_icon} />
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setRating({ ...rating, Two: !rating.Two })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: rating.Two ? Colors.green : Colors.border_greay }]} >
                                            {
                                                rating.Two ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>2</Text>
                                        <Image source={ImagePath.star} resizeMode='contain' style={styles.star_icon} />
                                        <Image source={ImagePath.star} resizeMode='contain' style={styles.star_icon} />
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setRating({ ...rating, One: !rating.One })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: rating.One ? Colors.green : Colors.border_greay }]} >
                                            {
                                                rating.One ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>1</Text>
                                        <Image source={ImagePath.star} resizeMode='contain' style={styles.star_icon} />
                                    </View>
                                </TouchableOpacity>

                            </View>
                        ) : null
                    }
                    {
                        filterTitle == '8' ? (
                            <View style={{ padding: moderateScale(10), alignItems: 'flex-start', }}>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setStore({ ...store, Any: !store.Any })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: store.Any ? Colors.green : Colors.border_greay }]} >
                                            {
                                                store.Any ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>Any</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setStore({ ...store, Super_C: !store.Super_C })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: store.Super_C ? Colors.green : Colors.border_greay }]} >
                                            {
                                                store.Super_C ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>Super C</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setStore({ ...store, Maxi: !store.Maxi })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: store.Maxi ? Colors.green : Colors.border_greay }]} >
                                            {
                                                store.Maxi ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>Maxi</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} onPressIn={() => setStore({ ...store, IGA: !store.IGA })}>
                                    <View style={styles.filterdata_view}>
                                        <View style={[styles.check_box, { borderColor: store.IGA ? Colors.green : Colors.border_greay }]} >
                                            {
                                                store.IGA ?
                                                    (<View style={styles.checkmark}></View>) : null
                                            }
                                        </View>
                                        <Text style={styles.buttonText}>IGA</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                        ) : null
                    }
                </View>
            </View>

            <View style={{
                flexDirection: 'row', alignItems: 'center', width: '95%',
                justifyContent: 'space-between', alignSelf: 'center', position: 'absolute', bottom: verticalScale(10)
            }}>
                <ButtonComp btnText='Clear' onPress={() => Clear()}
                    btnStyle={styles.clear_btn} btnTextStyle={styles.clear_btn_text} />
                <ButtonComp btnText='Apply' onPress={() => (navigation.goBack())}
                    btnStyle={styles.apply_btn} btnTextStyle={styles.apply_btn_text} />
            </View>

        </View>
    );
};

const FilterTitle = ({
    titleText,
    onPress,
    buttonStyle
}) => {
    return (
        <>
            <TouchableOpacity style={{ ...styles.button, ...buttonStyle }} onPress={onPress} >
                <Text style={styles.filterby_text}>{titleText}</Text>
            </TouchableOpacity>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    header_text: {
        fontSize: scale(20),
        color: Colors.black,
        fontWeight: '400'
    },
    button: {
        paddingVertical: moderateScale(10),
        paddingLeft: moderateScale(5),
        alignItems: 'flex-start',
    },
    btn1: {
        backgroundColor: Colors.green,
    },
    filterby_text: {
        color: Colors.black,
        fontSize: scale(16),
        paddingLeft: moderateScale(10),
    },
    buttonText: {
        color: Colors.black,
        fontSize: scale(16),
        paddingLeft: moderateScale(10),
        paddingRight: moderateScale(5)
    },
    filterdata_view: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: verticalScale(10),
    },
    check_circle: {
        height: moderateScale(17),
        width: moderateScale(17),
        borderWidth: scale(1),
        borderRadius: scale(30),
        alignItems: 'center',
        justifyContent: 'center',
    },
    inner_circle:{
        height: moderateScale(10),
        width: moderateScale(10),
        borderRadius: scale(20),
         backgroundColor: Colors.green,
    },
    check_box: {
        height: moderateScale(17),
        width: moderateScale(17),
        borderWidth: scale(1),
        alignItems: 'center',
        justifyContent: 'center',

    },
    checkmark: {
        transform: [{ rotateY: '40deg' }, { rotateZ: '45deg' }],
        height: verticalScale(14),
        width: moderateScale(6),
        borderBottomWidth: scale(1.5),
        borderRightWidth: scale(1.5),
        marginLeft: moderateScale(1),
        marginBottom: verticalScale(2),
        borderColor: Colors.green
    },
    star_icon: {
        height: verticalScale(15),
        width: moderateScale(15)
    },
    clear_btn: {
        width: '48%',
        backgroundColor: Colors.white,
        borderWidth: scale(1)
    },
    clear_btn_text: {
        color: Colors.black
    },
    apply_btn: {
        width: '48%',
    },
    apply_btn_text: {
        color: Colors.white
    }
});

export default FilterProduct;
