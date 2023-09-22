import {StyleSheet} from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../../CONSTANT/Colors';



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cover_image:{
        width:'100%',
        height:'100%',
        borderWidth:scale(0.1)
    },
    logo_view:{
        justifyContent:'center',
        alignItems:'center'
    },
    logo: {
        height: moderateVerticalScale(70),
        width: moderateScale(70),
        alignSelf: 'center',
        borderRadius: scale(100),
        backgroundColor: Colors.white,
        position: 'absolute',
        
    },
    bottom_view: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: verticalScale(50)
    },
    heading_text: {
        color: Colors.black,
        fontWeight: '600',
        fontSize:scale(20)
    },
    lorem_text: {
        color: Colors.black,
        fontSize:scale(14)
    },
    circle_view: {
        flexDirection: 'row',
        marginTop: verticalScale(15)
    },
    circle: {
        height: moderateScale(11),
        width: moderateScale(11),
        borderRadius: scale(20),
        marginHorizontal: moderateScale(10),
        backgroundColor: Colors.lite_orange
    },
     btn:{
       position:'absolute',
       bottom:verticalScale(10),
       alignSelf:'center'
     },
     btnStyle: {
        height: moderateScale(46),
        width:'90%',
        backgroundColor: Colors.green,
        borderRadius: moderateScale(4),
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        bottom:verticalScale(10),
        alignSelf:'center'
        
    },
    btnText: {
        fontSize: scale(18),
        color:Colors.white,
        fontWeight: '400',

    }


});
export default styles;
