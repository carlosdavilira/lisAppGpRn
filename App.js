/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
import ElementoLista from './src/ElementoLista'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
  
} from 'react-native/Libraries/NewAppScreen';
import { bold } from 'ansi-colors';

export default class App extends Component{
  state = {
    lista: 
    [
      {id:"1", imgSrc:"./imagens/img1.jpg"},
      {id:"2", imgSrc:"./imagens/img1.jpg"},
      {id:"3", imgSrc:"./imagens/img1.jpg"},
      {id:"4", imgSrc:"./imagens/img1.jpg"},
      {id:"5", imgSrc:"./imagens/img1.jpg"},
      {id:"6", imgSrc:"./imagens/img1.jpg"},
      {id:"7", imgSrc:"./imagens/img1.jpg"},
      {id:"8", imgSrc:"./imagens/img1.jpg"},
      {id:"9", imgSrc:"./imagens/img1.jpg"},
      {id:"10", imgSrc:"./imagens/img1.jpg"},
      {id:"11", imgSrc:"./imagens/img1.jpg"},
      {id:"12", imgSrc:"./imagens/img1.jpg"},
      {id:"13", imgSrc:"./imagens/img1.jpg"},
      {id:"14", imgSrc:"./imagens/img1.jpg"},
      {id:"15", imgSrc:"./imagens/img1.jpg"},
      {id:"16", imgSrc:"./imagens/img1.jpg"},
      {id:"17", imgSrc:"./imagens/img1.jpg"},
      {id:"18", imgSrc:"./imagens/img1.jpg"},
      {id:"19", imgSrc:"./imagens/img1.jpg"},
      {id:"20", imgSrc:"./imagens/img1.jpg"} 


    ]
  }

  render(){
    return (
      <View style={styles.body}>
        <Text style={styles.textTabBar} > React Native - GP</Text>
        <FlatList data={this.state.lista} keyExtractor={item => `${item.id}`} renderItem={({item}) => <ElementoLista {...item}/>} />
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  textTabBar:{
    backgroundColor:'#FFA000',
    height:45,
    textAlign:"center",
    color:Colors.white,
    textAlignVertical:"center",
    fontSize:18   

  }
});

//export default App;
