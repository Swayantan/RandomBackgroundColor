import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default function App(): JSX.Element {
  const [randomBackground, setRandomBackground] = useState('#FFFFFF');

  const [randomShape1, setRandomShape1] = useState('#FFFFFF');
  const [randomShape2, setRandomShape2] = useState('#FFFFFF');
  const [randomShape3, setRandomShape3] = useState('#FFFFFF');
  const [randomShape4, setRandomShape4] = useState('#FFFFFF');
  const [randomShape5, setRandomShape5] = useState('#FFFFFF');
  const [randomShape6, setRandomShape6] = useState('#FFFFFF');
  const [randomShape7, setRandomShape7] = useState('#FFFFFF');
  const [randomShape8, setRandomShape8] = useState('#FFFFFF');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    // for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 6; j++) {
        let hexCodeIndex = Math.floor(Math.random() * hexRange.length);
        color += hexRange.charAt(hexCodeIndex);
      }

    //   switch (i) {
    //     case 0: {
    //       setRandomBackground(color);
    //       break;
    //     }
    //     case 1: {
    //       setRandomShape1(color);
    //       break;
    //     }
    //     case 2: {
    //       setRandomShape2(color);
    //       break;
    //     }
    //     case 3: {
    //       setRandomShape3(color);
    //       break;
    //     }
    //     case 4: {
    //       setRandomShape4(color);
    //       break;
    //     }
    //     case 5: {
    //       setRandomShape5(color);
    //       break;
    //     }
    //     case 6: {
    //       setRandomShape6(color);
    //       break;
    //     }
    //     case 7: {
    //       setRandomShape7(color);
    //       break;
    //     }
    //     case 8: {
    //       setRandomShape8(color);
    //       break;
    //     }
    //     default: {
    //       break;
    //     }
    //   }
    // }
    // setRandomBackground(color);
    // for (let j = 0; j < 6; j++) {
    //   let hexCodeIndex = Math.floor(Math.random() * hexRange.length);
    //   color += hexRange.charAt(hexCodeIndex);
    // }
    // setRandomShape1(color);
    // for (let j = 0; j < 6; j++) {
    //   let hexCodeIndex = Math.floor(Math.random() * hexRange.length);
    //   color += hexRange.charAt(hexCodeIndex);
    // }
    // setRandomShape2(color);
    // for (let j = 0; j < 6; j++) {
    //   let hexCodeIndex = Math.floor(Math.random() * hexRange.length);
    //   color += hexRange.charAt(hexCodeIndex);
    // }
    // setRandomShape3(color);
    // for (let j = 0; j < 6; j++) {
    //   let hexCodeIndex = Math.floor(Math.random() * hexRange.length);
    //   color += hexRange.charAt(hexCodeIndex);
    // }
    // setRandomShape4(color);

    // if (i === 0) {
    //   setRandomBackground(color);
    // } else if (i === 1) {
    //   setRandomShape1(color);
    // } else if (i === 2) {
    //   setRandomBackground(color);
    // } else if (i === 3) {
    //   setRandomBackground(color);
    // } else if (i === 4) {
    //   setRandomBackground(color);
    // } else if (i === 5) {
    //   setRandomBackground(color);
    // } else if (i === 6) {
    //   setRandomBackground(color);
    // } else if (i === 7) {
    //   setRandomBackground(color);
    // } else if (i === 8) {
    //   setRandomBackground(color);
    // }
  };

  return (
    <>
      <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.shapeUpper, {backgroundColor: randomBackground}]}>
        <View style={[styles.square, {backgroundColor: randomShape1}]} />
        <View style={[styles.circle, {backgroundColor: randomShape2}]} />
        <View
          style={[
            styles.triangle,
            {
              borderBottomColor: randomShape3,
              backgroundColor: randomBackground,
              borderLeftColor: randomBackground,
              borderRightColor: randomBackground,
            },
          ]}
        />
        <View style={[styles.rectangle, {backgroundColor: randomShape4}]} />
      </View>
      <View style={[styles.container, {backgroundColor: randomBackground}]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={[styles.shapeUpper, {backgroundColor: randomBackground}]}>
        <View style={[styles.square, {backgroundColor: randomShape5}]} />
        <View style={[styles.circle, {backgroundColor: randomShape6}]} />
        <View
          style={[
            styles.triangle,
            {
              borderBottomColor: randomShape7,
              backgroundColor: randomBackground,
              borderLeftColor: randomBackground,
              borderRightColor: randomBackground,
            },
          ]}
        />
        <View style={[styles.rectangle, {backgroundColor: randomShape8}]} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnTxt: {
    fontSize: 24,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  shapeUpper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 20,
    justifyContent: 'center',
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
