import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import loginSvg from './assets/login.png';
import {Button, Input} from './components';

const Login = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#b2dfdb'}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <ScrollView style={{flex: 1}} bounces={false}>
          <View style={styles.containerStyle}>
            <Image source={loginSvg} style={styles.logoStyle} />
            <Input holder="Enter Email" security={false} />
            <Input holder="Enter Password" security={true} />
            <Button text="Login" />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
  },
  logoStyle: {
    // backgroundColor: 'red',
    resizeMode: 'contain',
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height * 0.4,
  },
});
