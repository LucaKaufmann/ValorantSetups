import React, { Component } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
const { Navigation } = require('react-native-navigation');
import { Cell, Separator, TableView } from 'react-native-tableview-simple';

export default class VideosList extends Component {

  render() {
    return (
      // <SafeAreaView style={styles.background}>
          <View style={{flex: 1}}>
            <FlatList
              data={this.props.subtopicData.videos}
              keyExtractor={(item) => item.id.toString()}
              style={styles.list}
              renderItem={({ item: video, separators }) => (
                <Cell
                  title={video.title}
                  backgroundColor='#EBE8E2'
                  titleTextColor='#111920'
                  accessory='DisclosureIndicator'
                  onPress={() => Navigation.push(this.props.componentId, {
                    component: {
                      name: 'Video',
                      passProps: {
                        videoData: video
                      },
                      options: {
                        topBar: {
                          title: {
                            text: video.title
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
            {/* <Text>{this.props.subtopicData.title}</Text> */}
          </View>

      // </SafeAreaView>
      
    );
  }
};

VideosList.options = {
    statusBar: {
        backgroundColor: null
    },
    topBar: {
      title: {
        fontFamily: 'valorant'
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