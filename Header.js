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
   View,
 } from 'react-native';
 import {LIGHT_GREY, SLIGHTLY_DARKER_GREY} from './colors';
 
 const SPACE_FROM_EDGE = 20;
 
 const Header = (props) => {
 
   //If you're wondering why there's a View and a SafeAreaView its so the gray header extends up to the iphone's notch
   return (
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
           {
               props.children
           }
         </SafeAreaView>
       </View>
   );
 };
 
 
 export default Header;
 