import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

const getRandomColor = () => {
  const hexRange = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexRange[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default function AppPro(): JSX.Element {
  const [randomBackground, setRandomBackground] = useState({
    background: getRandomColor(),
  });
  const [shapeColors, setShapeColors] = useState({
    shape1: getRandomColor(),
    shape2: getRandomColor(),
    shape3: getRandomColor(),
    shape4: getRandomColor(),
  });

  const changeColors = () => {
    setRandomBackground({background: getRandomColor()});
    setShapeColors({
      shape1: getRandomColor(),
      shape2: getRandomColor(),
      shape3: getRandomColor(),
      shape4: getRandomColor(),
    });
  };

  return (
    <>
      <StatusBar backgroundColor={randomBackground.background} />
      <View
        style={[
          styles.container,
          {backgroundColor: randomBackground.background},
        ]}>
        <View style={styles.upperShape}>
          <View
            style={[styles.square, {backgroundColor: shapeColors.shape1}]}
          />
          <View
            style={[styles.circle, {backgroundColor: shapeColors.shape2}]}
          />
          <View
            style={[
              styles.triangle,
              {
                borderBottomColor: shapeColors.shape3,
                backgroundColor: randomBackground.background,
                borderLeftColor: randomBackground.background,
                borderRightColor: randomBackground.background,
              },
            ]}
          />
          <View
            style={[styles.rectangle, {backgroundColor: shapeColors.shape4}]}
          />
        </View>

        <TouchableOpacity onPress={changeColors} style={styles.button}>
          <Text style={styles.buttonText}>Press Me</Text>
        </TouchableOpacity>

        <View style={styles.lowerShape}>
          <View
            style={[styles.square, {backgroundColor: shapeColors.shape1}]}
          />
          <View
            style={[styles.circle, {backgroundColor: shapeColors.shape2}]}
          />
          <View
            style={[
              styles.triangle,
              {
                borderBottomColor: shapeColors.shape3,
                backgroundColor: randomBackground.background,
                borderLeftColor: randomBackground.background,
                borderRightColor: randomBackground.background,
              },
            ]}
          />
          <View
            style={[styles.rectangle, {backgroundColor: shapeColors.shape4}]}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#6A1B4D',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  upperShape: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 20,
    justifyContent: 'center',
  },
  lowerShape: {
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    paddingTop: 20,
    justifyContent: 'center',
  },

  shape: {
    width: 100,
    height: 100,
    margin: 10,
  },
  square: {
    width: 150,
    height: 150,
    borderColor: '#000',
    borderWidth: 3,
    margin: 10,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    borderColor: '#000',
    borderWidth: 3,
    margin: 10,
  },
  // triangle: {
  //   width: 0,
  //   height: 0,
  //   backgroundColor: 'transparent',
  //   borderStyle: 'solid',
  //   borderLeftWidth: 50,
  //   borderRightWidth: 50,
  //   borderBottomWidth: 100,
  //   borderLeftColor: 'transparent',
  //   borderRightColor: 'transparent',
  //   borderColor: '#000',
  //   borderWidth: 3,
  // },
  triangleContainer: {
    width: 0,
    height: 0,
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red',
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 80,
    borderRightWidth: 80,
    borderBottomWidth: 180,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white',
    marginTop: 10,
    marginLeft: 5,
  },
  rectangle: {
    width: 120,
    height: 200,
    borderColor: '#000',
    borderWidth: 3,
    margin: 10,
  },
});
