// In App.js in a new project

import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import SignIn from './src/components/tabs/auth/SignIn.jsx';
import SignUp from './src/components/tabs/auth/SignUp.jsx';

import AddToFridgeScreen from './src/components/tabs/AddToFridge.jsx';
import FridgeScreen from './src/components/tabs/FridgeScreen.jsx';
import Toast from 'react-native-toast-message';
import Drawer from './src/components/Drawer.jsx';

// contexts
import { ProductsProvider } from './src/contexts/products.context';

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
