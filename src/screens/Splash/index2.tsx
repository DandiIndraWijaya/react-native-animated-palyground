import React from 'react';

import {View, StyleSheet, Text} from 'react-native';
// import SafeAreaView from 'react-native-safe-area-view';
import {QuranSplash} from '../../assets/svg';
import theme from '../../theme';

const Splash = () => {
  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.center}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>MyQuran</Text>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Learn Quran and </Text>
            <Text style={styles.subtitle}>Recite one everyday</Text>
          </View>
        </View>
        <QuranSplash />
      </View>
    </View>
    // </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: theme.color.dark,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textContainer: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    color: theme.color.white,
    // fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
  },
  subtitleContainer: {
    marginTop: 8,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: theme.color.white,
    fontFamily: 'Roboto-Light',
  },
});
