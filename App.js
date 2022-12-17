// In App.js in a new project

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TextRecognition from '@react-native-ml-kit/text-recognition';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import SignIn from './tabs/auth/SignIn';
import SignUp from './tabs/auth/SignUp';

import AddToFridgeScreen from './tabs/AddToFridge';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};
const FridgeScreen = () => {
  return (
    <View>
      <Text>Fridge Screen</Text>
    </View>
  );
};

function App() {
  const isSignedIn = true;

  return (
    <NavigationContainer>
      <Tab.Navigator>
        {isSignedIn ? (
          <>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Fridge" component={FridgeScreen} />
            <Tab.Screen name="Add to Fridge" component={AddToFridgeScreen} />
          </>
        ) : (
          <>
            <Tab.Screen name="Log In" component={SignIn} />
            <Tab.Screen name="Sign Up" component={SignUp} />
          </>
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
