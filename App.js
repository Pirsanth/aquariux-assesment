/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import {LIGHT_GREY, SLIGHTLY_DARKER_GREY} from './colors';

const SPACE_FROM_EDGE = 20;

const App = () => {


  //If you're wondering why there's a View, another View and a SafeAreaView its so the gray header extends up to the iphone's notch
  return (
    <View style={{flex:1}}>
      
      <View style={{
        backgroundColor:LIGHT_GREY,
        paddingBottom:10,
        borderBottomWidth:1,
        borderBottomColor:SLIGHTLY_DARKER_GREY
      }}>
        <SafeAreaView
          style={{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            marginTop:20,
            marginHorizontal:SPACE_FROM_EDGE
          }}
        >
          <TouchableOpacity style={{
          }}>
            <Image 
              style={{
                height:25,
                width:25
              }}
              source={require('./searchIcon.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <Text style={{
            fontWeight:'bold',
            fontSize:18
          }}>Contacts</Text>

          <TouchableOpacity style={{
          }}>
            <Image 
              style={{
                height:25,
                width:25
              }}
              source={require('./plusIcon.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </SafeAreaView>
      </View>

      <SafeAreaView style={{
        flex:1,
      }}>
          
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
