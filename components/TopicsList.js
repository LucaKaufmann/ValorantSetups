import React, { Component } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
const { Navigation } = require('react-native-navigation');
// import TopicList from './src/TopicList';
import dataJson from '../data.json'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Cell, Separator, TableView } from 'react-native-tableview-simple';

export default class TopicsList extends Component {

  render() {
    return (
      // <SafeAreaView style={styles.background}>
          <View style={{flex: 1}}>
            <FlatList
              data={dataJson.topics}
              keyExtractor={(item) => item.id.toString()}
              style={styles.list}
              renderItem={({ item: topic, separators }) => (
                <Cell
                  title={topic.title}
                  backgroundColor='#EBE8E2'
                  titleTextColor='#111920'
                  accessory='DisclosureIndicator'
                  onPress={() => Navigation.push(this.props.componentId, {
                    component: {
                      name: 'Subtopics',
                      passProps: {
                        name: 'John Doe',
                        status: 'online',
                        topicData: topic
                      },
                      options: {
                        topBar: {
                          title: {
                            text: topic.title
                          }
                        }
                      }
                    }
                  })}
                  onHighlightRow={separators.highlight}
                  onUnHighlightRow={separators.unhighlight}
                />
              )}
              ItemSeparatorComponent={({ highlighted }) => (
                <Separator isHidden={highlighted} />
              )}
            />
          </View>

      // </SafeAreaView>
      
    );
  }

  navigationButtonPressed({ buttonId }) {
    if (buttonId === 'sideMenu') {
        alert('button pressed')
    };
  }
};

TopicsList.options = {
  topBar: {
    title: {
      text: dataJson.title,
      fontFamily: 'valorant'
    },
    // leftButtons: {
    //   id: 'sideMenu',
    //   icon: require('../assets/icons/info.png')
    // }
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