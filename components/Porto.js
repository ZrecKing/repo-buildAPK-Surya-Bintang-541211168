import { Image,View, Text, ScrollView, TextInput, Button, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';

// You can import supported modules from npm
import Gambar from './CustomComponent/CustomImage'
import Tombol from './CustomComponent/CustomButton'
import Tulisan from './CustomComponent/CustomText'

export default function Porto() {

  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({});

  const addLike = (projectId) => {
    setLikes((prevLikes) => ({
      prevLikes,
      [projectId]: (prevLikes[projectId] || 0) + 1,
    }));
  };
    const addDislike = (projectId) => {
    setDislikes((prevLikes) => ({
      prevLikes,
      [projectId]: (prevLikes[projectId] || 0) + 1,
    }));
  };
  
  const projects = [
    { id: 1, title: 'Mockup Sepatu', imageSource: require('../assets/project1.png')},
    { id: 2, title: 'Loka Piknik', imageSource: require('../assets/project2.png') },
  ];
  return (
  <ScrollView>
   <View style={styles.container}>
      <Gambar source= {require ("../assets/surya.png")} style={styles.profil}/>
      <Text style={styles.nama}>Surya Bintang Agus Putra</Text>

      <View>
      <Tulisan/>
      </View>
      
      <Tombol
      onPress={() => alert("081390508571")}
      title="Contact Me"
      color="black"
      />
      
    <View style={{ padding: 25 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' , textAlign: 'center', marginBottom:15}}>My Recent Project</Text>
        {projects.map((project) => (
          <View key={project.id} style={styles.projectContainer}>
            <Image source={project.imageSource} style={styles.thumbnail} />
            <View style={styles.projectInfo}>
              <Text style={styles.projectTitle}>{project.title} </Text>
              <Text style={styles.projectDescription}>{project.description}</Text>
              <TouchableOpacity>
              <Image style={{width : 80, height: 80, left : 310, top: 15,}} source={require('../assets/button.png')} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.likeButton}
              onPress={() => addLike(project.id)}
            >
              <MaterialCommunityIcons name="heart" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dislikeButton}
              onPress={() => addDislike(project.id)}
            >
              <MaterialCommunityIcons name="heart-broken" size={20} color="white" />
            </TouchableOpacity>
            <Text style={styles.likeCount}>
              Likes: {likes[project.id] || 0}
            </Text>
            <Text style={styles.dislikeCount}>
              Dislikes: {dislikes[project.id] || 0}
            </Text>
            
          
          </View>
        ))}
      </View>
    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 50,
    backgroundColor: '#F0F0F0',
    fontFamily: 'sans-serif',
    alignItems: 'center',
  },

  nama:{
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  profil:{
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  
 projectContainer: {
    marginVertical: 10,
    marginBottom: 5,
    marginTop: 5,
  },
  thumbnail: {
    width: 380,
    height: 200,
    borderRadius: 5,
  },
  projectInfo: {
    // flex: 2,
    // // marginLeft: ,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    top : 10,
  },
  projectDescription: {
    fontSize: 14,
    top:10,
  },

  likeButton: {
    backgroundColor: 'pink',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    bottom: 65,
  },
  dislikeButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    bottom : 95,
    left: 45,
  },
  likeCount: {
    marginLeft: 10,
    fontSize: 14,
    bottom: 80,
    right : 10,
  },
  dislikeCount: {
    marginLeft: 10,
    fontSize: 14,
    bottom: 85,
    right : 10,
  },
  // learnMoreButton: {
  //   backgroundColor: 'blue',
  //   padding: 5,
  //   borderRadius: 5,
  //   // alignItems: 'center',
  //   // justifyContent: 'center',
  //   width: 100,
  // },
});

