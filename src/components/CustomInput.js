import {View, Text} from 'react-native';
import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {hp, wp} from '../constants/utils';
import {COLORS} from '../constants/colors';

const CustomInput = ({label, placeholder}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput placeholder={placeholder} style={styles.inputContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(28),
    marginTop: hp(26),
  },
  label: {
    marginBottom: hp(6),
    fontSize: hp(18),
    color: COLORS.black,
  },
  inputContainer: {
    backgroundColor: COLORS.ash,
    height: hp(50),
    borderRadius: 10,
    width: '100%',
  },
});

export default CustomInput;
