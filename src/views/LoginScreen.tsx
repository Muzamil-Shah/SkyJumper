import React from 'react';
import {View, StyleSheet, Platform, Image, Text} from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image
          style={styles.monkey}
          source={require('../assets/happyMonkey.png')}
        />
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Text>
          By signing in you are agreeing our{' '}
          <Text>Terms and privacy policy</Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  wrapper: {
    height: Platform.OS === 'ios' ? '90%' : '100%',
    backgroundColor: 'orange',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    height: '90%',
    width: 1000,
    borderBottomEndRadius: 100000,
    borderBottomStartRadius: 100000,
    position: 'relative',
  },
  monkey: {
    width: 200,
    objectFit: 'contain',
    position: 'absolute',
    bottom: -30,
  },
  logo: {
    width: 100,
    objectFit: 'contain',
  },
});
