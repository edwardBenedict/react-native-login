import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Input = ({holder, security}) => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput placeholder={holder} secureTextEntry={security} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    backgroundColor: '#eceff1',
    paddingLeft: 10,
    padding: Platform.OS === 'ios' ? 15 : 5,
    margin: 10,
    borderRadius: 10,
    width: '90%',
    marginVertical: 15,
  },
});

export {Input};
