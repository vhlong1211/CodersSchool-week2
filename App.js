import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import {AntDesign} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {SimpleLineIcons} from '@expo/vector-icons';
export default function App() {
  let images=[{url:require("./assets/anh1.jpg"),url2:require("./assets/anh2.jpg")},{url:require("./assets/anh3.jpg"),url2:require("./assets/anh4.jpg")},{url:require("./assets/anh5.jpg"),url2:require("./assets/anh6.jpg")}]
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <AntDesign name='arrowleft' size={30} color='red'></AntDesign>
        <MaterialCommunityIcons name='dots-horizontal' size={30} color='red'></MaterialCommunityIcons>
      </View>
      <View style={styles.body}>
        <View style={styles.upperBody}>
          <Image source={require('./assets/anor-london.jpg')} style={styles.posterAvatar} />
          <View style={styles.info}>
                <View style={styles.upInfo}>
                  <Text style={styles.upText}>Long Weak</Text>
                  <Text style={styles.downText}>Savior!</Text>
                </View>
                <View style={styles.button}> 
                  <TouchableOpacity style={styles.butt1}>
                    <Text style={styles.buttext1}>Follow</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.butt2}>
                    <SimpleLineIcons name='paper-plane' size={18} color='white'></SimpleLineIcons>
                  </TouchableOpacity>
                </View> 
                
          </View>
        </View>
        <View style={styles.statistic}>
           <View >
             <Text style={styles.number}>12</Text>
             <Text style={styles.downText}>Photos</Text>
           </View>
           <View>
             <Text style={styles.number}>321</Text>
             <Text style={styles.downText}>Followers</Text>
           </View>
           <View>
             <Text style={styles.number}>421</Text>
             <Text style={styles.downText}>Following</Text>
           </View>
        </View>
        <View style={styles.pictures}>
          
           {images.map(image=>{
            return <View style={styles.imageWrapper}>
              <Image style={styles.imagePoster} source={image.url}/>
              <Image style={styles.imagePoster} source={image.url2}/>
              </View>
          })}
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginTop: Constants.statusBarHeight,
    padding:30
    
  },
  header:{
    flex:1,
    flexDirection:'row',
    justifyContent:"space-between"
  },
  body:{
    flex:12,
    
  },
  upperBody:{
    display:'flex',
    flexDirection:'row',
    marginBottom:35
  },
  posterAvatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginLeft:27
  },
  button:{
    display:'flex',
    flexDirection:'row'
  },
  imageWrapper: {
    height: 150,
    width:300,
    marginLeft:10,
    display:'flex',
    flexDirection:'row'
    
  },
  imagePoster: {
    flex:1,
    width: null,
    height: null,
    borderRadius:30,
    margin:10
  },
  butt1:{
    display: 'flex',
        height: 32,
        width:105,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:10,
        backgroundColor: 'blue',
        shadowColor: '#2AC062',
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
  },
  butt2:{
    display: 'flex',
        height: 32,
        width:45,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:10,
        backgroundColor: '#00BFFF',
        shadowColor: '#2AC062',
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
  },
  buttext1:{
    fontWeight:'bold',
    fontSize:17,
    color:'white'
  },
  info:{
    paddingLeft:20
  },
  upInfo:{
    marginBottom:10
  },
  upText:{
    fontSize:20,
    fontWeight: 'bold',
    marginBottom:10
  },
  downText:{
    fontSize:13,
    color:'grey',
    fontWeight:'bold'
  },
  firstButt:{
    backgroundColor:'blue',
    borderRadius:23,
    flex:5,
    marginRight:80
  },
  secButt:{
    flex:5
  },
  statistic:{
    display:'flex',
    flexDirection:'row',
    justifyContent:"space-between",
    marginLeft:15

  },
  number:{
    textAlign:"center",
    fontWeight:'bold',
    fontSize:27,
    marginBottom:8
  }

});
