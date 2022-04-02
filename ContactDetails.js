/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert
} from 'react-native';
import {ORANGE, LIGHT_GREY, SLIGHTLY_DARKER_GREY} from './colors';
import Header from './Header';
import Avatar from './Avatar';

const Title = ({text}) => {
  return (
    <View style={{width:'100%', backgroundColor:LIGHT_GREY,paddingVertical:5}}>
      <Text style={{fontWeight:'600',marginLeft:15, fontSize:18}}>{text}</Text>
    </View>
  )
}

const Input = ({label,value,hideBorder,required, setValue,autoFocus=false,thisref,nextRef, extraProps}) => {
  
  return (
    <View style={{width:'100%', paddingVertical:5, flexDirection:'row', alignItems:'center', marginLeft:15,borderColor:SLIGHTLY_DARKER_GREY,borderBottomWidth:hideBorder?0:1}}>
      <Text style={{ fontSize:14, width:'30%'}}>{label}</Text>
      <TextInput 
        style={{padding:8, borderWidth:1, borderColor:(required&&!value)?'red':SLIGHTLY_DARKER_GREY, width: '62%', borderRadius:5}} 
        value={value}
        onChangeText={(text)=>{
          setValue(text)
        }}
        autoFocus={autoFocus}
        returnKeyType="next"
        ref={thisref}
        onSubmitEditing={() => nextRef && nextRef?.current?.focus()}
        {...extraProps}
      />
    </View>
  )
}

const ContactDetails = (props) => {
  const ref_input1 = useRef();
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();

  const [firstName, setFirstName] = useState(props.selectedContact?.firstName||"");
  const [lastName, setLastName] = useState(props.selectedContact?.lastName||"");
  const [email, setEmail] = useState(props.selectedContact?.email||"");
  const [phone, setPhone] = useState(props.selectedContact?.phone||"");


  
  return (
    <View style={{flex:1}}>
      
        <Header>
          <TouchableOpacity 
            onPress={()=>{
                props.onCancelPressed();
            }}
          >
            <Text style={InlineStyles.headerButtonText}>Cancel</Text>
          </TouchableOpacity>


          <TouchableOpacity 
            onPress={()=>{
              if(!firstName||!lastName){
                alert('The first name and last name are required');
                return
              }
              const updatedItem = {
                firstName,
                lastName,
                email,
                phone,
                id:props.selectedContact.id
              }
              props.onSavePressed(updatedItem);
            }}
          >
            <Text style={InlineStyles.headerButtonText}>Save</Text>
          </TouchableOpacity>
        </Header>

      <SafeAreaView style={{
        flex:1,
      }}>
        <ScrollView contentContainerStyle={{paddingVertical:20}}>
          <Avatar
            size={100}
            style={{alignSelf:'center', marginBottom:30}}
          />

          <Title text="Main Information"/>
          <Input label="First Name" value={firstName} setValue={setFirstName} required autoFocus thisref={ref_input1} nextRef={ref_input2} />
          <Input label="Last Name" value={lastName} setValue={setLastName} required thisref={ref_input2} hideBorder nextRef={ref_input3}/>

          <Title text="Sub Information"/>
          <Input label="Email" value={email} setValue={setEmail} thisref={ref_input3} nextRef={ref_input4} extraProps={{keyboardType:"email-address"}} />
          <Input label="Phone" value={phone} setValue={setPhone} thisref={ref_input4} extraProps={{keyboardType:"phone-pad"}}/>
        </ScrollView>
 
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
