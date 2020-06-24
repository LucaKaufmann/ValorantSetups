import React, { Component } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { observer } from 'mobx-react';
import { restaurantStore, topicsStore } from './stores';
// import dataJson from '../data.json'

class TopicList extends Component {
  static navigationOptions = {
    title: 'Topics',
  };

  componentDidMount() {
    topicsStore.loadAll();
  }

  render() {
    return (
      <View>
        <FlatList
          data={topicsStore.all().slice()}
          keyExtractor={(item) => item.id}
          renderItem={({ item: topic }) => (
            <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <Text>{topic.attributes.name}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

export default observer(TopicList);