import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {hp, wp} from '../constants/utils';
import {COLORS} from '../constants/colors';

const HomeCard = ({title, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp(49),
    paddingVertical: hp(39),
    backgroundColor: COLORS.grey,
    borderRadius: 10,
    width: wp(165),
  },
  title: {
    color: COLORS.white,
    fontSize: hp(18),
    fontWeight: '500',
  },
});

export default HomeCard;
