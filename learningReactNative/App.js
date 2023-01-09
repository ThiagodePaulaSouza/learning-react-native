import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import MeuComponent from './MeuComponent'
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.titulo}>Titulo generico</Text>
      <ScrollView>
        <MeuComponent />
        <MeuComponent />
        <MeuComponent />
        <MeuComponent />
        <MeuComponent />
        <MeuComponent />
        <MeuComponent />
        <MeuComponent />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a2a2a',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40
  },
  titulo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },

});
