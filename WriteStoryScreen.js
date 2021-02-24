import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    Alert
  } from 'react-native';
import { Header } from 'react-native-elements';

export default class WriteStoryScreen extends React.Component() {

    render(){
        return(
            <View>
            <Header
            backgroundColor={'#9c8210'}
            centerComponent={{
              text: 'Story Hub',
              style: { color: "red", fontSize: 10 },
            }}
          />

          
      <TextInput
          placeholder="Title of the Story"
           keyboardType='twitter'
         />

      <TextInput
          placeholder="Author of the Story"
           keyboardType='text'
         />

      <TextInput
          placeholder="Write Story"
           keyboardType='multiple Line'
         />
         
          </View>
        )
    }
}