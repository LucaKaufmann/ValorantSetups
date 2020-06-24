import React, { Component } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
const { Navigation } = require('react-native-navigation');

export default class VideosList extends Component {

  render() {
    return (
      // <SafeAreaView style={styles.background}>
          <View style={{flex: 1}}>
            <FlatList
              data={this.props.subtopicData.videos}
              keyExtractor={(item) => item.id.toString()}
              style={styles.list}
              renderItem={({ item: video }) => (
                <View style={styles.separator} >
                  <Button
                    title={video.title}
                    color='#111920'
                    tyle={{marginLeft: 15}}
                    onPress={() => Navigation.push(this.props.componentId, {
                      component: {
                        name: 'Videos',
                        passProps: {
                          videoData: video
                        }
                      }
                    })}/>
                </View>
              )}
            />
            {/* <Text>{this.props.subtopicData.title}</Text> */}
          </View>

      // </SafeAreaView>
      
    );
  }
};

VideosList.options = {
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