// In App.js in a new project

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TextRecognition from '@react-native-ml-kit/text-recognition';

function HomeScreen({navigation}) {
  const getText = async imgUri => {
    const result = await TextRecognition.recognize(imgUri);
    console.log('Recognized text:', result.text);
    for (let block of result.blocks) {
      console.log('Block text:', block.text);
      console.log('Block frame:', block.frame);

      for (let line of block.lines) {
        console.log('Line text:', line.text);
        console.log('Line frame:', line.frame);
      }
    }
    return result;
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Extract text"
        onPress={() =>
          getText('file:///Users/nikosspiropoulos/Desktop/Image.jpeg')
        }
      />
    </View>
  );
}

const textLine = ({content}) => {
  return <Text>{content}</Text>;
};

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}
function ProfileScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview'}}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
