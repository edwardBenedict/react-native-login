import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const Button = ({text}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#273B7A',
    padding: 10,
    borderRadius: 5,
    width: Dimensions.get('window').width / 2,
    marginTop: 10,
    marginBottom: 10,
    height: 40,
  },
  textStyle: {
    color: '#eceff1',
    textAlign: 'center',
  },
});

export {Button};
