import React, {useState} from 'react';
import {Alert, StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroConstants,
  ViroARSceneNavigator,
  ViroText,
} from '@viro-community/react-viro';

const HelloWorldSceneAR = () => {
  const [text, setText] = useState<String>('Initializing AR...');

  function onInitialized(state: any, reason: any) {
    if (state === ViroConstants.TRACKING_NORMAL) {
      setText('Hello World!');
    } else if (state === ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
      Alert.alert('AR is not available ', 'AR is not available', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      />
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: {
    flex: 1,
  },
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
