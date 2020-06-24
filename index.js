// In index.js of a new project
const { Navigation } = require('react-native-navigation');
const React = require('react');
const { View, Text, StyleSheet } = require('react-native');
import TopicsList from './components/TopicsList.js'
import SubTopicsList from './components/SubTopicsList.js'

import dataJson from './data.json'
import VideosList from './components/VideosList.js';
import VideoComponent from './components/VideoComponent.js';
  
Navigation.registerComponent('Topics', () => TopicsList);
Navigation.registerComponent('Subtopics', () => SubTopicsList);
Navigation.registerComponent('Videos', () => VideosList);
Navigation.registerComponent('Video', () => VideoComponent);




Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setDefaultOptions({
        topBar: {
            title: {
                color: '#EA575B'
            },
            background: {
                color: '#111920'
            },
            backButton: {
                color: '#EA575B'
            }
        }
    });
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