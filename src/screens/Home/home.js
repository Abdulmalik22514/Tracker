import {View, Text} from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import {LocationPin} from '../../assets/svg';
import HomeCard from '../../components/HomeCard';
import CustomButton from '../../components/CustomButton';
import {HomeStyles as styles} from './styles';
import {SIZES} from '../../constants';

const HomePage = ({navigation}) => {
  return (
    <>
      <Container heading="Home Page">
        <View style={{paddingHorizontal: SIZES.font9}}>
          <View style={styles.locationCard}>
            <Text style={styles.lat}>48 8’ 36. 44862” N</Text>
            <Text style={styles.latitude}>Latitude</Text>
            <LocationPin style={styles.icon} />
            <Text style={styles.lat}>48 8’ 36. 44862” E</Text>
            <Text style={styles.latitude}>Longitude</Text>
          </View>
          <View style={styles.homeCard}>
            <HomeCard
              title="Settings"
              onPress={() => navigation.navigate('Settings')}
            />
            <HomeCard
              title="History"
              onPress={() => navigation.navigate('History')}
            />
          </View>
          <CustomButton style={styles.button} />
        </View>
      </Container>
    </>
  );
};

export default HomePage;
