import {View, Text} from 'react-native';
import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../constants';
import {FONTS} from '../constants/theme';

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
    marginHorizontal: SIZES.font1,
    marginTop: SIZES.font1,
  },
  label: {
    marginBottom: SIZES.font10,
    color: COLORS.black,
    ...FONTS.body5,
  },
  inputContainer: {
    backgroundColor: COLORS.ash,
    height: SIZES.font7 * 3.2,
    borderRadius: 10,
    width: '100%',
    paddingHorizontal: SIZES.font10,
    ...FONTS.body7,
  },
});

export default CustomInput;
