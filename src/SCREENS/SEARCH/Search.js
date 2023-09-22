import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../../CONSTANT/Colors';
import ImagePath from '../../CONSTANT/ImagePath';
import { Search_Data } from '../../CONSTANT/Data/Product_Data';
import { useNavigation } from '@react-navigation/native';
import HorizontalProductList from '../../COMPONENTS/HorizontalProductList';

const Search = () => {

    const navigation = useNavigation();
    const [text, setText] = useState();
    const [itemList, setItemList] = useState(Search_Data);

    const clearSearch = () =>{
        setText('')
        setItemList(Search_Data)
        
    }
    const FilterList = (txt) => {
        if (txt == '') {
            setItemList(Search_Data)
        }
        else {
            let temp = Search_Data.filter(item => {
                return (item.name.toLowerCase().match(txt.toLowerCase()))
            });
            setItemList(temp)
        }
    }
 
    return (
        <View style={styles.container}>
            <View style={styles.Header_view}>
                <View>
                    <Text style={styles.header_text}>Search</Text>
                </View>
            </View>
            <View style={styles.search_view}>
                <View style={{
                    flexDirection: 'row', alignItems: 'center',
                    backgroundColor: Colors.lite_greay, width: '88%',
                    borderRadius: moderateScale(10), justifyContent: 'space-between'
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center',}}>
                        <Image source={ImagePath.search} resizeMode='contain' style={styles.search_icon} />
                        <TextInput placeholder='Search for grocery...'
                            value={text} onChangeText={(txt) => { setText(txt); FilterList(txt) }} />
                    </View>

                    <View>
                        <TouchableOpacity onPress={()=>clearSearch()}>
                            <Image source={ImagePath.close_icon} resizeMode='contain'
                                style={styles.close_icon}  />
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('FILTERPRODUCT')}>
                    <Image source={ImagePath.filter_icon} resizeMode='contain'
                        style={{ height: verticalScale(40), width: moderateScale(25) }} />
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: verticalScale(10), width: '95%', alignSelf: 'center' }}>
                <HorizontalProductList shownData={itemList} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingBottom: verticalScale(180)
    },
    Header_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
        alignSelf: 'center',
        marginVertical: verticalScale(5),
    },
    header_text: {
        fontSize: scale(25),
        fontWeight: '600',
        color: Colors.black
    },
    search_view: {
        flexDirection: 'row',
        width: '95%',
        height: verticalScale(46),
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: verticalScale(15),
        justifyContent: 'space-between'
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
    close_icon: {
        height: verticalScale(25),
        width: moderateScale(25),
        marginEnd: moderateScale(3)
    },
});

export default Search;
