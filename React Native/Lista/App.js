import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import Contactos from './Contactos';
import Fila from './Fila'
export default function App() {
  return (
    <View style={styles.tabla} >
    <ScrollView>
      {Contactos.map(contacto => (
        <Fila {...contacto}/>
        ) )}
      <StatusBar style="auto" />
    </ScrollView>
    
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabla : {
    alignItems: 'center',
    backgroundColor: 'powderblue',
  },
});
