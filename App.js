/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Login from './Login';

export default class App extends Component {
  render(){
    return(
      <View>
        <Login usuario={this.state.user}/>
      </View>
    )
  }
}