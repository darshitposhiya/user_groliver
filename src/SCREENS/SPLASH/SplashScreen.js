import React, { useEffect } from 'react';
import { View, Text, StyleSheet,Image,StatusBar } from 'react-native';
import ImagePath from '../../CONSTANT/ImagePath';
import { useNavigation } from '@react-navigation/native';
import { moderateScale, scale, verticalScale, } from 'react-native-size-matters';
import Colors from '../../CONSTANT/Colors';

const SplashScreen = () => {

    const navigation= useNavigation();
    useEffect(()=>{ 

        setTimeout(()=>{
             navigation.navigate('MYPAGER')
        },3000);
    },[])
    return (
        <View style={styles.container}>
            <StatusBar barStyle='dark-content' backgroundColor={Colors.white} />
            <Image source={ImagePath.main_logo} resizeMode='contain' style={styles.logo} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    logo:{
        height:verticalScale(350),
        width:moderateScale(350),
       
    },
   
});

export default SplashScreen;
