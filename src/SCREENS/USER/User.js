import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import ImagePath from '../../CONSTANT/ImagePath';
import Colors from '../../CONSTANT/Colors';
import { useNavigation } from '@react-navigation/native';

const User = () => {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.Header_view}>
                <Text style={styles.header_text}>Profile</Text>
            </View>

            <View style={{
                width: '95%', alignSelf: 'center', alignItems: 'center', flexDirection: 'row',
                marginTop: verticalScale(15)
            }}>
                <View style={{borderRadius:moderateScale(100),backgroundColor:Colors.border_greay }}>
                    <Image source={ImagePath.user} resizeMode='contain'
                        style={{ height: verticalScale(50), width: moderateScale(50), }} />
                </View>
                <View style={{ marginLeft: moderateScale(5) }}>
                    <Text style={{ color: Colors.black, fontSize: scale(16), fontWeight: '600' }}>John wade</Text>
                    <Text style={{ color: Colors.black, fontSize: scale(12) }}>+1 23456789</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('EDITPROFILE')}>
                    <Image source={ImagePath.pen} resizeMode='contain'
                        style={{
                            height: verticalScale(20), width: moderateScale(20),
                            marginBottom: verticalScale(20)
                        }} />
                </TouchableOpacity>
            </View>

            <View style={{ width: '95%', alignSelf: 'center', marginTop: verticalScale(10) }}>
                <UserMenu menuIcon={ImagePath.order_bag} menuName='My Orders' onPress={() => navigation.navigate('MYORDERS')} />
                <UserMenu menuIcon={ImagePath.address} menuName='My Address' onPress={() => navigation.navigate('MYADDRESS')} />
                <UserMenu menuIcon={ImagePath.notification} menuName='Notifications' onPress={() => navigation.navigate('NOTIFICATION')} />
                <UserMenu menuIcon={ImagePath.pay_method} menuName='Payment Methods' onPress={() => navigation.navigate('PAYMENTMETHOD')} />
                <UserMenu menuIcon={ImagePath.pay_history} menuName='Payment History' onPress={() => navigation.navigate('PAYMENTHISTORY')} />
                <UserMenu menuIcon={ImagePath.help} menuName='Help' onPress={() => navigation.navigate('HELP')} />
                <UserMenu menuIcon={ImagePath.logout} menuName='Logout' onPress={()=>navigation.navigate('LOGIN')} />
            </View>
        </View>
    );
};

const UserMenu = ({
    menuIcon,
    menuName,
    onPress
}) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
        <View style={{
            flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
            paddingVertical: verticalScale(10)
        }}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={menuIcon} resizeMode='contain'
                    style={{ height: verticalScale(25), width: moderateScale(25) }} />
                <Text style={{ marginLeft: moderateScale(5), color: Colors.black, fontSize: scale(14) }}>{menuName}</Text>
            </View>

            <TouchableOpacity onPress={onPress}>
                <Image source={ImagePath.right_icon} resizeMode='contain'
                    style={{ height: verticalScale(20), width: moderateScale(20), tintColor:Colors.font_greay }} />
            </TouchableOpacity>
        </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
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
});

export default User;
