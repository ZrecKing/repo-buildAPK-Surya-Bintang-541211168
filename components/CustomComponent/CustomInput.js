import { Text, View, StyleSheet, Image, Button,SafeAreaView, TextInput } from 'react-native';
import React, {useState} from 'react';



const MasukanData  = (props)=> {
  return(
    <View>
      <TextInput
            style={styles.input}
            placeholder={props.placeholder}
            secureTextEntry={ true }
        />
      </View>
    );
}

const styles = StyleSheet.create({

  input:{
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 15,
    padding: 5,
  },
});

export default MasukanData

