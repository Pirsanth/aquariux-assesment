/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   View,
 } from 'react-native';
 import {ORANGE} from './colors';

 
 const Avatar = ({size, style = {}}) => {
 
   return (
       <View style={{
            height:size,
            width:size,
            borderRadius:size/2,
            backgroundColor:ORANGE,
            ...style
       }}/>
   );
 };
 
 
 export default Avatar;
 