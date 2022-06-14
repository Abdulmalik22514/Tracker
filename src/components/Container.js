import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Header from './Header';
import NotchResponsive from './NotchResponsive';
import {COLORS, SIZES} from '../constants';

const Container = ({heading, children}) => {
  return (
    <View style={styles.container}>
      <NotchResponsive />
      <Header heading={heading} />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  scrollView: {
    paddingBottom: SIZES.font1 * 2,
  },
});

export default Container;
