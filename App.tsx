import React from 'react';
import { View, StyleSheet } from 'react-native';
import CurrencyList from './src/components/CurrencyList';


const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <CurrencyList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
});


export default App;
