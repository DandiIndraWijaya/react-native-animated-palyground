import React from 'react';
import {StyleSheet, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import Card from './Card';

const cards = [
  {
    source: require('./../../assets/image/tarot/death.png'),
  },
  {
    source: require('./../../assets/image/tarot/chariot.png'),
  },
  {
    source: require('./../../assets/image/tarot/high-priestess.png'),
  },
  {
    source: require('./../../assets/image/tarot/justice.png'),
  },
  {
    source: require('./../../assets/image/tarot/lover.png'),
  },
  {
    source: require('./../../assets/image/tarot/pendu.png'),
  },
  {
    source: require('./../../assets/image/tarot/tower.png'),
  },
  {
    source: require('./../../assets/image/tarot/strength.png'),
  },
];

const Splash = () => {
  return (
    <View style={styles.container}>
      <GestureHandlerRootView style={styles.container}>
        {cards.map((card, index) => (
          <Card card={card} key={index} index={index} />
        ))}
      </GestureHandlerRootView>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
});
