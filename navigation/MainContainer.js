import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconis from 'react-native-vector-icons/MaterialCommunityIcons';

// Screens
import CityScreen from './screens/CityScreen';
import LatlongScreen from './screens/LatlongScreen';

//Screen names
const cityName = "City Name";
const curLocation = "Lat-long";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={cityName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === cityName) {
              iconName = focused ? 'city-variant' : 'city-variant-outline';
              //show icon
              return <Iconis name={iconName} size={size} color={color} />;
            } else if (rn === curLocation) {
              iconName = focused ? 'my-location' : 'location-searching';
              //show icon
              return <Icon name={iconName} size={size} color={color} />;
            }

          },
        })}
        //animation of button
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={cityName} component={CityScreen} />
        <Tab.Screen name={curLocation} component={LatlongScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}