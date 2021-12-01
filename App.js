
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const[name, setName] = useState('Mohammed Quraysh')

  return (
    <View style={styles.container}>
      <Text style={styles.text}>my name is {name}</Text>
      <Button title='Update' onPress={()=>{setName('Musa')}}></Button>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height: '50%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff00f',
    borderWidth: 10,
    borderRadius: 20,

  
  },
  text:{
    color: '#ff0fff',
    fontSize: 20,
    fontWeight: '700', 
    fontStyle: "italic",
    margin:10,
    textTransform:'uppercase',
    textShadowColor: '#fff00f'

  }
});
