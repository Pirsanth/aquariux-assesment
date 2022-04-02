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
import {} from './colors';
import Header from './Header';

const App = () => {

  return (
    <View style={{flex:1}}>
      
        <Header>
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
        </Header>

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
