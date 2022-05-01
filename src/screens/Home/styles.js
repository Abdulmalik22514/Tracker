import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {hp, wp} from '../../constants/utils';

export const HomeStyles = StyleSheet.create({
  locationCard: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.grey,
    paddingHorizontal: wp(64),
    paddingVertical: hp(33),
    marginHorizontal: wp(17),
    marginTop: hp(30),
    borderRadius: 10,
  },
  lat: {
    color: COLORS.white,
    fontSize: hp(25),
  },
  latitude: {
    color: COLORS.white,
    fontSize: hp(21),
  },
  icon: {
    marginVertical: hp(10),
  },
  homeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: wp(17),
    marginVertical: hp(40),
  },
  button: {
    marginTop: hp(0),
    marginHorizontal: wp(17),
  },
});
