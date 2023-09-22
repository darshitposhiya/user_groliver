import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../../CONSTANT/Colors';
import ImagePath from '../../CONSTANT/ImagePath';
import { useNavigation } from '@react-navigation/native';
import ButtonComp from '../../COMPONENTS/ButtonComp';
import Headercomp from '../../COMPONENTS/HeaderComp';

const MyAddress = () => {

    const navigation = useNavigation();
    const [filled, setFilled] = useState('');

    return (
        <View style={styles.container}>

           <Headercomp backText='My Address' onPresss={()=>navigation.goBack()} 
           back_icon={ImagePath.back_icon} 
           headertext_style={styles.header_text}/>

            <View style={{
                flexDirection: 'row', width: '95%', alignSelf: 'center', padding: moderateScale(15),
                marginTop: verticalScale(10), borderWidth: scale(1), borderRadius: moderateScale(5),
                borderColor: Colors.border_greay, justifyContent: 'space-between', alignItems: 'center',
            }}>

                <View style={{ flexDirection: 'row', alignItems: 'center',width:'80%', }}>
                    <TouchableOpacity onPress={() => setFilled(1)}>
                        <View style={[styles.check_circle, { borderColor: filled == '1' ? Colors.green : Colors.border_greay }]}>
                            {
                                filled == '1' ? (<View style={{
                                    height: moderateScale(9),
                                    width: moderateScale(9),
                                    borderRadius: scale(20), backgroundColor: Colors.green,
                                }}>
                                </View>) : null
                            }
                        </View>
                    </TouchableOpacity>
                    <Text style={{color:Colors.black,fontSize:scale(14),marginLeft:moderateScale(10)}}>490 Lauren Drive, Madison, Wiscosin, United States.</Text>
                </View>

                <View style={{flexDirection:'row',alignItems:'center',width:'20%',justifyContent:'flex-end'}}>
                    <TouchableOpacity>
                    <Image source={ImagePath.pen} resizeMode='contain'
                    style={{height:verticalScale(22),width:moderateScale(22)}}/>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <Image source={ImagePath.deletes} resizeMode='contain'
                    style={{height:verticalScale(22),width:moderateScale(22)}}/>
                    </TouchableOpacity> 
                </View>
            </View>

            <ButtonComp btnText='Add new address' btnStyle={styles.address_btn}
            onPress={()=>navigation.navigate('ADDNEWADDRESS')}/>
        </View>
    );
};

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
    check_circle: {
        height: moderateScale(16),
        width: moderateScale(16),
        borderWidth: scale(1),
        borderRadius: scale(20),
        alignItems: 'center',
        justifyContent: 'center',
    },
    address_btn:{
        alignSelf:'center',
        width:'95%',
        position:'absolute',
        bottom:verticalScale(10)  
    }
});

export default MyAddress;
