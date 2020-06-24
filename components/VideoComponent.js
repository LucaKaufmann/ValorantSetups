import React, { Component } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
const { Navigation } = require('react-native-navigation');

export default class VideoComponent extends Component {

  render() {
    return (
      // <SafeAreaView style={styles.background}>
          <View style={{flex: 1}}>
            <Text>{this.props.videoData.title}</Text>
          </View>

      // </SafeAreaView>
      
    );
  }
};

VideoComponent.options = {
    statusBar: {
        backgroundColor: null
    }
}

const styles = {
    background: {
      backgroundColor: '#EBE8E2'
    },
    separator: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 50,
      borderBottomColor: '#ada89e',
      borderBottomWidth: 1,
    },
    list: {
      backgroundColor: '#EBE8E2'
    }
  }