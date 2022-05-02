import React from 'react';
import Container from '../../components/Container';
import EventHistoryCard from '../../components/EventHistory';

const History = () => {
  return (
    <>
      <Container heading="History">
        <EventHistoryCard />
        <EventHistoryCard />
        <EventHistoryCard />
      </Container>
    </>
  );
};

export default History;
