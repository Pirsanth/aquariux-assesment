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
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import {SLIGHTLY_DARKER_GREY} from './colors';
import Header from './Header';
import data from './data.json';
import Avatar from './Avatar';

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
          <FlatList
            data={data}
            renderItem={({ item, index })=>{
              //filter is incase any of the fields are null, its not really needed because the requirements make firstName and lastName required but i thought i'd add it anyways incase the original json has missing data
              const displayName = ([item.firstName,item.lastName]).filter(x => !!x).join(" ");
              return (
                <TouchableOpacity style={{
                  flexDirection:'row',
                  alignItems:'center',
                  padding: 5,
                  marginLeft:10,
                  borderColor:SLIGHTLY_DARKER_GREY,
                  borderBottomWidth:1
                }}>
                  <Avatar size={50}/>

                  <Text style={{marginLeft:10}}>{displayName}</Text>
                </TouchableOpacity>
              )

            }}
          />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
