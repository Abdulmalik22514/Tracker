import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login/login';
import HomePage from '../screens/Home/home';
import History from '../screens/History/history';
import {COLORS} from '../constants';

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <StatusBar translucent={false} backgroundColor={COLORS.grey} />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
