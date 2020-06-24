import React, { Component } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
const { Navigation } = require('react-native-navigation');
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
                <View style={styles.separator} >
                  <Button
                    title={topic.title}
                    color='#111920'
                    tyle={{marginLeft: 15}}
                    onPress={() => Navigation.push(this.props.componentId, {
                      component: {
                        name: 'Subtopics',
                        passProps: {
                          name: 'John Doe',
                          status: 'online',
                          topicData: topic
                        }
                      }
                    })}/>
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
      text: dataJson.title
    }
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