import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import ImagePath from "../CONSTANT/ImagePath";
import Colors from '../CONSTANT/Colors';
import { useNavigation } from '@react-navigation/native';


const StoreData_Comp = ({
    onPress
}) => {
    const Store_Data = [
        {
            id: '1',
            image: ImagePath.iga_s1,
            name: 'IGA',
        },
        {
            id: '2',
            image: ImagePath.maxi_s1,
            name: 'MAXI',
        },
        {
            id: '3',
            image: ImagePath.iga_s1,
            name: 'IGA',
        },
        {
            id: '4',
            image: ImagePath.maxi_s1,
            name: 'MAXI',
        },
       
    ]

    const navigation = useNavigation();
    return (
        <>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={Store_Data} 
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity style={{      
                            padding: moderateScale(10),
                            width:moderateScale(160),
                            borderWidth:scale(1),
                            borderColor:Colors.border_greay,
                            borderRadius:moderateScale(10),
                            margin:moderateScale(5),
                            alignItems:'center'
                        }}
                            onPress={() => navigation.navigate('STOREWISEPRODUCT', { storeImage: item.image })} >
                            <View >
                                <Image source={item.image} resizeMode='contain'
                                    style={{
                                        height: verticalScale(70),
                                        width: moderateScale(100),
                                        borderRadius: scale(10)
                                    }} />

                                <Text style={{
                                    alignSelf: 'center',
                                    marginTop: verticalScale(10),
                                    color: Colors.black,
                                    fontWeight: '600',
                                    fontSize:scale(14)
                                }}>{item.name}</Text>
                            </View>

                        </TouchableOpacity>

                    )

                }} />
        </>
    );
};

const styles = StyleSheet.create({
  
});

export default StoreData_Comp;


