import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/button';
import * as ImagePicker from 'expo-image-picker';

import IconButton from './components/IconButton';
import CircleButton from './components/CircleButton';


const PlaceholderImage = require('./assets/images/fort.jpeg');

export default function App() {
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const PickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true);
    } else {
      alert("You did not select any image");
    }

  };

  const onReset = () => {
    setShowAppOptions(false);
  }

  const onAddSticker = () => { 

  }


  const onSaveImageAsync = async () => {

  }


  return (
    <View style={styles.container}>
      <View style={styles.ImageContainer}>
        <ImageViewer PlaceholderImageSource={PlaceholderImage} selectedImage= {selectedImage} />
      </View>

      {showAppOptions ? (
        <View style= {styles.optionsContainer}>
          <View style= {styles.optionRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker}/>
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync}/>
            </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
        <Button theme='primary' label='Choose a photo' onPress={PickImageAsync} />
        <Button onPress={()=> setShowAppOptions(true)} theme='primary' label='Use This photo' />
      </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageContainer: {
    flex: 1,
    padding: 100,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
   position: 'absolute',
   bottom: 80,
  },
  optionRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },  
});
