import  {useState, useContext} from 'react';
import {View, Text, ScrollView, TextInput, StyleSheet, Image} from 'react-native';
import {pageStyles} from '../../styles/pageStyles';
import ImagePicker from 'react-native-image-crop-picker';
import ImageEditor from "@react-native-community/image-editor";
import { Button } from '@rneui/base';

const TestTabScreen = () => {

    const [img, setImg] = useState("")

    const handlePress = async () => {
        await ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then( async (image) => {
            // setImg(image.sourceURL)

            const {width, height, x, y} = image.cropRect

            let cropData = {
                offset: {x, y},
                size: {width, height},
                // displaySize: {width, height},
                // resizeMode: 'contain' | 'cover' | 'stretch',
              };

            await ImageEditor.cropImage(image.sourceURL, cropData).then(url => {
                console.log("Cropped image uri", url);
                setImg(url)
              })
          });
          
    }

  return (
    <View style={pageStyles.container}>
      <Text>This is a test screen</Text>
      <Button onPress={handlePress} title={"Selectimage from library"} />
      <Image
        style={{
          width: '100%',
          height: '100%',
        }}
        source={{
          uri: img,
        }}
      />
    </View>
  );
};

export default TestTabScreen;
