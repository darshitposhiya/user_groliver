import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../../CONSTANT/Colors';
import ImagePath from '../../CONSTANT/ImagePath';
import { useNavigation } from '@react-navigation/native';

const Category = ({onSearch}) => {

    const Fruit_Veg_Data = [{
        id: '1',
        catImage: ImagePath.fruit_vegetable,
        catName: 'Fruits & Vegetables'
    }]

    const Oil_Ghee_Data = [{
        id: '2',
        catImage: ImagePath.oil_ghee,
        catName: 'Cooking oil & Ghee'
    }]

    const Meat_Fish_Data = [{
        id: '3',
        catImage: ImagePath.meat_fish,
        catName: 'Meat & Fish'
    }]

    const Bakery_Snacks_Data = [{
        id: '4',
        catImage: ImagePath.bakery_snacks,
        catName: 'Bakery & Snacks'
    }]

    const Dairy_Egge_Data = [{
        id: '5',
        catImage: ImagePath.dairy_eggs,
        catName: 'Dairy & Eggs'
    }]

    const Beverages_Data = [{
        id: '6',
        catImage: ImagePath.beverages,
        catName: 'Beverages'
    }]
    const navigation = useNavigation();

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => { navigation.navigate('CATEGORYWISEPRODUCT', { scategory: item.catName }) }}>
                <View style={styles.item}>
                    <Image source={item.catImage} resizeMode='contain'
                        style={styles.product_image} />
                    <Text style={styles.product_name}>{item.catName}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>

            <View style={styles.Header_view}>
                <Text style={styles.header_text}>Category</Text>
            </View>

            <TouchableOpacity onPress={()=>onSearch()}>
                <View style={styles.search_view}>
                    <Image source={ImagePath.search} resizeMode='contain' style={styles.search_icon} />
                    <Text style={styles.search_text}>Search for grocery...</Text>
                </View>
            </TouchableOpacity>

            <View style={{ marginTop: verticalScale(10),marginBottom:verticalScale(175) }}>
                <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
                    <View style={styles.cat_container}>
                        <View style={styles.con2}>

                            <FlatList
                                data={Fruit_Veg_Data}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                                style={{ ...styles.list, ...styles.veg_card }}
                            />
                            <FlatList
                                data={Oil_Ghee_Data}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                                style={{ ...styles.list, ...styles.oil_card }}
                            />
                        </View>

                        <View style={styles.con2}>
                            <FlatList
                                data={Meat_Fish_Data}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                                style={{ ...styles.list, ...styles.meat_card }}
                            />
                            <FlatList
                                data={Bakery_Snacks_Data}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                                style={{ ...styles.list, ...styles.bakery_card }}
                            />
                        </View>

                        <View style={styles.con2}>
                            <FlatList
                                data={Dairy_Egge_Data}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                                style={{ ...styles.list, ...styles.dairy_card }}
                            />
                            <FlatList
                                data={Beverages_Data}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                                style={{ ...styles.list, ...styles.beverages_card }}
                            />
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
        backgroundColor: Colors.white
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
        height: verticalScale(45),
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: Colors.lite_greay,
        borderRadius: moderateScale(10),
        marginTop: verticalScale(15),
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
    product_image: {
        height: verticalScale(100),
        width: moderateScale(80),
        alignSelf: 'center',
    },
    product_name: {
        marginVertical: verticalScale(10),
        fontSize: scale(12),
        color: Colors.black,
        alignSelf: 'center'
    },
    veg_card: {
        backgroundColor: 'rgba(186, 247, 202,0.3)',
        borderColor: 'rgba(28,117,51,1)'
    },
    oil_card: {
        backgroundColor: 'rgba(242, 180, 80,0.3)',
        borderColor: 'rgba(242, 152, 7,1)'
    },
    meat_card: {
        backgroundColor: 'rgba(245, 176, 182,0.3)',
        borderColor: 'rgba(242, 82, 96,1)'
    },
    bakery_card: {
        backgroundColor: 'rgba(212, 157, 245,0.3)',
        borderColor: 'rgba(140, 4, 222,1)',
    },
    dairy_card: {
        backgroundColor: 'rgba(242, 250, 210,0.3)',
        borderColor: 'rgba(209, 208, 125,1)'
    },
    beverages_card: {
        backgroundColor: 'rgba(179, 198, 242,0.3)',
        borderColor: 'rgba(39, 101, 245,1)'
    },
    cat_container: {
        flexDirection: 'column',
        width: '95%',
        alignSelf: 'center',
    },
    con2: {
        flexDirection: 'row',
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
    },
    list: {
        margin: moderateScale(5),
        borderWidth: scale(0.8),
        borderRadius: scale(10),
        alignSelf: 'center',
    },
    item: {
        paddingVertical: verticalScale(10),
        paddingHorizontal:moderateScale(3),
        width: moderateScale(130),
        alignSelf:'center', 
   
    },
});

export default Category;
