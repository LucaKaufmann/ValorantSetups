import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React, { Component } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
// import TopicList from './src/TopicList';
import dataJson from './data.json'
import { SafeAreaView } from 'react-native-safe-area-context';


export default class App extends Component {

  render() {
    return (
      <SafeAreaView>
          <Text>{dataJson.title}</Text>
          <View>
            <FlatList
              data={dataJson.topics}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item: topic }) => (
                <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <Text>{topic.title}</Text>
                </View>
              )}
            />
          </View>

      </SafeAreaView>
        // {exampleJson.age}
        // {exampleJson.subject.map(subject => {
        //   return (
            
        //       {subject.name}
        //       {subject.grade}
            
        //   )
        // })}
      
    );
  }
};

// const RootStack = createStackNavigator({
//   <Stack.Navigator>
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Notifications" component={Notifications} />
//       <Stack.Screen name="Profile" component={Profile} />
//       <Stack.Screen name="Settings" component={Settings} />
//     </Stack.Navigator>
// });

// export default createAppContainer(RootStack);