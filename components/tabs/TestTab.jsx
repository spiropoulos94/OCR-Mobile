import  {useState, useContext} from 'react';
import {View, Text, ScrollView, TextInput, StyleSheet, Image} from 'react-native';
import {pageStyles} from '../../styles/pageStyles';
import ImagePicker from 'react-native-image-crop-picker';
import ImageEditor from "@react-native-community/image-editor";
import { Button } from '@rneui/base';
import TextRecognition from '@react-native-ml-kit/text-recognition';

const TestTabScreen = () => {

    const [img, setImg] = useState("")

    const handleConvert = async () => {
        console.log("Ready to parse imagec => ", img)
        try {
          const result = await TextRecognition.recognize(
            img,
          );
          console.log({result})
          let totalTexts = [];
          for (let block of result.blocks) {
            // totalText += ' ' + block.text;
            totalTexts.push(block.text);
            for (let line of block.lines) {
              // totalText += '' + line.text;
              totalTexts.push(line.text);
            }
          }
    
          console.log({totalTexts})
    
        //   if(totalTexts && totalTexts.length > 0){
        //     let dates = extractDate(totalTexts);
        //     if(dates && dates.length > 0){
        //       dates.forEach(date => console.log(`Check! ${stringToTimestamp(date)}`));
        //     }
        //   }
    
        } catch (e) {
          console.log(e.message);
          alert('Error: Check console');
        }
      };

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
      <Button onPress={handleConvert} title={"Convert"} />
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
