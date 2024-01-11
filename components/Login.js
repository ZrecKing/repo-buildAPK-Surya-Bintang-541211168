import { Image,View, Text, Button, StyleSheet, Linking } from 'react-native';
import {SafeAreaView, TextInput} from 'react-native';
import React from 'react';

import Gambar from './CustomComponent/CustomImage'
import Tombol from './CustomComponent/CustomButton'
import MasukanData from './CustomComponent/CustomInput'

export default function Login ({navigation}) {
  
  const Register = () => {
    navigation.navigate('Register')
  }

  const Porto = () => {
    navigation.navigate('Porto')
  }
  
  return (
    <View style={styles.container}>
    <Gambar source= {require ("../assets/logo.png")} style={styles.logo}/>
        <Text style={styles.title}>Hello,</Text>
        <Text style={styles.des}>Silahkan Login Dahulu</Text>
        <MasukanData
          placeholder="Email"
        />
        <MasukanData
            placeholder="Password"
            secure="true"
        />
      <Text style={styles.pass}>Lupa Password? 
      </Text>

      <Tombol
      color="red"
      title="LOGIN"
      onPress= {Porto}
      />
      
      <Text style={styles.atau}>OR</Text>
      <Tombol
      color="grey"
      title="GOOGLE"
      onPress={() => alert("Kay")}
      />

          <Text style={styles.register}>Belum Punya Akun? <Text onPress= {Register} style={{ color: 'blue', textDecorationLine: 'underline' }}> Daftar Sekarang </Text> </Text>
    </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop:40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 1,
  },
  pass:{
    fontSize: 13,
    textAlign: "right",
    marginBottom: 15,
    color:"blue",
  },
    logo:{
    height : 50,
    width : 50,
  },

  des: {
    fontSize: 12,
    marginBottom: 30,
    color: "#B4B4B3",
  },
    atau: {
    fontSize: 13,
    textAlign: 'center',
    marginTop:10,
    marginBottom:10,
    color: "#B4B4B3",
  },

  register:{
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:10,
    marginBottom:10,
    color: "#B4B4B3",
  },
});