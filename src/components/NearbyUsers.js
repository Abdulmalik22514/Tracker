import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLORS, icons, SIZES} from '../constants';
import {Tick} from '../assets/svg';
import {FONTS} from '../constants/theme';

export const Users = [
  {
    icon: icons.ralph,
    user: 'Ralph Edwards',
    distance: '200km',
  },
  {
    icon: icons.steve,
    user: 'Steve Rang',
    distance: '200km',
  },
  {
    icon: icons.dan,
    user: 'Dan Ban',
    distance: '20km',
  },
  {
    icon: icons.bang,
    user: 'Bang Hun',
    distance: '2050km',
  },
  {
    icon: icons.rachael,
    user: 'Rachael Yoo',
    distance: '10km',
  },
  {
    icon: icons.nana,
    user: 'Nana Aisha',
    distance: '2003km',
  },
];

const NearbyUsers = ({icon, user, distance, onPress, isChecked}) => {
  return (
    <View style={styles.container}>
      <View style={styles.userIcon}>
        <Image source={icon} style={styles.icon} />
        <View>
          <Text style={styles.user}>{user}</Text>
          <Text style={styles.distance}>{distance}</Text>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        style={styles.checkBox}>
        {isChecked ? <Tick /> : null}
      </TouchableOpacity>
    </View>
  );
};

export default NearbyUsers;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SIZES.font4,
  },
  checkBox: {
    width: SIZES.font3,
    height: SIZES.font3,
    borderColor: COLORS.white,
    borderWidth: 1,
    marginLeft: SIZES.font10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: SIZES.font1 * 1.9,
    height: SIZES.font1 * 1.9,
    borderRadius: 25,
    resizeMode: 'contain',
    marginRight: SIZES.font5,
  },
  user: {
    color: COLORS.white,
    ...FONTS.body6,
    fontWeight: '500',
  },
  userIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  distance: {
    color: COLORS.tertiary,
    ...FONTS.body6,
    fontWeight: '400',
  },
});
