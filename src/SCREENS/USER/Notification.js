import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../../CONSTANT/Colors';
import ImagePath from '../../CONSTANT/ImagePath';
import { useNavigation } from '@react-navigation/native';
import Headercomp from '../../COMPONENTS/HeaderComp';

const Notification = () => {

    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
           
           <Headercomp backText='Notifications' onPresss={()=>navigation.goBack()} 
           back_icon={ImagePath.back_icon} 
           headertext_style={styles.header_text}/>

            <View style={{marginBottom:verticalScale(60),marginTop:verticalScale(10),width:'95%',alignSelf:'center'}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Notification_comp/>
                <Notification_comp/>
                <Notification_comp/>
                <Notification_comp/>
                <Notification_comp/>
                <Notification_comp/>
                <Notification_comp/>
                <Notification_comp/>
            </ScrollView>
            </View>     

        </View>
    );
};

const Notification_comp = () => {
    return (
        <View style={{ width: '100%', alignSelf: 'center',alignItems:'center', borderBottomWidth: scale(0.6), borderBottomColor: Colors.font_greay }}>
            <View style={{
                flexDirection: 'row', alignItems: 'center', paddingVertical: verticalScale(10),
                width: '100%', alignSelf: 'center'
            }}>
                <View>
                    <Image source={ImagePath.main_logo} resizeMode='contain'
                        style={{ height: verticalScale(50), width: moderateScale(40), borderWidth: 1, borderColor: 'black' }} />
                </View>

                <View style={{ marginLeft: moderateScale(10),marginRight:moderateScale(5) }}>
                    <Text style={{ color: Colors.black, fontSize: scale(14) }}>Lorem ipsum is simply dummy text of the printing.</Text>
                    <Text style={{ color: Colors.black, fontSize: scale(10), marginTop: 5 }}>2 hour ago</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    header_text:{
        fontSize: scale(18),
         color: Colors.black ,
         fontWeight:'400'
     },
});

export default Notification;
