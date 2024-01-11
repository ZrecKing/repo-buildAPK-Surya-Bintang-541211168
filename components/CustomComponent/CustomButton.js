import { Text, View, StyleSheet, Image, Button } from 'react-native';
import React, {useState} from 'react';



const Tombol = (props)=> {
  return (
    <Button 
    title={props.title}  
    onPress={props.onPress}
    color={props.color}/>
  );
}

export default Tombol

