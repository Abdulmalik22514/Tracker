import React from 'react';
import {View} from 'react-native';
import Container from '../../components/Container';
import EventHistoryCard from '../../components/EventHistory';
import {SIZES} from '../../constants';

const History = () => {
  return (
    <>
      <Container heading="History">
        <View style={{paddingHorizontal: SIZES.font10}}>
          <EventHistoryCard />
          <EventHistoryCard />
          <EventHistoryCard />
        </View>
      </Container>
    </>
  );
};

export default History;
