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
        <Text > Elemento lista {item.id}</Text>
        <Image source={require('./imagens/img1.jpg')} style={{height:200}}/>
         
       
      </View>
    );
 
}