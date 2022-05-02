import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {hp, wp} from '../constants/utils';
import {COLORS} from '../constants/colors';

// export const EventHistory = [
//   {
//     title: 'Damon Perez',
//   },
// ];

const EventHistoryCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Damon Perez</Text>
      <View style={styles.locationContainer}>
        <View>
          <Text style={styles.lat}>48 8’ 36. 44862” N</Text>
          <Text style={styles.latitude}>Latitude</Text>
        </View>
        <View>
          <Text style={styles.lat}>48 8’ 36. 44862” E</Text>
          <Text style={styles.latitude}>Longitude</Text>
        </View>
      </View>
      <View style={styles.durationCont}>
        <Text style={styles.lat}>Duration</Text>
        <Text style={styles.lat}>12:45:52</Text>
      </View>
      <View style={styles.durationCont}>
        <Text style={styles.lat}>23 June 2019</Text>
        <Text style={styles.lat}>17:56</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.grey,
    paddingHorizontal: wp(7),
    paddingVertical: hp(20),
    marginHorizontal: wp(17),
    marginVertical: hp(23),
    borderRadius: 10,
  },
  duration: {},
  lat: {
    color: COLORS.white,
    fontSize: hp(20),
  },
  latitude: {
    color: COLORS.white,
    fontSize: hp(18),
    alignSelf: 'center',
  },
  locationContainer: {
    borderColor: COLORS.black,
    borderWidth: 0.9,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: hp(20),
    padding: wp(8),
  },
  name: {
    color: COLORS.white,
    fontSize: hp(21),
  },
  durationCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(162),
    marginBottom: hp(15),
  },
});

export default EventHistoryCard;
