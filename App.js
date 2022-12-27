// In App.js in a new project

import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TextRecognition from '@react-native-ml-kit/text-recognition';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import SignIn from './components/tabs/auth/SignIn.jsx';
import SignUp from './components/tabs/auth/SignUp.jsx';

import AddToFridgeScreen from './components/tabs/AddToFridge.jsx';
import FridgeScreen from './components/tabs/FridgeScreen.jsx';
import Toast from 'react-native-toast-message';
import Drawer from './components/Drawer.jsx';

// contexts
import {ProductsProvider} from './contexts/products.context';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

function App() {
  const isSignedIn = true;

  const [products, setProducts] = useState([
    {
      name: 'Milk',
      expDateTs: 1671317840973,
      addedOn: 1671317851535,
    },
    {
      name: 'Cheese',
      expDateTs: 1671317840973,
      addedOn: 1671317851535,
    },
    {
      name: 'Yogurt',
      expDateTs: 1671317840973,
      addedOn: 1671317851535,
    },
  ]);

  return (
    <ProductsProvider>
      <NavigationContainer>
        <Tab.Navigator>
          {isSignedIn ? (
            <>
              <Tab.Screen name="Fridge">
                {() => (
                  <FridgeScreen products={products} setProducts={setProducts} />
                )}
              </Tab.Screen>
              <Tab.Screen name="Add to Fridge">
                {() => <AddToFridgeScreen setProducts={setProducts} />}
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
