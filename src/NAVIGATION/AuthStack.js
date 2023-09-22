import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../SCREENS/SPLASH/SplashScreen';
import MainScreen from '../SCREENS/MAIN/MainScreen';
import FreshItems from '../SCREENS/INFORMATION/FreshItems';
import BestQuality from '../SCREENS/INFORMATION/BestQuality';
import FastDelivery from '../SCREENS/INFORMATION/FastDelivery';
import Login from '../SCREENS/LOGIN/Login';
import OtpScreen from '../SCREENS/LOGIN/OtpScreen';
import AddProduct from '../SCREENS/ADDPRODUCT/AddProduct';
import RatingReview from '../SCREENS/ADDPRODUCT/RatingReview';
import StoreWiseProduct from '../SCREENS/HOME/StoreWiseProduct';
import CategoryWiseProduct from '../SCREENS/CATEGORY/CategoryWiseProduct';
import FilterProduct from '../SCREENS/SEARCH/FilterProduct';
import Cart from '../SCREENS/ADDPRODUCT/Cart';
import EditProfile from '../SCREENS/USER/EditProfile';
import MyOrders from '../SCREENS/USER/MyOrders';
import OrderDetail from '../SCREENS/USER/OrderDetail';
import TrackDetail from '../SCREENS/USER/TrackDetail';
import MyAddress from '../SCREENS/USER/MyAddress';
import AddNewAddress from '../SCREENS/USER/AddNewAddress';
import Notification from '../SCREENS/USER/Notification';
import PaymentMethod from '../SCREENS/USER/PaymentMethod';
import PaymentHistory from '../SCREENS/USER/PaymentHistory';
import Help from '../SCREENS/USER/Help';
import MyPager from '../SCREENS/INFORMATION/MyPager';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='SPLASH' component={SplashScreen} />
            <Stack.Screen name='MYPAGER' component={MyPager} />
            <Stack.Screen name='FRESHITEMS' component={FreshItems} />
            <Stack.Screen name='BESTQUALITY' component={BestQuality} />
            <Stack.Screen name='FASTDELIVERY' component={FastDelivery} />
            <Stack.Screen name='LOGIN' component={Login} />
            <Stack.Screen name='OTPSCREEN' component={OtpScreen} />
            <Stack.Screen name='MAIN' component={MainScreen} />
            <Stack.Screen name='STOREWISEPRODUCT' component={StoreWiseProduct} />
            <Stack.Screen name='CATEGORYWISEPRODUCT' component={CategoryWiseProduct} />
            <Stack.Screen name='FILTERPRODUCT' component={FilterProduct} />
            <Stack.Screen name='ADDPRODUCT' component={AddProduct} />
            <Stack.Screen name='CART' component={Cart} />
            <Stack.Screen name='RATINGREVIEW' component={RatingReview} />
            <Stack.Screen name='EDITPROFILE' component={EditProfile} />
            <Stack.Screen name='MYORDERS' component={MyOrders} />
            <Stack.Screen name='ORDERDETAIL' component={OrderDetail} />
            <Stack.Screen name='TRACKDETAIL' component={TrackDetail} />
            <Stack.Screen name='MYADDRESS' component={MyAddress} />
            <Stack.Screen name='ADDNEWADDRESS' component={AddNewAddress} />
            <Stack.Screen name='NOTIFICATION' component={Notification} />
            <Stack.Screen name='PAYMENTMETHOD' component={PaymentMethod} />
            <Stack.Screen name='PAYMENTHISTORY' component={PaymentHistory} />
            <Stack.Screen name='HELP' component={Help} />
        </Stack.Navigator>
       
    );
};


export default AuthStack;
