import React from 'react'
import {View, Text,StyleSheet} from 'react-native'

let Fila = props => (
    <View style={{flex:1, flexDirection:'row',borderWidth:1,backgroundColor:'powderblue'}}>
        <Text style={styles.red}>{props.nombre}</Text>
        <Text> - </Text>
        <Text style={styles.bigBlue} >{props.telefono}</Text>
    </View>
)
const styles = StyleSheet.create({
    container: {
      marginTop: 50,
    },
    bigBlue: {
      color: 'blue',
      fontSize: 20,
    },
    red: {
      color: 'red',
      fontWeight: 'bold',
      fontSize: 20,
    },
  });
  
export default Fila