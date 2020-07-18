import React, { Component } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
const { Navigation } = require('react-native-navigation');
import { Cell, Separator, TableView } from 'react-native-tableview-simple';

export default class SubTopicsList extends Component {

  // static get options(props) {
  //   return {
  //     topBar: {
  //       title: {
  //         text: props.topicData.title
  //       }
  //     }
  //   };
  // }

  render() {
    return (
      // <SafeAreaView style={styles.background}>
          <View style={{flex: 1}}>
            <FlatList
              data={this.props.topicData.subTopics}
              keyExtractor={(item) => item.id.toString()}
              style={styles.list}
              renderItem={({ item: subtopic, separators }) => (
                <Cell
                  title={subtopic.title}
                  backgroundColor='#EBE8E2'
                  titleTextColor='#111920'
                  accessory='DisclosureIndicator'
                  onPress={() => Navigation.push(this.props.componentId, {
                    component: {
                      name: 'Videos',
                      passProps: {
                        subtopicData: subtopic
                      },
                      options: {
                        topBar: {
                          title: {
                            text: subtopic.title
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
              // {({ item: subtopic }) => (
              //   <View style={styles.separator} >
              //     <Button
              //       title={subtopic.title}
              //       color='#111920'
              //       tyle={{marginLeft: 15}}
              //       onPress={() => Navigation.push(this.props.componentId, {
              //         component: {
              //           name: 'Videos',
              //           passProps: {
              //             subtopicData: subtopic
              //           },
              //           options: {
              //             topBar: {
              //               title: {
              //                 text: topic.title
              //               }
              //             }
              //           }
              //         }
              //       })}/>
              //   </View>
              // )}
            />
            {/* <Text>{this.props.topicData.title}</Text> */}
          </View>

      // </SafeAreaView>
      
    );
  }
};

SubTopicsList.options = {
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