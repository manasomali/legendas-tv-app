import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet, Text, View, ScrollView, Image } from "react-native";
import GlobalFooter from "../../Footers/GlobalFooter";
import GlobalHeader from "../../Headers/GlobalHeader";

const Home = ({ AppState }) => {
    const { allcards, setcard } = AppState;
    const dimensions = Dimensions.get('window');
    const imageWidth = Math.round(dimensions.width*0.3);

    var posters = allcards.map(card => card.cardImg)
    return (
        <View style={styles.screen}>
            <GlobalHeader/>
            <View style={styles.body}>
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
                <GlobalFooter/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    },
    body: {
        flex: 1,
        marginTop: 50
    }
  });
  

export default Home;