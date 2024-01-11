import { Image,View, Text, Button, StyleSheet, Linking } from 'react-native';
import {SafeAreaView, TextInput} from 'react-native';
import React from 'react';

import Tombol from './CustomComponent/CustomButton'
import MasukanData from './CustomComponent/CustomInput'
import Gambar from './CustomComponent/CustomImage'

export default function Login ({navigation}) {

  const Login = () => {
    navigation.navigate('Login')
  }


  return (
    <View style={styles.container}>
    <Gambar source= {require ("../assets/logo.png")} style={styles.logo}/>
        <Text style={styles.title}>Hello,</Text>
        <Text style={styles.des}>Daftar Bro</Text>
       
      <MasukanData
            placeholder="Nama Lengkap"
        />
      
      <MasukanData
            placeholder="Email"
        />
      
      <MasukanData
            placeholder="Password"
            secure="true"
        />

      <MasukanData
            placeholder="Ulang Passsword"
            secure="true"
        />

      <Tombol
      color="red"
      title="Register"
      onPress={() => navigation.navigate('Porto')}
      />

          <Text onPress={Login} style={styles.register}>Sudah Punya Akun? <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Login</Text> </Text>
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
    logo:{
    height : 50,
    width : 50,
  },

  des: {
    fontSize: 12,
    marginBottom: 30,
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