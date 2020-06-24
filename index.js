// In index.js of a new project
const { Navigation } = require('react-native-navigation');
const React = require('react');
const { View, Text, StyleSheet } = require('react-native');
import TopicsList from './components/TopicsList.js'
import dataJson from './data.json'
  
Navigation.registerComponent('Topics', () => TopicsList);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Topics'
            }
          }
        ]
      }
    }
  });
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#'+dataJson.backgroundColor
  }
});