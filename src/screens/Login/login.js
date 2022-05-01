import React from 'react';
import {View, StyleSheet} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import {COLORS} from '../../constants/colors';
import {hp} from '../../constants/utils';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CustomInput label="Username" />
      <CustomInput label="Password" />
      <CustomButton
        title="Proceed"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(55),
    backgroundColor: COLORS.white,
  },
});

export default Login;
