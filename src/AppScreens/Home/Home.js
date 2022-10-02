import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet, Text, View, ScrollView, Image } from "react-native";

const Home = ({ AppState }) => {
    const { allcards, setcard } = AppState;
    const dimensions = Dimensions.get('window');
    const imageWidth = Math.round(dimensions.width*0.3);

    var posters = allcards.map(card => card.cardImg)
    return (
        <View style={styles.screen}>
            <ScrollView horizontal={true} marginLeft={-imageWidth-20} marginRight={-imageWidth-20}>
            {
                posters.map((poster, i) => {
                    return (
                        <Image
                            resizeMode={'cover'}
                            resizeMethod={'resize'}
                            style={{ width: imageWidth }}
                            key={i}
                            source={poster}
                            margin={10}
                        />
                    );
                })
            }
            </ScrollView>
        </View>
        
    );
}

const styles = StyleSheet.create({
    screen: {
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        flex: 1
    }
  });
  

export default Home;