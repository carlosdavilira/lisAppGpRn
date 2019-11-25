import React,{Component} from 'react';
import {
 View,
  Text,
  ImageBackground,
  Image
} from 'react-native';

export default function(item){
    return (
      <View >
        <Image source={require('./imagens/img1.jpg')} style={{height:200,width:600,aspectRatio:1.8}}/>
         
       
      </View>
    );
 
}