import React, { useState } from 'react'
import {Text, View, StyleSheet,  Button, TextInput} from 'react-native'

export default function App(){
  
  const[texto,setTexto]=useState('')
  const[numero,setNumero]=useState(0)
  const [datos, setDatos] =useState({nombre: '', edad: 0})

  return(
    <View style={estilo.principal}>
      <Text style={estilo.texto}>Hola</Text>
      <Text style={estilo.texto}>Edad: </Text> 
      <TextInput onChangeText={ t => setTexto(t) } style={estilo.input} />
      <TextInput keyboardType='number-pad' onChangeText={ n => setNumero(n) } style={estilo.input} />
      <Button title='Actualizar' 
      onPress={ ()=>setNuevoTexto(nuevotexto) } />
    </View>
  )
}

const estilo = StyleSheet.create(
  {
    input: {
      borderWidth: 1,
      alignSelf: 'stretch',
      margin: 15,
      height: 35,
      fontSize: 20
    },
    principal: {
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
    },
    texto: {
      fontSize: 35,
    }
  }
)