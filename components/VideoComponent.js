import React, { useState, useCallback, useRef, Component } from "react";
import { Button, FlatList, Text, View } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";

export default class VideoComponent extends Component {

    extractVideoId(urlString) {
        return urlString.replace('https://youtu.be/','');
    }

    onFullScreen = fullScreen => {
      console.log("fullscreen ", fullScreen);
    };
    
    play = () => {
      this.player.playVideo();
    };
    pause = () => {
      this.player.pauseVideo();
    };
    
    seekTo = s => {
      this.player.seekTo(s);
    };

    render() {
        return (
            // <SafeAreaView style={styles.background}>
            <View style={styles.background}>
                {/* <YoutubePlayer
                loop
                topBar={TopBar}
                videoId={this.extractVideoId(this.props.videoData.url)}
                autoPlay
                onFullScreen={this.onFullScreen}
                /> */}
                <Player videoId={this.extractVideoId(this.props.videoData.url)}/>
{/* 
                <YoutubePlayer
                        height={300}
                        play={playing}
                        videoId={this.extractVideoId(this.props.videoData.url)}
                      />
                <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
                <View>
                <Text style={styles.description}>
                    {this.props.videoData.description}
                </Text>
                <Text style={styles.description}>
                    Submitted by {this.props.videoData.author}
                </Text>
                </View>
            </View>
            
        );
    }
};

VideoComponent.options = {
    statusBar: {
        backgroundColor: null
    },
    topBar: {
      title: {
        fontFamily: 'valorant'
      }
    }
}



const TopBar = ({ play, fullScreen }) => (
    <View
      style={{
        alignSelf: "center",
        position: "absolute",
        top: 0
      }}
    >
      {/* <Text style={{ color: "#FFF" }}>{props.videoData.title}</Text> */}
    </View>
  );

const styles = {
    background: {
      backgroundColor: '#EBE8E2',
      flex: 1
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
    },
    description: {
        margin: 15
    }
  }

  export function Player({videoId}) {
    const [playing, setPlaying] = useState(false);
  
    const onStateChange = useCallback((state) => {
      if (state === "ended") {
        setPlaying(false);
        Alert.alert("video has finished playing!");
      }
    }, []);
  
    const togglePlaying = useCallback(() => {
      setPlaying((prev) => !prev);
    }, []);
  
    return (
      <View>
        <YoutubePlayer
          height={300}
          play={playing}
          videoId={videoId}
          onChangeState={onStateChange}
        />
        {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
      </View>
    );
  }