import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { moderateScale, scale, verticalScale, moderateVerticalScale } from 'react-native-size-matters';
import Colors from '../../CONSTANT/Colors';
import ImagePath from '../../CONSTANT/ImagePath';
import { useNavigation } from '@react-navigation/native';
import Headercomp from '../../COMPONENTS/HeaderComp';

const Help = () => {

    const dis = "Lorem Ipsum is simply dummy text of the  printing and typesetting industry lorem Ipsum has been the industry's standerd dummy."
    const HelpData = [
        {
            id: '1',
            title: 'What is Lorem Ipsum?',
            discription: dis,
        },
        {
            id: '2',
            title: 'Why do we use it?',
            discription: dis,
        },
        {
            id: '3',
            title: 'Where does it came from?',
            discription: dis,
        },
        {
            id: '4',
            title: 'Why do we use it?',
            discription: dis,
        },
        {
            id: '5',
            title: 'Where can i get some?',
            discription: dis,
        },
        {
            id: '6',
            title: 'Why do we use it?',
            discription: dis,
        },
        {
            id: '7',
            title: 'Where does it came from?',
            discription: dis,
        },
    ]
    const navigation = useNavigation();
    const [show, setShow] = useState();

    return (
        <View style={styles.container}>

            <Headercomp backText='Help' onPresss={() => navigation.goBack()}
                back_icon={ImagePath.back_icon}
                headertext_style={styles.header_text} />

            <View style={styles.upper_image_view}>
                <Image source={ImagePath.main_logo} resizeMode='contain'
                    style={styles.logo_image} />
            </View>

            <View style={{ flex: 3 }}>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={HelpData}
                    renderItem={({ item }) => {
                        return (
                            <View style={{
                                paddingVertical: verticalScale(10),
                                width: '95%',
                                alignSelf: 'center',
                                borderBottomWidth: scale(1),
                                borderColor: Colors.border_greay
                            }}>

                                <View style={{
                                    flexDirection: 'row',
                                    width: '100%',
                                    alignSelf: 'center',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: moderateScale(2)
                                }}>
                                    <Text style={{ color: Colors.font_greay }}>{item.title}</Text>

                                    <TouchableOpacity onPress={() => setShow(item.id)} >
                                        <View style={{
                                            height: moderateVerticalScale(20),
                                            width: moderateScale(20),
                                            borderRadius: moderateScale(50),
                                            borderWidth: scale(1),
                                            borderColor: Colors.border_greay,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: Colors.green,
                                        }}>
                                            {
                                                show == item.id ? (
                                                    <Image source={ImagePath.up} resizeMode='contain'
                                                        style={styles.up_down_icon} />
                                                ) :
                                                    (
                                                        <Image source={ImagePath.down} resizeMode='contain'
                                                            style={styles.up_down_icon} />
                                                    )
                                            }

                                        </View>
                                    </TouchableOpacity>

                                </View>
                                {
                                    show == item.id ? (
                                        <View style={{
                                            width: '90%',
                                            alignSelf: 'center',
                                            backgroundColor: Colors.lite_greay,
                                            borderRadius: moderateScale(5),
                                            marginVertical: verticalScale(10),
                                            padding: moderateScale(10)
                                        }}>
                                            <Text style={{ color: Colors.black, fontSize: scale(12) }}>{item.discription}</Text>
                                        </View>
                                    ) : null
                                }

                            </View>
                        )
                    }} />

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    header_text: {
        fontSize: scale(18),
        color: Colors.black,
        fontWeight: '400'
    },
    upper_image_view: {
        flex: 1,
        marginTop: verticalScale(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo_image: {
        height: verticalScale(150),
        width: moderateScale(150)
    },
    up_down_icon: {
        height: verticalScale(20),
        width: moderateScale(20),
        tintColor: 'white'
    }
});

export default Help;
