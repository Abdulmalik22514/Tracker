import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {hp, wp} from '../constants/utils';
import {COLORS} from '../constants/colors';

const CustomButton = ({onPress, title, style}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.container, style]}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.orange,
    height: hp(50),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp(41),
    marginTop: hp(90),
    borderRadius: 10,
  },
  buttonTitle: {
    color: COLORS.white,
    fontSize: hp(17),
  },
});

export default CustomButton;
