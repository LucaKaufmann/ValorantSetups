import React, { Component } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
// import TopicList from './src/TopicList';
import dataJson from '../data.json'
import { SafeAreaView } from 'react-native-safe-area-context';

export default class TopicsList extends Component {

  render() {
    return (
      // <SafeAreaView style={styles.background}>
          <View style={{flex: 1}}>
            <FlatList
              data={dataJson.topics}
              keyExtractor={(item) => item.id.toString()}
              style={styles.list}
              renderItem={({ item: topic }) => (
                <View style={styles.separator}>
                  <Text style={{marginLeft: 15}}>{topic.title}</Text> 
                </View>
              )}
            />
          </View>

      // </SafeAreaView>
      
    );
  }
};

TopicsList.options = {
  topBar: {
    title: {
      text: dataJson.title,
      color: '#'+dataJson.accentColor
    },
    background: {
      color: '#'+dataJson.mainColor
    }
  }
}

const styles = {
  background: {
    backgroundColor: '#'+dataJson.backgroundColor
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
    backgroundColor: '#'+dataJson.backgroundColor
  }
}