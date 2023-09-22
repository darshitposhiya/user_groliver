import React, { useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PagerView from 'react-native-pager-view';
import FreshItems from './FreshItems';
import BestQuality from './BestQuality';
import FastDelivery from './FastDelivery';
import { useNavigation } from '@react-navigation/native';
import Login from '../LOGIN/Login';
import ButtonComp from '../../COMPONENTS/ButtonComp';
import styles from './Styles';

const MyPager = () => {
    const navigation = useNavigation();
    const ref = useRef();
    console.log(ref.current, 'my')
    return (
        <PagerView style={{ flex: 1 }} initialPage={0} ref={ref} >
            <View key="1">
                <FreshItems onPress={() => ref.current?.setPage(1)} />
            </View>
            <View key="2">
                <BestQuality onPress={() => ref.current?.setPage(2)} />
            </View>
            <View key="3">
                <FastDelivery onPress={() => navigation.navigate('LOGIN')} />
            </View>
        </PagerView>

    );
};



export default MyPager;
