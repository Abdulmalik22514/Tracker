import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {hp, wp} from '../constants/utils';
import {ArrowBack} from '../assets/svg';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../constants/colors';

const Header = ({heading}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
        <ArrowBack />
      </TouchableOpacity>
      <Text style={styles.heading}>{heading}</Text>
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(18),
    justifyContent: 'space-between',
    backgroundColor: COLORS.grey,
    height: hp(70),
  },
  heading: {
    fontSize: hp(20),
    fontWeight: '500',
    color: COLORS.white,
  },
});

export default Header;
