import React from 'react';
import { Image, View } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider, useTheme, lightTheme, darkTheme } from './context/ThemeContext';
import Home from './screens/Home';
import MyCards from './screens/MyCards';
import Statistics from './screens/Statistics';
import Settings from './screens/Settings';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ThemeProvider>
      <MainNavigator />
    </ThemeProvider>
  );
};

const MainNavigator = () => {
  const { isDarkTheme } = useTheme();
  const theme = isDarkTheme ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconSource;

            if (route.name === 'Home') {
              iconSource = require('./assets/home.png');
            } else if (route.name === 'My Cards') {
              iconSource = require('./assets/myCards.png');
            } else if (route.name === 'Statistics') {
              iconSource = require('./assets/statistics.png');
            } else if (route.name === 'Settings') {
              iconSource = require('./assets/settings.png');
            }

            return (
              <Image
                source={iconSource}
                style={{ width: size, height: size, tintColor: color }}
                resizeMode="contain"
              />
            );
          },
          headerShown: false,
          tabBarStyle: {
            backgroundColor: isDarkTheme ? darkTheme.tabsBgColor : lightTheme.tabsBgColor,
          },
        })}
        tabBarOptions={{
          activeTintColor: '#0262f3',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="My Cards" component={MyCards} />
        <Tab.Screen name="Statistics" component={Statistics} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
