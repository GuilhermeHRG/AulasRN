import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerMessage1}><Text style={styles.message }>Olá, como você está?</Text></View>
      <View style={styles.containerMessage2}><Text style={styles.message}> Oi João! Estou bem. E você?</Text></View>
      <View style={styles.containerMessage1}><Text style={styles.message}>Estou ótimo, obrigado!</Text></View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#0D0D0D',
  },
  message: {
    textAlign: 'flex-start',
    color: 'auto',
  },
  containerMessage1:{
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: '#026873',
    padding: 8,
    margin: 60,
    marginRight: 10,
    borderRadius: 8,
    width: 'auto',
    height: 'auto',
  },
  containerMessage2:{
    fontSize: 16,
    marginBottom: 10,
    padding: 8,
    margin: 60,
    marginLeft: 10,
    backgroundColor: '#F2F2F2',
    width: 'auto',
    borderRadius: 8,
    height: 'auto',
  },
});

export default App;