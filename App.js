/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import ContactsList from './ContactsList'
import ContactDetails from './ContactDetails'
import data from './data.json'

class App extends Component {
  constructor () {
    super();
    this.state = {
      contacts: data,
      refreshing:false,
      selectedIndex:null
    };
  }


  onContactPressed = (indexOfContactPressed) => {
    this.setState({
      selectedIndex:indexOfContactPressed
    })
  }
 
  onPullToRefresh = () => {
    this.setState({
      refreshing:true,
      contacts:[]
    }, ()=> {
      this.setState({
        refreshing:false,
        contacts:data
      })
    })
  }

  onCancelPressed = () => {
    this.setState({
      selectedIndex:null
    })
  }

  render () {
    return (
      <View style={{flex:1}}>
      {
        this.state.selectedIndex?(
          <ContactDetails 
            selectedContact={this.state.contacts[this.state.selectedIndex]}
            onCancelPressed={this.onCancelPressed}
          />
        ):(
          <ContactsList
            refreshing={this.state.refreshing}
            contacts={this.state.contacts}
            onContactPressed={this.onContactPressed}
            onPullToRefresh={this.onPullToRefresh}
          />
        )
      }
    </View>
    );
  }
}

export default App;
