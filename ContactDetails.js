/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import {ORANGE} from './colors';
import Header from './Header';
import Avatar from './Avatar';

const ContactDetails = (props) => {

  return (
    <View style={{flex:1}}>
      
        <Header>
          <TouchableOpacity 
            style={{
            }}
            onPress={props.onCancelPressed}
          >
            <Text style={InlineStyles.headerButtonText}>Cancel</Text>
          </TouchableOpacity>


          <TouchableOpacity style={{
          }}>
            <Text style={InlineStyles.headerButtonText}>Save</Text>
          </TouchableOpacity>
        </Header>

      <SafeAreaView style={{
        flex:1,
      }}>
 
      </SafeAreaView>
    </View>
  );
};


const InlineStyles = StyleSheet.create({
  headerButtonText: {
    color:ORANGE,
    fontSize:16
  }
});


export default ContactDetails;
