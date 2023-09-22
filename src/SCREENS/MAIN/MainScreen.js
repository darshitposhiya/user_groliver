import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import Home from '../HOME/Home';
import Category from '../CATEGORY/Category';
import Search from '../SEARCH/Search';
import WhishList from '../WHISHLIST/WhishList';
import User from '../USER/User';
import ImagePath from '../../CONSTANT/ImagePath';
import Colors from '../../CONSTANT/Colors';

const MainScreen = () => {

    const [selectedTab, setSlectedTab] = useState('');

    return (
        <View style={styles.container}>
            {selectedTab == 0 ? (<Home onSearch={()=>setSlectedTab(2)} />)
                : selectedTab == 1 ? (<Category onSearch={()=>setSlectedTab(2)}/>)
                    : selectedTab == 2 ? (<Search />)
                        : selectedTab == 3 ? (<WhishList />)
                            : selectedTab == 4 ? (<User />)
                                : null}
            <View style={styles.bottomTabs}>
                <TouchableOpacity style={styles.tab} onPress={() => setSlectedTab(0)}>
                    <View style={[{ borderRadius: moderateScale(5), backgroundColor: selectedTab == 0 ? Colors.lite_orange : null }]}>
                        <Image source={ImagePath.home} resizeMode='contain'
                            style={[styles.tabIcon,
                            { tintColor: selectedTab == 0 ? Colors.orange : null }]} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tab} onPress={() => setSlectedTab(1)}>
                    <View style={[{ borderRadius: moderateScale(5), backgroundColor: selectedTab == 1 ? Colors.lite_orange : null }]}>
                        <Image source={ImagePath.category} resizeMode='contain'
                            style={[styles.tabIcon,
                            { tintColor: selectedTab == 1 ? Colors.orange : null }]} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tab} onPress={() => setSlectedTab(2)}>
                    <View style={[{ borderRadius: moderateScale(5), backgroundColor: selectedTab == 2 ? Colors.lite_orange : null }]}>
                        <Image source={ImagePath.search} resizeMode='contain'
                            style={[styles.tabIcon,
                            { tintColor: selectedTab == 2 ? Colors.orange : null }]} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tab} onPress={() => setSlectedTab(3)}>
                    <View style={[{ borderRadius: moderateScale(5), backgroundColor: selectedTab == 3 ? Colors.lite_orange : null }]}>
                        <Image source={ImagePath.whish} resizeMode='contain'
                            style={[styles.tabIcon,
                            { tintColor: selectedTab == 3 ? Colors.orange : null }]} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tab} onPress={() => setSlectedTab(4)}>
                    <View style={[{ borderRadius: moderateScale(5), backgroundColor: selectedTab == 4 ? Colors.lite_orange : null }]}>
                        <Image source={ImagePath.user} resizeMode='contain'
                            style={[styles.tabIcon,
                            { tintColor: selectedTab == 4 ? Colors.orange : null }]} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );

};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bottomTabs: {
        width: '100%',
        height: verticalScale(60),
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: Colors.white,
        position: 'absolute',
        bottom: 0,
    },
    tab: {
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabIcon: {
        width: moderateScale(25),
        height: verticalScale(25),
        margin: moderateScale(5)
    },

});


export default MainScreen;
