// In App.js in a new project

import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import SignIn from './components/tabs/auth/SignIn.jsx';
import SignUp from './components/tabs/auth/SignUp.jsx';

import AddToFridgeScreen from './components/tabs/AddToFridge.jsx';
import FridgeScreen from './components/tabs/FridgeScreen.jsx';
import TestTabScreen from './components/tabs/TestTab.jsx';
import Toast from 'react-native-toast-message';
import Drawer from './components/Drawer.jsx';

// contexts
import {ProductsProvider} from './contexts/products.context';

const Tab = createBottomTabNavigator();

function App() {
  const isSignedIn = true;

  return (
    <ProductsProvider>
      <NavigationContainer>
        <Tab.Navigator>
          {isSignedIn ? (
            <>
              <Tab.Screen name="Fridge">{() => <FridgeScreen />}</Tab.Screen>
              <Tab.Screen name="Test">{() => <TestTabScreen />}</Tab.Screen>
              <Tab.Screen name="Add to Fridge">
                {() => <AddToFridgeScreen />}
              </Tab.Screen>
            </>
          ) : (
            <>
              <Tab.Screen name="Log In" component={SignIn} />
              <Tab.Screen name="Sign Up" component={SignUp} />
            </>
          )}
        </Tab.Navigator>
        <Toast />
      </NavigationContainer>
    </ProductsProvider>
  );
}

export default App;
