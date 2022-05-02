import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Header from './Header';

const Container = ({heading, children}) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header heading={heading} />
        {children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default Container;
